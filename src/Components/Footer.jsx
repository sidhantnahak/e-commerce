import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='border-[1px] bg-[black] px-3 text-white border-black mt-[100px]'>
            <div className='max-w-[1320px] mx-auto py-3 sm:flex-row flex-col text-center gap-5 flex justify-between items-center '>

                <div>
                    <p className='text-sm pb-1 text-[whitesmoke]'>  &#169; 2023 MADHATTER TECHNOLOGY PRIVATE LIMITED OF INDIA</p>
                    <h1 className='text-bold text-sm sm:text-md '> TERMS AND CONDITIONS PRIVACY POLICY/ALL RIGHTS RESERVED  </h1>
                </div>

                <div className=' flex text-xl gap-3'>
                    <Link className='fa-brands fa-facebook hover:text-red-600 duration-200'> </Link>
                    <Link className='fa-brands fa-twitter hover:text-red-600 duration-200'> </Link>
                    <Link className='fa-brands fa-instagram hover:text-red-600 duration-200'> </Link>
                    <Link className='fa-brands fa-linkedin hover:text-red-600 duration-200'> </Link>
                    <Link className='fa-brands fa-github hover:text-red-600 duration-200'> </Link>

                </div>
            </div>
        </div>
        
    )
}

export default Footer