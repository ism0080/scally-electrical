import Document, { Html, Head, Main, NextScript } from 'next/document'

import { GA_TRACKING_ID } from '@/lib/google-analytics'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en' dir='ltr'>
        <Head>
          <meta charSet='utf-8' />
          <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
          <link rel='manifest' href='/site.webmanifest' />
          <meta name='theme-color' content='#000000' />
          <meta property='og:title' content='Scally Electrical' />
          <meta property='og:image' content='https://scallyelectrical.co.nz/scally_electrical_og.png' />
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
                                    var hostname = window.location.hostname;
                                    if (hostname === "localhost") {window['ga-disable-${GA_TRACKING_ID}'] = true}
                                    function gtag(){dataLayer.push(arguments);}
                                    gtag('js', new Date());

                                    gtag('config', '${GA_TRACKING_ID}', {
                                        page: window.location.pathname
                                    });`
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
