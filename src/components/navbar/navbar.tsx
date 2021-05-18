import { Box } from '@chakra-ui/react'
import Image from 'next/image'

export const NavBar = () => (
  <Box paddingLeft='40px'>
    <Image src='/logo.svg' width='200px' height='200px' />
  </Box>
)
