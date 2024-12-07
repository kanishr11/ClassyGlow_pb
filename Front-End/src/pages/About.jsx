import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
    <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'}/>
    </div>
    <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="about_image" />
      <div className='flex flex-col justify-center gap-6 md:2/4 text-gray-600'>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae repellat delectus voluptatem cum nam excepturi fugiat a quas porro debitis iure eius, ex eligendi harum ipsa alias corporis labore dignissimos?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat esse officia est? Doloribus veritatis facilis deleniti earum autem incidunt quam dignissimos magni soluta aut. Dolorem optio delectus ipsum corrupti at.</p>
      <b className='text-gray-800'>Our Mission</b>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam necessitatibus hic velit suscipit! Saepe, rem deserunt doloribus facere aperiam dignissimos porro iusto modi inventore recusandae, nobis quod? Non, distinctio dolorem?</p>
      </div>
    </div>
    <div className='text-2xl py-4'>
      <Title text1={'WHY'} text2={'CHOOSE US'}/>
    </div>
    <div className='flex flex-col md:flex-row text-sm mb-20'>
      <div className='flex flex-col gap-5 border px-10 md:px-16 py-8 sm:py-20'>
        <b>Quality Assurance :</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet qui maiores ex ipsam aliquid eveniet facere, incidunt quibusdam, eligendi minima voluptatibus recusandae cupiditate tenetur blanditiis. Reprehenderit accusantium accusamus ipsam natus!</p>
      </div>
      <div className='flex flex-col gap-5 border px-10 md:px-16 py-8 sm:py-20'>
        <b>Convenience :</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet qui maiores ex ipsam aliquid eveniet facere, incidunt quibusdam, eligendi minima voluptatibus recusandae cupiditate tenetur blanditiis. Reprehenderit accusantium accusamus ipsam natus!</p>
      </div>
      <div className='flex flex-col gap-5 border px-10 md:px-16 py-8 sm:py-20'>
        <b>Exceptional Customer Service :</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet qui maiores ex ipsam aliquid eveniet facere, incidunt quibusdam, eligendi minima voluptatibus recusandae cupiditate tenetur blanditiis. Reprehenderit accusantium accusamus ipsam natus!</p>
      </div>
    </div>
    <NewsLetterBox/>
    </div>
  )
}

export default About