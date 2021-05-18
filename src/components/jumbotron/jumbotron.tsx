import { Box, Flex, Heading, Stack, Link, Text } from '@chakra-ui/react'
import { CgFacebook, CgMail } from 'react-icons/cg'
import Image from 'next/image'

export const Jumbotron = () => (
  <Box>
    <Flex align='center' justifyContent='space-evenly' direction={['column', 'row', 'row', 'row']}>
      <Box width='400px'>
        <Heading>Serving the Canterbury region since 1987.</Heading>
        <Text paddingBottom='10px'>Get in touch with us today about your Project, Renovation or Maintenance work</Text>
        <Stack direction='row'>
          <Link href='https://www.facebook.com/scallyelectrical' isExternal>
            <CgFacebook color='#fff' />
          </Link>
          <Link href='mailto:scallyelectrical@xtra.co.nz'>
            <CgMail color='#fff' />
          </Link>
        </Stack>
      </Box>
      <Image src='/hero.jpg' width='500px' height='300px' objectFit='cover' />
    </Flex>
  </Box>
)
