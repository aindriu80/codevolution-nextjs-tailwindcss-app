import Head from 'next/head'
import '../styles/globals.css'
import '@picocss/pico'
// import { ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'

import Header from '@/layout/Header'
import Footer from '@/layout/Footer'
import 'styles/layout.css'

const theme = {
  colors: {
    primary: '#355C7D',
  },
}

export default function App({ Component, pageProps }: AppProps) {
  // function App({ Component, pageProps }) {
  // if (Component.getLayout) {
  //   return Component.getLayout(<Component {...pageProps} />)
  // }
  // )} {
  return (
    <>
      <Head>
        <title>Codevolution Next.js Tailwindcss App</title>
        <meta name="description" content="Free tutorial on web development" />
      </Head>
      <Header />
      {/* <ThemeProvider theme={theme}> */}
      <Component {...pageProps} />
      {/* </ThemeProvider> */}
      <Footer />
    </>
  )
}

// export default App
