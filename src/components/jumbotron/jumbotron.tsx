import { Box, Flex, Heading, Stack, Link, Text, useMediaQuery } from '@chakra-ui/react'
import { CgFacebook, CgMail } from 'react-icons/cg'
import Image from 'next/image'
import React from 'react'
import { NavBar } from '..'

export const Jumbotron = () => {
  const [isMobile] = useMediaQuery('(min-width: 375px)')

  return (
    <Box>
      <Flex align='center' justifyContent='space-evenly' direction={['column', 'column', 'row', 'row']}>
        <Box width={{ base: '90%', sm: '90%', lg: '400px' }} position={{ base: 'absolute', sm: 'absolute', lg: 'unset' }} zIndex='999'>
          <Heading>Serving the Canterbury region since 1987.</Heading>
          <Text paddingBottom='10px'>Get in touch with us today about your Project, Renovation or Maintenance work</Text>
          <Stack direction='row'>
            <Link href='https://www.facebook.com/scallyelectrical' isExternal>
              <CgFacebook size='23' color='#fff' />
            </Link>
            <Link href='mailto:scallyelectrical@xtra.co.nz'>
              <CgMail size='25' color='#fff' />
            </Link>
          </Stack>
        </Box>
        <Box position={{ base: 'relative', sm: 'relative', lg: 'unset' }} opacity={{ base: '30%', sm: '30%', lg: '100%' }}>
          <Image src='/banner_image.png' width='500px' height='300px' objectFit='cover' />
        </Box>
      </Flex>
    </Box>
  )
}
