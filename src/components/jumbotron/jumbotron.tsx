import { Box, Flex, Heading, Stack, Link, Text, useMediaQuery } from '@chakra-ui/react'
import { CgFacebook, CgMail } from 'react-icons/cg'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
// import { useMediaQuery } from '../../business/hooks'

import { GAevent } from '../../common'

export const Jumbotron = () => {
  const clickHandler = (action: string, iconName: string) => {
    GAevent('Contact', `${action} ${iconName} Icon`)
  }
  const [isNotMobile, setNotIsMobile] = useState(false)
  const [mediaQuery] = useMediaQuery('(min-width: 1020px)')

  useEffect(() => {
    if (mediaQuery !== isNotMobile) {
      setNotIsMobile(mediaQuery)
    }
  }, [mediaQuery])

  return (
    <Box>
      <Flex align='center' justifyContent='space-evenly' direction={['column', 'column', 'row', 'row']}>
        <Box width={{ base: '80%', sm: '90%', lg: '400px' }} position={{ base: 'absolute', sm: 'absolute', lg: 'unset' }} zIndex='999'>
          <Heading fontSize={{ base: '1em', sm: '1.5em', md: '2em', lg: '2.3em' }}>Serving the Canterbury region since 1987.</Heading>
          <Text fontSize={{ base: '0.8em', sm: '1em', md: '1em', lg: '1em' }} paddingBottom='10px'>
            Get in touch with us today about your Project, Renovation or Maintenance work
          </Text>
          <Stack direction='row'>
            <Link
              href='https://www.facebook.com/scallyelectrical'
              isExternal
              onClick={() => clickHandler('Click', 'Facebook')}
              variant='iconLink'
            >
              <CgFacebook size='23' color='#fff' />
            </Link>
            <Link href='mailto:scallyelectrical@xtra.co.nz' onClick={() => clickHandler('Click', 'Email')} variant='iconLink'>
              <CgMail size='25' color='#fff' />
            </Link>
          </Stack>
        </Box>
        <Box width='100px' />
        <Box position={{ base: 'relative', sm: 'relative', lg: 'unset' }} opacity={{ base: '30%', sm: '30%', lg: '100%' }}>
          <Image src='/banner_image.png' width={isNotMobile ? '500px' : '800px'} height='300px' objectFit='cover' />
        </Box>
      </Flex>
    </Box>
  )
}
