import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import { chakraTheme } from '../src/theme'

import '../styles/global.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={chakraTheme}>
    <Component {...pageProps} />
  </ChakraProvider>
)

export default MyApp
