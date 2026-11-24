import React from 'react'
import Header from '../User/Components/Header'
import Footer from './Footer'

function Preloader() {
  return (

  <>
     <Header/>
        <div className='flex justify-center items-center w-full h-screen'>
          <img src="https://cdnl.iconscout.com/lottie/premium/thumb/books-4895016-4127728.gif" alt="books" />
        </div>
     <Footer/>
  </>
  )
}

export default Preloader
