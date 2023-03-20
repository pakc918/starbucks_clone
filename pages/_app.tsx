import MainLayout from '@/components/layouts/MainLayout'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { ReactElement, ReactNode, useState } from 'react'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P,IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App ({ Component, pageProps}: AppProps) {

  // const getLayout = Component.getLayout ?? ((page) => page)

  const router = useRouter();

  return (
    <div>
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
    </div>
  )

}
