import { ApolloProvider } from '@apollo/client'
import { SeoDefaults } from 'lib/components/Seo'
import { useApollo } from 'lib/graphql/apollo/apollo'
import { GlobalStyles } from 'lib/provider/GlobalStyles'
import React, { FunctionComponent } from 'react'
import { TinaProvider } from './TinaProvider'

export const MainProvider: FunctionComponent<{ pageProps: any }> = ({
  children,
  pageProps,
}) => {
  const apolloClient = useApollo({ initialState: pageProps.initialApolloState })
  return (
    <>
      <SeoDefaults />
      <GlobalStyles />
      <ApolloProvider client={apolloClient}>
        <TinaProvider>
          <>{children}</>
        </TinaProvider>
      </ApolloProvider>
    </>
  )
}
