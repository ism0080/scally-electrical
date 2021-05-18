import Head from 'next/head'
import { Contact, Jumbotron, NavBar } from '../src/components'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Scally Electrical, Canterbury NZ</title>
        <meta
          name='description'
          content='At Scally Electrical, we proudly serve the Canterbury region for all your electrical service needs'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBar />
      <Jumbotron />
      <Contact />
    </div>
  )
}
