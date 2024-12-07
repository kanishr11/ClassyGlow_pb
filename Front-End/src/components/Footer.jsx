import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div >
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div className=''>
                <img src={assets.logo} className='mb-5 w-32' alt="logo_image" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae enim accusamus possimus nisi, quaerat culpa maxime consectetur tenetur fugit sapiente doloribus provident atque quo incidunt officiis dolore illo ratione debitis.
                </p>
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