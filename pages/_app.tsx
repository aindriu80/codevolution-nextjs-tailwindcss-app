import '../styles/globals.css'
import '@picocss/pico'
import { ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'

const theme = {
  colors: {
    primary: '#355C7D',
  },
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
