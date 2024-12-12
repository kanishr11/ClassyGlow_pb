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
      <p>At Classy Glow, we believe that fashion is a powerful form of self-expression. Our mission is to empower you to shine with confidence through every outfit. Established in [year], Classy Glow has quickly become a trusted name in fashion, offering a curated selection of the latest trends and timeless classics.</p>
      <p>Our Vision We aim to create a world where everyone feels elegant and stylish, regardless of the occasion. Our vision is to be your go-to destination for all things fashion, providing a seamless and enjoyable shopping experience.</p>
      <b className='text-gray-800'>Our Mission</b>
      <p>Empowerment Through Fashion: Provide styles that inspire confidence and express individuality.</p>
      <p>High-Quality and Sustainable: Deliver high-quality, sustainable clothing that looks and feels great.</p>
      <p>Community Building: Create a community where everyone feels stylish, comfortable, and valued.</p>
      <p>Environmental Responsibility: Continuously seek ways to reduce our environmental impact.</p>
      </div>
    </div>
    <div className='text-2xl py-4'>
      <Title text1={'WHY'} text2={'CHOOSE US'}/>
    </div>
    <div className='flex flex-col md:flex-row text-sm mb-20'>
      <div className='flex flex-col gap-5 border px-10 md:px-16 py-8 sm:py-20'>
        <b>Quality Assurance :</b>
        <p className='text-gray-600'>At Classy Glow, quality is our top priority. We ensure that every piece in our collection meets the highest standards of craftsmanship and durability. Our dedicated team meticulously inspects each item to guarantee it is free from defects and made with premium materials.</p>
      </div>
      <div className='flex flex-col gap-5 border px-10 md:px-16 py-8 sm:py-20'>
        <b>Convenience :</b>
        <p className='text-gray-600'>We prioritize your convenience. Our user-friendly website ensures a seamless shopping experience, with easy navigation and secure checkout processes. Enjoy the flexibility of multiple payment options and fast shipping services that get your purchases to you in no time. </p>
      </div>
      <div className='flex flex-col gap-5 border px-10 md:px-16 py-8 sm:py-20'>
        <b>Exceptional Customer Service :</b>
        <p className='text-gray-600'>Our dedicated support team is available 24/7 to assist you with any inquiries or concerns you may have. From helping you find the perfect outfit to resolving order issues, we are here to ensure your shopping experience is nothing short of excellent. We value your feedback and continually strive to improve our services. </p>
      </div>
    </div>
    <NewsLetterBox/>
    </div>
  )
}

export default About