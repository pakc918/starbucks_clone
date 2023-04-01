import MainLayout from '@/components/layouts/MainLayout'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import searchresult from './searchresult'
import { CookiesProvider } from 'react-cookie'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
      <RecoilRoot>
        <MainLayout>
          {/* <BrowserRouter>
            <Route path="/searchresult" element={<searchresult/>}></Route> */}
            <Component {...pageProps} />
          {/* </BrowserRouter> */}
        </MainLayout>
      </RecoilRoot>
    </CookiesProvider>
  )
}
