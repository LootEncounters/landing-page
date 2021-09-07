import type { AppProps } from 'next/app'
import "@styles/globals.scss";

function Encounters({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default Encounters

