import React, { useEffect } from 'react'
import { useAlert } from 'react-alert';
import { Link, useNavigate } from 'react-router-dom'

const ProductItem = ({ product }) => {
  const navigate = useNavigate();
  const alert=useAlert();


  useEffect(() => {

  }, [navigate,alert])

  return (
    <div className='py-4 px-2 shadow-2xl text-center'  >

      <div className='overflow-hidden' >
  
        <img className='hover:scale-125 duration-1000 h-[200px] w-[100%] ' src={product.image_address} alt="Image Not Found" />
      </div>
      <p style={{ whiteSpace: "pre-wrap" }} className='pt-5 text-justify font-semibold'>{product.name.length > 62 ? product.name.substr(0, 62) + ' . . . ' : product.name.length < 40 ? product.name + " spinner " : product.name}  </p>
      <h1 className='text-xl font-bold text-start  pb-2'>{product.price}</h1>

      <div className=' flex justify-between'>
        <Link to={`/product/${product._id.$oid}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" >View Details</Link>
        <Link onClick={()=>alert.success("Item Added In Cart Successfully!")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Add To Cart</Link>
      </div>

    </div>
  )
}

export default ProductItem