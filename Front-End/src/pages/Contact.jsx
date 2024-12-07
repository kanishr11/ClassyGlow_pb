import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row justify-center gap-10 mb-20'>
          <img src={assets.contact_img} className='w-full max-w-[480px]' alt="" />
          <div className='flex flex-col justify-center items-start gap-6'>
            <p className='font-semibold text-xl text-gray-600'>Our Store</p>
            <p className='text-gray-500'>54709 Willms station <br />Suite 350, Washington, India</p>
            <p className='text-gray-500'>Tel : 645-564 <br />Email :wjeyfwhu@gmail.com</p>
            <p className='font-semibold text-gray-500'>Careers at Forever</p>
            <p className='text-gray-500'>Learn more about our teams and jobs openings..</p>
            <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-700'>Explore Jobs</button>
          </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default Contact