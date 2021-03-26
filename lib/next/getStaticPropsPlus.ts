import { ApolloClient } from '@apollo/client'
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
  getPropsWithApollo: (
    ctx: GetStaticPropsPlusContext
  ) => Promise<GetStaticPropsPlusResult>
}

export const getStaticPropsPlus = (options: GetStaticPropsPlusOptions) => {
  const { getPropsWithApollo } = options

  const getStaticProps: GetStaticProps = async (ctx) => {
    const apolloClient = createApolloClientSsr({})
    const ctxPlus: GetStaticPropsPlusContext = { ...ctx, apolloClient }

    let result: GetStaticPropsPlusResult = {}

    if (getPropsWithApollo) {
      result = merge(result, await getPropsWithApollo(ctxPlus))
    }

    result = merge(result, {
      props: {
        initialApolloState: apolloClient.cache.extract(),
      },
    })

    return result as GetStaticPropsResult<any>
  }

  return getStaticProps
}
