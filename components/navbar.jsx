import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='ember-navbar'>
      <Link href="/">
        <a>Invoicing</a>
      </Link>
      <Link href="/savings-calculator">
        <a>Savings Calculator</a>
      </Link>

      {/* CSS */}
      <style jsx>{`
          .ember-navbar {
            padding: 16px;
            background-color: white;
            border-bottom: 1px solid rgb(200,200,200);
            margin: auto;
          }
          .ember-navbar a {
            margin-left: 30px;
            font-family: 'Nanum Gothic', sans-serif;
            color: black;
            font-weight: 700;
            font-size: 12px;
          }

          .ember-navbar a:hover {
            color: rgb(100,100,100);
          }

        @media only screen and (min-width: 800px){          
          .ember-navbar a {
            margin-left: 120px;
            font-size: 16px;
          }
        }
      `}</style>
    </div>
    
  )
}

export default Navbar;