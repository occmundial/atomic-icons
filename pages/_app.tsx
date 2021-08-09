import '../styles/globals.css'
import { useEffect } from 'react'
import type { AppProps } from 'next/app'

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
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
