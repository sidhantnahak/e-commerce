import React from 'react'
import ProductItem from './ProductItem'
import { products } from '../json_data/artisanal_products/test'


const ToysAndEntmnt = () => {
  
  return (
    <div className='max-w-[1380px]   mx-auto  grid text-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                {products && products.filter((e)=>e.category==='toys').map((e)=>{
                    return <ProductItem product={e}/>
                })}
            </div>
  )
}

export default ToysAndEntmnt