import { MainProvider } from '../lib/provider/MainProvider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <MainProvider pageProps={pageProps}>
      <Component {...pageProps} />
    </MainProvider>
  )
}

export default MyApp
