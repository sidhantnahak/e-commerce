import React from 'react'
import { products } from '../json_data/artisanal_products/test'

import ProductItem from './ProductItem'

const JewelleryItems = () => {
  return (
    <div className='max-w-[1380px]   mx-auto  grid text-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                {products && products.filter((e)=>e.category==='jewellery').map((e)=>{
                    return <ProductItem product={e}/>
                })}
            </div>
  )
}

export default JewelleryItems