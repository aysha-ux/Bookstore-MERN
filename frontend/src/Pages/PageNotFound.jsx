import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../User/Components/Header'
import Footer from '../Components/Footer'

function PageNotFound() {

  return (
   <>
            <Header/>

      <div className='min-h-screen flex justify-center items-center flex-col'>
        <img className='w-100' src="https://webytag.com/wp-content/uploads/2024/07/c19fc414b5c17a9e286bd53c5ab19e7c.gif" alt="Pagenotfound" />
        <p>Oh No!</p>
        <h1 className='text-2xl font-medium'>Look Like You're Lost</h1>
        <p>The page you are looking for is not available</p>
        <Link to={'/'} className='bg-black text-white mt-3 px-5 py-2 rounded'>Home</Link>
      </div>
               <Footer/>

   </>
  )
}

export default PageNotFound