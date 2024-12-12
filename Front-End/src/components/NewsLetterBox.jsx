import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler = (e) =>{
        e.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='mt-3 text-gray-800'>Don't miss out on this amazing offer! Sign up for our newsletter today and enjoy a <br />20% discount on your next purchase. Be the first to know about our latest collections, exclusive deals, and special promotions. <br /> Join our community and elevate your shopping experience!</p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input type="email" placeholder='Enter Your Email' className='w-full sm:flex-1 outline-none' required/>
            <button className='bg-black text-white text-xs px-10 py-4' type='submit'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox