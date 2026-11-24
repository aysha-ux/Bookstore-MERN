import React from 'react'

function PurchaseHistory() {
  return (
  <>

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
                    <img width={'120px'} height={'120px'} src="https://img.freepik.com/premium-vector/purchase-grunge-rubber-stamp-vector-illustration_545399-3421.jpg" alt="Purchased" />
                  </div>
                </div>
              </div>
    
              {/* 2nd section */}
              <div className='px-10 mt-5 md:mt-0'>
                <img className='w-full' src="https://m.media-amazon.com/images/I/81q77Q39nEL._SL1500_.jpg" alt="no image" />
                
              </div>
            </div>
          </div>
        </div>

  </>
  )
}

export default PurchaseHistory
