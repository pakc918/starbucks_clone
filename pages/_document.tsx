import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta name="description" content="StarBucks Clone Site" />
        <meta name="keywords" content="StarBucks, Clone, Site" />
        <meta name="author" content="SpaLand" />
        <Script src="https://code.jquery.com/jquery-1.12.4.min.js" strategy="beforeInteractive" />
        <Script src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js" strategy="beforeInteractive" />
        <Script src="https://cdn.iamport.kr/v1/iamport.js"></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
