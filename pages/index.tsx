import Head from 'next/head'
import React, { useEffect } from 'react'

import { Contact, Jumbotron, NavBar } from '@/components'

function Home() {
  return (
    <div>
      <Head>
        <title>Home | Scally Electrical | Canterbury New Zealand</title>
        <meta
          name='description'
          content='At Scally Electrical, we proudly serve the Canterbury region for all your electrical service needs'
        />
      </Head>
      <div className='container mx-auto'>
        <NavBar />
        <div>
          <Jumbotron />
          <div className='mt-12'>
            <Contact />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
