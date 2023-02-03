import '../styles/globals.css'
import '@picocss/pico'
import { ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'

import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/layout.css'

const theme = {
  colors: {
    primary: '#355C7D',
  },
}

// export default function App({ Component, pageProps }: AppProps) {
function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }
  // )} {
  return (
    <>
      <Header />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      <Footer />
    </>
  )
}

export default App
