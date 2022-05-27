import type { AppProps } from 'next/app'
import Head from 'next/head'

import { TrackingProvider } from '@/contexts/ga-trackers'

import '../styles/global.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    </Head>
    <TrackingProvider>
      <Component {...pageProps} />
    </TrackingProvider>
  </>
)

export default MyApp
