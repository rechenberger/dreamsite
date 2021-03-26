import { ApolloClient, InMemoryCache } from '@apollo/client'
import { useMemo } from 'react'

export interface CreateApolloClientOptions {
  initialState?: any
}

const createApolloClient = (options: CreateApolloClientOptions) => {
  const uri = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT_URL

  const apolloClient = new ApolloClient({
    uri,
    cache: new InMemoryCache(),
  })

  return apolloClient
}

let apolloClientCached: ApolloClient<any>
const createApolloClientSsr = (options: CreateApolloClientOptions) => {
  const { initialState } = options
  const isServer = typeof window === 'undefined'
  const apolloClient = apolloClientCached ?? createApolloClient(options)

  // Restore Initial State (from getStaticProps)
  if (initialState) {
    const existingCache = apolloClient.extract()
    apolloClient.cache.restore({ ...existingCache, ...initialState })
  }

  // Only create apolloClient once on client
  // TODO: find out why?
  if (!isServer) {
    apolloClientCached = apolloClient
  }

  return apolloClient
}

export function useApollo(options: CreateApolloClientOptions) {
  const store = useMemo(() => createApolloClientSsr(options), [options])
  return store
}
