import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import { chakraTheme } from '../src/theme'
import { initGA } from '../src/common'

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    initGA()
  }, [])

  return (
    <ChakraProvider theme={chakraTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
