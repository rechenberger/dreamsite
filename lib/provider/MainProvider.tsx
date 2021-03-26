import { ApolloProvider } from '@apollo/client'
import React, { FunctionComponent } from 'react'
import { useApollo } from '../graphql/apollo/apollo'
import { GlobalStyles } from './GlobalStyles'

export const MainProvider: FunctionComponent<{ pageProps: any }> = ({
  children,
  pageProps,
}) => {
  const apolloClient = useApollo({ initialState: pageProps.initialApolloState })
  return (
    <>
      <GlobalStyles />
      <ApolloProvider client={apolloClient}>
        <>{children}</>
      </ApolloProvider>
    </>
  )
}
