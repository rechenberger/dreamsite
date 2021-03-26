import { MainProvider } from '../lib/provider/MainProvider'

function MyApp({ Component, pageProps }) {
  return (
    <MainProvider pageProps={pageProps}>
      <Component {...pageProps} />
    </MainProvider>
  )
}

export default MyApp
