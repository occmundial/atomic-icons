import '../styles/globals.css'
import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import axios from 'axios'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const style: HTMLElement | null =
      document.getElementById('server-side-styles')
    if (style && style.parentNode) {
      style.parentNode.removeChild(style)
    }
  }, [])

  useEffect(() => {
    loadSprite()
  }, [])

  const loadSprite = async () => {
    try {
      const res = await axios.get<string>(
        `https://cdn-icons-occ.occ.com.mx/atomic-icons-${process.env.NEXT_PUBLIC_VERSION}.svg`
      )
      const div = document.createElement('div')
      div.style.display = 'none'
      div.innerHTML = res.data
      document.body.insertBefore(div, document.body.firstChild)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
