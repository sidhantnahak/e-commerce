import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { products } from '../json_data/artisanal_products/test';
import { useAlert } from 'react-alert';

const ProductDetail = () => {
    const [product, setProduct] = useState(null)
    const params = useParams();
    const alert=useAlert();
    useEffect(() => {
        const myfunc = async () => {
            var p = products.find((e) => e._id.$oid === params.id);
            setProduct(p);
        }
        myfunc();

    }, [params,alert])

    return (
        <>
            {product &&
                <>
                    <div className='max-w-[1380px] mx-auto my-8  md:grid-cols-3  md:grid gap-10  px-4 max-w-[100%]' >
                        <div className=' md:col-span-2 md:max-w-[100%]'>
                            <img className='  md:max-h-[500px] w-[100%] rounded ' src={product.image_address} alt="Not Found" />

                            <div className=' hidden md:grid mt-10 p-4 max-w-[90%]'>
                                <h1 className='text-2xl'><b>{product.reviews.length}</b>  Produce Review</h1>
                                {product.reviews.map((e) => {
                                    return <div className='my-2'>
                                        <p className='text-sm underline cursor-pointer'>{e.name}</p>
                                        <h1 className='text-semibold text-xl py-1'>{e.message}</h1>
                                        <h1 className='text-semibold text-xl py-1'>
                                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i>
                                        </h1>
                                    </div>
                                })}
                            </div>

                        </div>
                        <div className='my-5 md:my-0 pb-3'>
                            <h1 className='text-xl font-bold text-start text-[green]'>{product.price}</h1>
                            <h1 className='font-semibold  text-[green]'>35% off sale for the next 6 hours</h1>
                            <p className='text-[grey] text-sm my-2'>Local taxes included (where applicable)</p>
                            <h1 className='text-xl'>{product.name}</h1>
                            <p className='text-black-100 text-sm my-4'>India IN<i class="fa-solid fa-location-dot px-2"> </i> Local seller</p>
                            <Link onClick={()=>alert.success("Item Added In Cart Successfully!")} className=' hover:scale-[1.05] hover:opacity-[0.8] duration-300 w-[90%] py-3 px-4 text-center mx-auto bg-[black] text-white font-bold inline-block rounded-full my-2' >Add To Cart</Link>
                            <Link className='hover:scale-[1.05] hover:opacity-[0.8] all  duration-300  w-[90%] py-3 px-4 text-center mx-auto bg-[black] text-white font-bold inline-block rounded-full my-2'>Buy Now</Link>
                            <div className=' grid grid-cols-3 w-[90%] my-7 gap-4 font-semibold '>
                                <div className='text-center'>
                                    <i class="fa-solid fa-handshake text-2xl"></i>
                                    <p className='text-xs'>Etsy Purchase Protection</p>
                                </div>
                                <div className='text-center'>
                                    <i class="fa-solid fa-hand-point-up text-2xl"></i>
                                    <p className='text-xs'>Handmade item from a small business in Jaipur, Rajasthan</p>
                                </div>
                                <div className='text-center'>
                                    <i class="fa-solid fa-hands-holding-circle text-2xl"></i>
                                    <p className='text-xs'>carbon offset <br /> delivery</p>
                                </div>
                            </div>
                            <div className='mt-10'>
                                <div className='flex pr-5 justify-between items-center mb-2'>
                                    <h1 className='text-xl font-semibold '>Highlights</h1>
                                    <span><i class="fa-solid fa-angle-up"></i></span>

                                </div>

                                <p className='py-[2px] px-1 flex items-center gap-3 text-xl'>{product.highlights.handmade &&
                                    <>
                                        <svg className='h-[30px] w-[30px] pt-[5px]'>
                                            <path d="M10.313 10.252l1.86-3.45-1.328-1.32-3.307-3.307a.57.57 0 00-.788 0 .57.57 0 000 .75l3.098 3.57-.533.532-4.425-4.32a.577.577 0 00-.817 0 .577.577 0 000 .795l4.14 4.628-.525.532L3.825 4.83a.555.555 0 00-.825 0 .57.57 0 000 .75l3.6 4.17-.525.532L3 7.68a.578.578 0 00-.75 0 .578.578 0 000 .817l2.775 2.768L9.27 15.51a1.498 1.498 0 002.123 0l3.75-3.713.405-.405a1.5 1.5 0 00.36-1.537L13.5 3.885l-.45.15a.578.578 0 00-.382.487l.3 3.075-2.123 3.188-.532-.533z" fill="#222"></path>
                                        </svg>
                                        <span className='pl-1'> Handmade</span>
                                    </>
                                }
                                </p>
                                <p className='py-[2px] px-1 flex items-center gap-3 text-xl'>{product.highlights.location &&
                                    <>
                                        <svg className='h-[30px] w-[30px] pt-[5px]'>
                                            <path d="M12,3A6.287,6.287,0,0,0,6,9c0,3.167,6,12,6,12s6-8.812,6-12A6.287,6.287,0,0,0,12,3Zm0,7.875a2.25,2.25,0,1,1,2.25-2.25A2.25,2.25,0,0,1,12,10.875Z"></path>
                                        </svg>
                                        <span className='pl-1'> {product.highlights.location}</span>
                                    </>
                                }
                                </p>

                                <p className='py-[2px] px-1 flex items-center gap-3 text-xl'>{product.highlights.materials &&
                                    <>

                                        <svg className=' h-[30px] w-[30px] pt-[5px] pr-0'>
                                            <path d="M18.1 6c.7 1.7.9 3.6.4 5.6-.8 3.4-3.5 6.1-6.9 6.9-2 .5-3.9.2-5.6-.4v1.4L7.5 21h12l1.5-1.5v-12L19.5 6h-1.4z"></path><path d="M9.5 2C5.4 2 2 5.4 2 9.5S5.4 17 9.5 17 17 13.6 17 9.5 13.6 2 9.5 2zM7.8 15c-.6-.2-1.2-.5-1.7-.9l8-8c.4.5.7 1.1.9 1.7L7.8 15zm3.4-11c.6.2 1.2.5 1.7.9l-8 8c-.4-.5-.7-1.1-.9-1.7L11.2 4zM9 3.8L3.8 9C4 6.2 6.2 4 9 3.8zm1 11.4l5.2-5.2c-.2 2.8-2.4 5-5.2 5.2z"></path>
                                        </svg>
                                        <span className='pl-1'> {product.highlights.materials} </span>
                                    </>
                                }
                                </p>
                                {product.highlights.width &&
                                <p className='py-[2px] px-1 flex items-center gap-3 text-xl'>Width : 
                                    <>
                                        <span className='pl-1'> {product.highlights.width} </span>
                                    </>
                                </p>

                                }
                                {product.highlights.height &&
                                <p className='py-[2px] px-1 flex items-center gap-3 text-xl'>Height :

                                    
                                        <span className='pl-1'> {product.highlights.height} </span>
                                    
                                </p>

                                }
                                {product.highlights.depth &&
                                <p className='py-[2px] px-1 flex items-center gap-3 text-xl'>Depth :
                                    <>
                                        <span className='pl-1'> {product.highlights.depth} </span>
                                    </></p>
                                }
                                


                            </div>
                            <div className='mt-10'>
                                <div className='flex pr-5 justify-between items-center mb-5'>
                                    <h1 className='text-xl font-semibold '>Description</h1>
                                    <span><i class="fa-solid fa-angle-up"></i></span>

                                </div>
                                <p style={{whiteSpace:"pre-wrap"}}>{product.description}</p>

                            </div>

                        </div>
                        <div className='grid md:hidden mt-10 p-4 max-w-[90%]'>
                            <h1 className='text-2xl'><b>{product.reviews.length}</b>  Produce Review</h1>
                            {product.reviews.map((e) => {
                                return <div className='my-2'>
                                    <p className='text-sm underline cursor-pointer'>{e.name}</p>
                                    <h1 className='text-semibold text-xl py-1'>{e.message}</h1>
                                    <h1 className='text-semibold text-xl py-1'>
                                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i>
                                    </h1>
                                </div>
                            })}
                        </div>

                    </div></>}
        </>

    )
}

export default ProductDetail