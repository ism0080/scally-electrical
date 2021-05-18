import { Box, Flex, Heading, Text, Link } from '@chakra-ui/react'
import React from 'react'
import { ContactForm } from '..'

export const Contact = () => {
  return (
    <Box>
      <Flex align='center' justifyContent='space-evenly' direction={['column', 'row', 'row', 'row']}>
        <ContactForm />
        <Box width='500px'>
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
    </Box>
  )
}
