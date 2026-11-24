import React from 'react'
import Header from './Header'
import Footer from '../../Components/Footer'

function UploadStatus() {
  return (
    <>
             <Header/>

      <div className='p-30 my-15 shadow rounded'>
        {/* Duplicate book status */}
        <div className='bg-gray-100 rounded p-5 mt-4'>
          <div className='md:grid grid-cols-[3fr_1fr]'>
            <div className='md:grid grid-cols-[3fr_1fr]'>
              {/* 1st section */}
              <div className='px-4'>
                <h1 className='text-2xl'>Title</h1>
                <h1 className='text-xl'>Author</h1>
                <h1 className='text-lg text-blue-600'>$ Price</h1>
                <p className='font-bold'>Abstract : </p>
                <div className='flex mt-5 justify-center items-center'>
                  <img width={'120px'} height={'120px'} src="https://pnggallery.com/wp-content/uploads/pending-stamp-04.png" alt="Pending" />
                  <img width={'120px'} height={'120px'} src="https://www.pngmart.com/files/7/Sold-PNG-Photo.png" alt="Sold" />
                  <img width={'120px'} height={'120px'} src="https://static.vecteezy.com/system/resources/previews/024/382/871/non_2x/approved-sign-symbol-icon-label-stamp-green-round-design-transparent-background-free-png.png" alt="Approved" />
                </div>
              </div>
            </div>
  
            {/* 2nd section */}
            <div className='px-10 mt-5 md:mt-0'>
              <img className='w-full' src="https://m.media-amazon.com/images/I/81q77Q39nEL._SL1500_.jpg" alt="no image" />
              <div className='flex justify-end'>
                <button className='text-white font-bold bg-red-600 px-3 py-2 rounded mt-5'>DELETE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
               <Footer/>

    </>
  )
}

export default UploadStatus
