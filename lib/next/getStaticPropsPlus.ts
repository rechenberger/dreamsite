import { ApolloClient, QueryOptions } from '@apollo/client'
import { createApolloClientSsr } from 'lib/graphql/apollo/apollo'
import { merge } from 'lodash'
import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next'

export type GetStaticPropsPlusContext = GetStaticPropsContext & {
  apolloClient: ApolloClient<any>
}

export type GetStaticPropsPlusResult = Partial<GetStaticPropsResult<any>> | void

export type GetStaticPropsPlusOptions = {
  queries?: QueryOptions[]
  getQueries?: (ctx: GetStaticPropsPlusContext) => Promise<QueryOptions[]>
  getProps?: (
    ctx: GetStaticPropsPlusContext
  ) => Promise<GetStaticPropsPlusResult>
  revalidate?: number | boolean
}

export const getStaticPropsPlus = (options: GetStaticPropsPlusOptions) => {
  const { getProps, getQueries, queries: staticQueries, revalidate } = options

  const getStaticProps: GetStaticProps = async (ctx) => {
    // Apollo Client
    const apolloClient = createApolloClientSsr({})
    const ctxPlus: GetStaticPropsPlusContext = { ...ctx, apolloClient }

    // Result
    let result: GetStaticPropsPlusResult = {
      revalidate,
    }

    // Queries
    let queries = staticQueries || []
    if (getQueries) {
      queries = [...queries, ...(await getQueries(ctxPlus))]
    }
    for (const query of queries) {
      await apolloClient.query(query)
    }

    // getProps
    if (getProps) {
      result = merge(result, await getProps(ctxPlus))
    }

    // Apollo Cache
    result = merge(result, {
      props: {
        initialApolloState: apolloClient.cache.extract(),
      },
    })

    // Return
    return result as GetStaticPropsResult<any>
  }

  return getStaticProps
}
