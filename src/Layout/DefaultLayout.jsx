import React from 'react'
import Header from '../components/Shared/Header'
import Footer from '../components/Shared/Footer'

const DefaultLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
      
    </React.Fragment>
  )
}

export default DefaultLayout