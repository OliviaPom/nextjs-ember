import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import SavingsForm from '../components/savings-form'
import Navbar from '../components/navbar'


const SavingsCalculator = () => {
  return (
    <div className="container">
      <Head>
        <title>Ember Invoicing</title>
        <link rel="icon" href="/ember-favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <SavingsForm />
      </main>
    </div>
  )
}

export default SavingsCalculator;