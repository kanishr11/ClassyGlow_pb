import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItems from './ProductItems';

const BestSeller = () => {
    const {products} = useContext(ShopContext);
    const [bestSeller,setBestSeller] = useState([]);
    // console.log(`products page data ${products}`)

    useEffect(()=>{
        const bestProduct = products.filter((item) => (item.bestseller));
        setBestSeller(bestProduct.slice(0,5))
        // console.log(bestSeller)        
    },[products])
  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLERS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Discover our most popular products, adored by customers like you! Shop our best sellers and find your new favorites today.
<br />
Customer Reviews and Ratings Hear from our happy customers! Our best sellers have top ratings and rave reviews.
          </p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-4  gap-4 gap-y-6 '>
        {bestSeller.map((item, index) => (
                    <ProductItems 
                        key={index} 
                        id={item._id} 
                        image={item.image} 
                        name={item.name} 
                        price={item.price} 
                    />
                ))}
      </div>
    </div>
  )
}

export default BestSeller