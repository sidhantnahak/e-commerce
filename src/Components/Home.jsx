import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Home = () => {
    const location = useLocation();
    const navigate=useNavigate();

    return (
        <>
            <div>
                <header>
                    <nav className='h-[70px] py-2 sm:px-8 px-2 sm:text-2xl text-lg font-medium flex justify-between items-end  shadow-md'>
                        <Link className='hover:text-red-800' to="/">MADHATTER SHOP</Link>
                        <div className='flex items-center gap-5'>
                            {/* <Link className='sm:hidden block rounded  sm:text-xl text-sm ' to="/">Categories <i class="fa-solid fa-caret-down"></i> */}
                            <select onChange={(e)=>navigate(e.target.value)}  className='sm:w-[130px] w-[90px] md:hidden block rounded  sm:text-xl text-sm' name="" id="">

                                <option className='pl-2' value="/"> Categories</option>
                                <option className='pl-2' value="/all-products"> All Products</option>
                                <option className='pl-2' value="/gifts"> Gifts</option>
                                <option className='pl-2' value="/home-decor">Home Decor</option>
                                <option className='pl-2' value="/kitchen-dinning"> Kitchen and Dinning</option>
                                <option className='pl-2' value="/jewellery">Jewellery</option>
                                <option className='pl-2' value="/toys-entertainment"> Toys and Entertainment</option>
                            </select>
                            {/* // </Link> */}

                            <Link className='rounded-full border-2 border-[black]' to="/"><i class="fa-solid fa-user px-2 "></i></Link>

                        </div>

                    </nav>

                    <div className='m-w-[100%]  sm:max-w-[750px] text-xs font-bold my-10 px-3 mx-auto  hidden md:flex justify-between'>
                        <Link to="/all-products" className={` border-2 py-3 px-4 rounded-lg text-center hover:bg-red-400 hover:text-white ${location.pathname.includes('all-products') && "bg-red-400 text-white"}`}>All Products</Link>
                        <Link to="/gifts" className={`border-2 py-3 px-4 rounded-lg text-center hover:bg-red-400 hover:text-white ${location.pathname === '/gifts' && "bg-red-400 text-white"}`}>Gifts</Link>
                        <Link to="/home-decor" className={`border-2 py-3 px-4 rounded-lg text-center hover:bg-red-400 hover:text-white ${location.pathname === '/home-decor' && "bg-red-400 text-white"}`}>Home Decor</Link>
                        <Link to="/kitchen-dinning" className={`border-2 py-3 px-4 rounded-lg text-center hover:bg-red-400 hover:text-white ${location.pathname === '/kitchen-dinning' && "bg-red-400 text-white"}`}> Kitchen and Dinning</Link>
                        <Link to="/jewellery" className={`border-2 py-3 px-4 rounded-lg text-center hover:bg-red-400 hover:text-white ${location.pathname === '/jewellery' && "bg-red-400 text-white"}`}> Jewellery</Link>
                        <Link to="/toys-entertainment" className={`border-2 py-3 px-4 rounded-lg text-center hover:bg-red-400 hover:text-white ${location.pathname === '/toys-entertainment' && "bg-red-400 text-white"}`}>Toys and Entertainment</Link>
                    </div>
                </header>
            </div>
        </>
    )
}

export default Home