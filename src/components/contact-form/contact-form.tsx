import { FormControl, FormLabel, Input, FormErrorMessage, HStack, Textarea, Button, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { encode } from '../../business/functions/encode'

type FormValues = {
  firstName: string
  lastName: string
  email: string
  message: string
}

export const ContactForm = () => {
  const [isLoading, setLoading] = useState<boolean>(false)
  const [submitMessage, setSubmitMessage] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>()

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
      .then((response) => {
        reset()
        setLoading(false)
        setSubmitMessage('Thank you, we will be in touch')
        console.log(response)
      })
      .catch((error) => {
        reset()
        setLoading(false)
        setSubmitMessage('Opps something went wrong')
        console.log(error)
      })
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} name='contact' method='POST' data-netlify='true' data-netlify-honeypot='bot-field' action='/'>
        {submitMessage && <Text color='web.primary'>{submitMessage}</Text>}
        <HStack>
          <FormControl isInvalid={!!errors.firstName} isRequired paddingBottom='10px'>
            <FormLabel>First Name</FormLabel>
            <Input
              type='text'
              {...register('firstName', {
                required: {
                  value: true,
                  message: 'Please enter your first name'
                }
              })}
              color='white'
            />
            {errors.firstName && <FormErrorMessage>{errors.firstName.message}</FormErrorMessage>}
          </FormControl>
          <FormControl isInvalid={!!errors.lastName} isRequired paddingBottom='10px'>
            <FormLabel>Last Name</FormLabel>
            <Input
              type='text'
              {...register('lastName', {
                required: {
                  value: true,
                  message: 'Please enter your last name'
                }
              })}
              color='white'
            />
            {errors.lastName && <FormErrorMessage>{errors.lastName.message}</FormErrorMessage>}
          </FormControl>
        </HStack>
        <FormControl isInvalid={!!errors.email} isRequired paddingBottom='10px'>
          <FormLabel>Email Address</FormLabel>
          <Input
            type='email'
            {...register('email', {
              required: {
                value: true,
                message: 'Please enter your email address'
              }
            })}
            color='white'
          />
          {errors.email && <FormErrorMessage>{errors.email.message}</FormErrorMessage>}
        </FormControl>
        <FormControl isInvalid={!!errors.message} isRequired paddingBottom='10px'>
          <FormLabel>Message</FormLabel>
          <Textarea type='text' {...register('message')} color='white' />
          {errors.message && <FormErrorMessage>{errors.message.message}</FormErrorMessage>}
        </FormControl>
        <Button type='submit' isLoading={isLoading} loadingText='Submitting' color='white'>
          Submit
        </Button>
      </form>
    </>
  )
}
