import { Box, Stack, Heading, Text, Link } from '@chakra-ui/react'
import React from 'react'

import { ContactForm } from '..'
import { GAevent } from '../../common'

export const Contact = () => {
  const clickHandler = (action: string, iconName: string) => {
    GAevent('Contact', `${action} ${iconName} Link`)
  }
  return (
    <Stack align='center' justifyContent='space-evenly' direction={['column', 'column', 'column', 'column', 'row']}>
      <ContactForm />
      <Box height={{ base: '40px', sm: '40px', lg: '0' }} width='100px' />
      <Box width={{ base: '90%', sm: '90%', lg: '500px' }}>
        <Heading>Contact Us.</Heading>
        <Link href='mailto:scallyelectrical@xtra.co.nz' onClick={() => clickHandler('Click', 'Email')} variant='textLink'>
          <Text>scallyelectrical@xtra.co.nz</Text>
        </Link>
        <Link href='tel:0274324978' onClick={() => clickHandler('Click', 'Telephone')} variant='textLink'>
          <Text>027 432 4978</Text>
        </Link>
        <Box height='15px' />
        <Text>PO Box 32105</Text>
        <Text>Canterbury 8147</Text>
      </Box>
    </Stack>
  )
}
