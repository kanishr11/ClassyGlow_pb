import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItems from './ProductItems';

const LatestCollection = () => {
    const {products} = useContext(ShopContext);
    const [latestProducts,setLatestProducts] = useState([]);

    useEffect(()=>{
      // console.log(products)
      setLatestProducts(products.slice(0,10));
    },[products])
  return (
    <div className='my-10'>
        {/* {products.map((products,index)=>(
            <div className='flex text-center w-2/3'>
              <h1 key={index} className='flex text-center'>{products.name}</h1>
              <img src={products.image} alt="" />
            </div>
        ))} */}
      <div className='text-center text-3xl py-8'>
          <Title text1={'LATEST'} text2={'COLLECTION'}/>
          <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Welcome to our newest arrivals! Discover the latest trends and fresh styles right here.
<br />
Launch Countdown Excitement builds up for new arrivals! Stay tuned for the latest drops with our countdown timer.
<br />
Curated Categories Discover our themed collections! Explore categories like "Spring Collection" and "Trending Now."          </p>
      </div>

      {/* Rendering products */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 '>
          {
            latestProducts.map((item,index)=>(
              <ProductItems 
                        key={index} 
                        id={item._id} 
                        image={item.image} 
                        name={item.name} 
                        price={item.price} 
                    />
            ))
          }
      </div>
    </div>
  )
}

export default LatestCollection