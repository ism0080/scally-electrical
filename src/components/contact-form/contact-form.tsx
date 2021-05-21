import { Box, Button, Popover, PopoverArrow, PopoverContent, PopoverHeader, PopoverTrigger, Center } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { encode } from '../../business/functions/encode'

type FormValues = {
  name: string
  phone: string
  email: string
  message: string
}

export const ContactForm = () => {
  const [isLoading, setLoading] = useState<boolean>(false)
  const [submitMessage, setSubmitMessage] = useState<string | null>(null)

  const { register, handleSubmit, reset } = useForm<FormValues>()

  const onSubmit = (data: FormValues, e: any) => {
    setLoading(true)
    e.preventDefault()
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        ...data
      })
    })
      .then(() => {
        reset()
        setLoading(false)
        setSubmitMessage('Thank you, we will be in touch')
        setTimeout(() => setSubmitMessage(null), 3000)
      })
      .catch((error) => {
        reset()
        setLoading(false)
        setSubmitMessage('Opps something went wrong')
      })
  }

  return (
    <Box width={{ sm: '90%', lg: '400px' }}>
      <form onSubmit={handleSubmit(onSubmit)} name='contact' action='/' method='POST' data-netlify='true'>
        <input type='hidden' name='form-name' value='contact' />
        <p>
          <label htmlFor='name'>Name:</label>
          <input type='text' {...register('name')} id='name' required />
        </p>
        <p>
          <label htmlFor='email'>Email: </label> <input type='email' {...register('email')} id='email' required />
        </p>
        <p>
          <label htmlFor='phone'>Phone: </label> <input type='text' {...register('phone')} id='phone' required />
        </p>
        <p>
          <label htmlFor='message'>Message: </label>
          <textarea {...register('message')} id='message' required></textarea>
        </p>
        <Popover isOpen={!!submitMessage} placement='bottom' autoFocus={false}>
          <PopoverContent bg='web.primary' color='white' border='none'>
            <PopoverArrow bg='web.primary' />
            <Center>
              <PopoverHeader borderBottomWidth='0px'>{submitMessage}</PopoverHeader>
            </Center>
          </PopoverContent>
          <PopoverTrigger>
            <Button type='submit' isLoading={isLoading} loadingText='Submitting' color='white'>
              Submit
            </Button>
          </PopoverTrigger>
        </Popover>
      </form>
    </Box>
  )
}
