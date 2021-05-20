import { Box, Center } from '@chakra-ui/react'
import Head from 'next/head'
import React, { useEffect } from 'react'

import { GApageView, GAtiming } from '../src/common'
import { Contact, Jumbotron, NavBar } from '../src/components'

export default function Home() {
  useEffect(() => {
    GApageView('Home')
    const currentTime = new Date().getMilliseconds()
    GAtiming('Timing', 'HomePage_render', new Date().getMilliseconds() - currentTime)
  })
  return (
    <Center flexDirection='column' paddingBottom='40px'>
      <Head>
        <title>Scally Electrical, Canterbury NZ</title>
        <meta
          name='description'
          content='At Scally Electrical, we proudly serve the Canterbury region for all your electrical service needs'
        />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <meta name='theme-color' content='#000000' />
        <meta property='og:title' content='Scally Electrical' />
        <meta property='og:image' content='/scally_electrical_og.png' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Box alignSelf={{ base: 'center', sm: 'center', lg: 'flex-start' }} paddingLeft='20px'>
        <NavBar />
      </Box>
      <Box>
        <Jumbotron />
        <Box height={{ base: '40px', sm: '40px', lg: '0' }} />
        <Contact />
      </Box>
    </Center>
  )
}
