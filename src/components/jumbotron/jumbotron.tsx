import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { CgFacebook, CgMail } from 'react-icons/cg'

import bannerImage from '@/assets/images/banner_image.png'

export const Jumbotron = () => (
  <div className='grid px-4 md:grid-cols-2 md:gap-20 md:px-0'>
    <div>
      <h1 className='mb-4 text-4xl font-semibold text-brand'>Serving the Canterbury region since 1987.</h1>
      <p className='mb-2'>Get in touch with us today about your Project, Renovation or Maintenance work</p>
      <div className='mb-4 flex'>
        <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href='https://www.facebook.com/scallyelectrical'>
          <CgFacebook size='23' color='#fff' className='mr-2' />
        </motion.a>
        <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href='mailto:scallyelectrical@xtra.co.nz'>
          <CgMail size='25' color='#fff' />
        </motion.a>
      </div>
    </div>
    <div>
      <Image src={bannerImage} className='rounded-3xl object-cover' alt='Scally Electrical' />
    </div>
  </div>
)
