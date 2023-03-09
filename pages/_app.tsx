import MainLayout from '@/components/layouts/MainLayout'
import BestLayout from '@/components/layouts/BestLayout'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P,IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App ({ Component, pageProps}: AppProps) {

  // const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )

  return (
    <BestLayout>
      <Component {...pageProps} />
    </BestLayout>
  )

}
