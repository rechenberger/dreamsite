import { ApolloProvider } from '@apollo/client'
import React, { FunctionComponent } from 'react'
import { useApollo } from '../graphql/apollo/apollo'

export const MainProvider: FunctionComponent<{ pageProps: any }> = ({
  children,
  pageProps,
}) => {
  const apolloClient = useApollo({ initialState: pageProps.initialApolloState })
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <>{children}</>
      </ApolloProvider>
    </>
  )
}
