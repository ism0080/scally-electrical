import { Box, FormControl, FormLabel, Input, FormErrorMessage, HStack, Textarea, Button, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { encode } from '../../business/functions/encode'

type FormValues = {
  firstName: string
  lastName: string
  email: string
  message: string
}

type FormSubmitData = {
  name: string
  email: string
  message: string
}

const createFormData = (data: FormValues): FormSubmitData => {
  return {
    name: `${data.firstName} ${data.lastName}`,
    email: data.email,
    message: data.message
  }
}

export const ContactForm = () => {
  const [isLoading, setLoading] = useState<boolean>(false)
  const [submitMessage, setSubmitMessage] = useState<string | null>(null)

  useEffect(() => {
    const { searchParams } = new URL(window.location.toString())
    const success = searchParams.get('success') || ''
    console.log(success)
    searchParams.delete('success')
  }, [])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>()

  const onSubmit = (data: FormValues, e: any) => {
    setLoading(true)
    const values = createFormData(data)
    e.preventDefault()
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        ...values
      })
    })
      .then((response) => {
        reset()
        setLoading(false)
        setSubmitMessage('Thank you, we will be in touch')
      })
      .catch((error) => {
        reset()
        setLoading(false)
        setSubmitMessage('Opps something went wrong')
        console.log(error)
      })
  }

  return (
    <Box>
      <form name='contact' action='/' method='POST' data-netlify='true'>
        <input type='hidden' name='form-name' value='contact' />
        <p>
          <label htmlFor='name'>Name:</label>
          <input type='text' name='name' id='name' required />
        </p>
        <p>
          <label htmlFor='email'>Email: </label> <input type='email' name='email' id='email' required />
        </p>
        <p>
          <label htmlFor='message'>Message: </label>
          <textarea name='message' id='message' required></textarea>
        </p>
        <Button type='submit' isLoading={isLoading} loadingText='Submitting' color='white'>
          Submit
        </Button>
        <style jsx>{`
          label {
            font-size: 1rem;
            color: #fff;
          }
          input,
          textarea {
            width: 100%;
            height: 40px;
            border: none;
            font-size: 1rem;
            border-radius: 5px;
            padding-left: 5px;
          }
          textarea {
            height: 80px;
          }
          input:focus,
          textarea:focus {
            outline: none;
          }
          p {
            padding-bottom: 10px;
          }
        `}</style>
      </form>
    </Box>
  )
}
