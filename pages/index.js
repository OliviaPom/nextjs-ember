import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/navbar'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ember Invoicing</title>
        <link rel="icon" href="/ember-favicon.ico" />
      </Head>

      <main>
        <div className="container">
          <Navbar />
          <div className="invoicing-container">  
            <div className="invoicing-content">
              <h1>Invoices that get you paid on time.</h1>
              <a href="https://www.ember.co/" target="_blank">Send better invoices now &#8594;</a>
            </div>
            <img src="/images/invoicing.png" className="invoice-image"></img>
          </div>
        </div>
      </main>

      {/* /CSS */}
      <style jsx>{`
        .container {
          height: 100vh;
          background-color: #7D539D;
        }
        .invoicing-content {
          margin-top: 10vh;
          text-align: center;
        }
        .invoice-image {
          height: 50vh;
          width: 90vw;
          margin-top: 10vh;
          margin-bottom: 0px;
          margin-left: 5vw;
        }
        .invoicing-content > h1 {
          color: white;
          font-size: 30px;
        }
        .invoicing-content > a {
          font-family: 'Nanum Gothic', sans-serif;
          font-weight: bolder;
          color: #7D539D;
          padding: 12px;
          background-color: white;
        }

        @media only screen and (min-width: 1100px){
          .invoicing-container {
            display:flex;
            height: 92vh;
          }

          .invoice-image {
            height: 82vh;
            width: 52vw;
            margin-top: 80px;
            margin-right:10px;
            margin-bottom: 0px;
          }
          
          .invoicing-content {
            text-align: left;
            margin-top: 15vh;
            margin-left: 5%;
            width: 40%;
          }
          .invoicing-content > h1 {
            color: white;
            font-size: 56px;
          }
        }
      `}</style>
    </div>
  )
}