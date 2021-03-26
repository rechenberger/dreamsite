import { ApolloClient, QueryOptions } from '@apollo/client'
import { merge } from 'lodash'
import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next'
import { createApolloClientSsr } from '../graphql/apollo/apollo'

export type GetStaticPropsPlusContext = GetStaticPropsContext & {
  apolloClient: ApolloClient<any>
}

export type GetStaticPropsPlusResult = Partial<GetStaticPropsResult<any>> | void

export type GetStaticPropsPlusOptions = {
  queries?: QueryOptions[]
  getQueries?: (ctx: GetStaticPropsPlusContext) => Promise<QueryOptions[]>
  getPropsWithApollo?: (
    ctx: GetStaticPropsPlusContext
  ) => Promise<GetStaticPropsPlusResult>
}

export const getStaticPropsPlus = (options: GetStaticPropsPlusOptions) => {
  const { getPropsWithApollo, getQueries, queries: staticQueries } = options

  const getStaticProps: GetStaticProps = async (ctx) => {
    const apolloClient = createApolloClientSsr({})
    const ctxPlus: GetStaticPropsPlusContext = { ...ctx, apolloClient }

    let result: GetStaticPropsPlusResult = {}

    // Queries
    let queries = staticQueries || []
    if (getQueries) {
      queries = [...queries, ...(await getQueries(ctxPlus))]
    }
    for (const query of queries) {
      await apolloClient.query(query)
    }

    if (getPropsWithApollo) {
      // getPropsWithApollo
      result = merge(result, await getPropsWithApollo(ctxPlus))
    }

    // Apollo Cache
    result = merge(result, {
      props: {
        initialApolloState: apolloClient.cache.extract(),
      },
    })

    return result as GetStaticPropsResult<any>
  }

  return getStaticProps
}
