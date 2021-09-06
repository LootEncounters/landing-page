import "@styles/globals.scss";
import type { AppProps } from 'next/app'

function Encounters({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default Encounters

