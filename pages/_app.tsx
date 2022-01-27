import '../styles/globals.css'
import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import AtomicProvider from '@occmundial/atomic/components/Provider'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const style: HTMLElement | null =
      document.getElementById('server-side-styles')
    if (style && style.parentNode) {
      style.parentNode.removeChild(style)
    }
  }, [])

  return (
    <>
      <AtomicProvider
        data={{
          iconsUrl: `https://cdn-icons.occ.com.mx/atomic-icons-${process.env.NEXT_PUBLIC_VERSION}.svg`
        }}
      >
        <Component {...pageProps} />
      </AtomicProvider>
    </>
  )
}
export default MyApp
