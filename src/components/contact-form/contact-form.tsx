/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import { encode } from '@/utils/encode'

import { Spinner } from '../loader/spinner'

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
    <div>
      <form onSubmit={handleSubmit(onSubmit)} data-netlify-recaptcha='true' name='contact' action='/' method='POST' data-netlify='true'>
        <input type='hidden' name='form-name' value='contact' />
        <label htmlFor='name' className='sr-only'>
          Name:
        </label>
        <input className='mb-4 py-4 px-3 leading-tight' type='text' placeholder='Name*' {...register('name')} id='name' required />
        <label htmlFor='email' className='sr-only'>
          Email:
        </label>
        <input className='mb-4 py-4 px-3 leading-tight' placeholder='Email*' type='email' {...register('email')} id='email' required />
        <label htmlFor='phone' className='sr-only'>
          Phone:
        </label>
        <input className='mb-4 py-4 px-3 leading-tight' placeholder='Phone*' type='text' {...register('phone')} id='phone' required />
        <label htmlFor='message' className='sr-only'>
          Message:
        </label>
        <textarea placeholder='Message*' className='py-4 px-3 leading-tight' {...register('message')} id='message' required />
        <div data-netlify-recaptcha='true' />
        <button className='m-4 ml-0 rounded-md bg-brand px-4 py-2' type='submit' style={{ transition: 'all .5s ease-in-out' }}>
          {isLoading ? <Spinner /> : 'Submit'}
        </button>
        <p className='text-brand'>{submitMessage}</p>
      </form>
    </div>
  )
}
