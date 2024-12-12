import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div >
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div className=''>
                <img src={assets.logo2} className='mb-5 w-32' alt="logo_image" />
                <p className='w-full md:w-2/3 text-gray-600'>
                Classy Glow is your go-to for the latest fashion trends and timeless pieces. Our curated collection ensures you always shine, no matter the occasion. Enjoy top-quality items, exclusive deals, and exceptional customer service. Subscribe now for a 20% discount on your first order and elevate your style.                </p>
            </div>
            <div className=''>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>DELIVERY</li>
                    <li>PRIVACY POLICY</li>
                </ul>
            </div>
            <div className=''>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91-8754-766-195</li>
                    <li>kanishr110@gmail.com</li>
                </ul>
            </div>
        </div>
        <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2024@ forever.com - All Right Reserved</p>
            </div>
    </div>
  )
}

export default Footer