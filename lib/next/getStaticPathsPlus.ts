import { ApolloClient } from '@apollo/client'
import { GetStaticPaths, GetStaticPathsResult } from 'next'
import { createApolloClientSsr } from '../graphql/apollo/apollo'

type Fallback = GetStaticPathsResult['fallback']
type Paths = GetStaticPathsResult['paths']

interface GetStaticPathsPlusOptions {
  paths?: Paths
  getPaths?: (options: { apolloClient: ApolloClient<any> }) => Promise<Paths>
  fallback?: Fallback
}

export const getStaticPathsPlus = ({
  fallback = 'blocking',
  getPaths,
  paths: staticPaths = [],
}: GetStaticPathsPlusOptions) => {
  const getStaticPaths: GetStaticPaths = async () => {
    let paths = staticPaths

    if (getPaths) {
      const apolloClient = createApolloClientSsr({})
      const pathsFromCallback = await getPaths({ apolloClient })
      paths = [...paths, ...pathsFromCallback]
    }

    return {
      paths,
      fallback,
    }
  }
  return getStaticPaths
}
