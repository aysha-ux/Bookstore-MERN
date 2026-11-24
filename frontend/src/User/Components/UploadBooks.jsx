import React from 'react'
import { FaPlus } from 'react-icons/fa'
import Header from './Header'
import Footer from '../../Components/Footer'

function UploadBooks() {
    return (
        <>
                 <Header/>

            <div className='bg-gray-200 p-10 my-10 mx-10'>
                <h1 className='text-center text-3xl font-medium'>Upload Book Details</h1>
                {/* Grid */}
                <div className='md:grid grid-cols-2 mt-10 w-full'>
                    {/* 1st section */}
                    <div className='px-5'>
                        <div className='mb-3'>
                            <input type="text" placeholder='Book Title' className='w-full p-2 bg-white rounded' />
                        </div>
                        <div className='mb-3'>
                            <input type="text" placeholder='Author' className='w-full p-2 bg-white rounded' />
                        </div>
                        <div className='mb-3'>
                            <input type="text" placeholder='Book cover Image URL' className='w-full p-2 bg-white rounded' />
                        </div>
                        <div className='mb-3'>
                            <input type="text" placeholder='Total pages' className='w-full p-2 bg-white rounded' />
                        </div>
                        <div className='mb-3'>
                            <input type="text" placeholder='Original price' className='w-full p-2 bg-white rounded' />
                        </div>
                        <div className='mb-3'>
                            <input type="text" placeholder='Discount Price' className='w-full p-2 bg-white rounded' />
                        </div>
                        <div className='mb-3'>
                            <textarea type="text" rows={'5'} placeholder='Abstract' className='w-full p-2 bg-white rounded' />
                        </div>
                    </div>
    
                    {/* 2nd section */}
                    <div>
                        <div className='mb-3'>
                            <input type="text" placeholder='Publisher' className='w-full p-2 bg-white rounded' />
                        </div>
                        <div className='mb-3'>
                            <input type="text" placeholder='ISBN' className='w-full p-2 bg-white rounded' />
                        </div>
                        <div className='mb-3'>
                            <input type="text" placeholder='Language' className='w-full p-2 bg-white rounded' />
                        </div>
                        <div className='mb-3'>
                            <input type="text" placeholder='Category' className='w-full p-2 bg-white rounded' />
                        </div>
                        {/* upload book images */}
                        <div className='my-10 flex justify-center items-center'>
                            <label htmlFor="bookImages">
                                <input type="file" id='bookImages' hidden />
                                <img width={'80px'} height={'50px'} style={{ borderRadius: '50%' }} src="https://png.pngtree.com/png-vector/20220624/ourmid/pngtree-upload-book-online-save-arrow-png-image_5327333.png" alt="uploadbook" />
                            </label>
                        </div>
                        {/*  */}
                        <div className='flex justify-center items-center mb-3'>
                            <img width={'70px'} height={'70px'} src="https://m.media-amazon.com/images/I/81q77Q39nEL._SL1500_.jpg" alt="bookcard" />
                            <label htmlFor="bookUpload">
                                <input type="file" id='bookUpload' hidden />
                                <FaPlus className='text-2xl ms-3' />
                            </label>
                        </div>
    
                    </div>
                </div>
    
    
                {/* reset and add books */}
                <div className='flex md:justify-end mt-10 px-5 justify-center'>
                    <button className='bg-gray-600 text-white px-3 py-2 rounded hover:bg-white hover:text-gray-600'>RESET</button>
                    <button className='bg-blue-600 text-white px-3 py-2 rounded hover:bg-white hover:text-blue-600 ms-5'>ADD BOOK DETAILS</button>
                </div>
            </div>
                     <Footer/>

        </>
    )
}

export default UploadBooks
