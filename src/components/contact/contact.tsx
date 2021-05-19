import { Box, Flex, Heading, Text, Link, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { ContactForm } from '..'

export const Contact = () => {
  const [isMobile] = useMediaQuery('(min-width: 768px)')

  return (
    <Flex align='center' justifyContent='space-evenly' direction={isMobile ? 'row' : 'column'}>
      <ContactForm />
      <Box height={{ base: '40px', sm: '40px', lg: '0' }} />
      <Box width={{ base: '90%', sm: '90%', lg: '500px' }}>
        <Heading>Contact Us.</Heading>
        <Link href='mailto:scallyelectrical@xtra.co.nz'>
          <Text>scallyelectrical@xtra.co.nz</Text>
        </Link>
        <Link href='tel:0274324978'>
          <Text>027 432 4978</Text>
        </Link>
        <Box height='15px' />
        <Text>PO Box 32105</Text>
        <Text>Canterbury 8147</Text>
      </Box>
    </Flex>
  )
}
