import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='w-full md:py-5 max-md:py-4 max-md:px-4 absolute top-0 left-0 flex justify-between items-center cursor-default z-20'>
          <div className="logo md:w-[20%] h-full flex justify-center items-center">
            <svg className='max-md:h-[24px] max-md:w-[24px]' xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
              <path d="M30.375 10.125H5.625C5.00368 10.125 4.5 10.6287 4.5 11.25V28.125C4.5 28.7463 5.00368 29.25 5.625 29.25H30.375C30.9963 29.25 31.5 28.7463 31.5 28.125V11.25C31.5 10.6287 30.9963 10.125 30.375 10.125Z" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M11.25 3.375L18 10.125L24.75 3.375" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M26.4375 18C27.3695 18 28.125 17.2445 28.125 16.3125C28.125 15.3805 27.3695 14.625 26.4375 14.625C25.5055 14.625 24.75 15.3805 24.75 16.3125C24.75 17.2445 25.5055 18 26.4375 18Z" fill="white" />
              <path d="M26.4375 24.75C27.3695 24.75 28.125 23.9945 28.125 23.0625C28.125 22.1305 27.3695 21.375 26.4375 21.375C25.5055 21.375 24.75 22.1305 24.75 23.0625C24.75 23.9945 25.5055 24.75 26.4375 24.75Z" fill="white" />
              <path d="M21.375 29.25V10.125" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <h2 className='md:text-[23.625px] max-md:text-[18px] font-[700]'>Landing</h2>
            <h2 className='md:text-[23.625px] max-md:text-[18px] font-[400]'>Page</h2>
          </div>
          <div className="navbar md:h-full max-md:hidden md:w-[45%] flex justify-evenly items-center ">
            <h4 className='w-1/5 font-[500] hover:font-[700] text-[18px] text-center hover:text-[#009379]'>Home</h4>
            <h4 className='w-1/5 font-[500] hover:font-[700] text-[18px] text-center hover:text-[#009379]'>Our Services</h4>
            <h4 className='w-1/5 font-[500] hover:font-[700] text-[18px] text-center hover:text-[#009379]'>Blogs</h4>
            <h4 className='w-1/5 font-[500] hover:font-[700] text-[18px] text-center hover:text-[#009379]'>About us</h4>
            <h4 className='w-1/5 font-[500] hover:font-[700] text-[18px] text-center hover:text-[#009379]'>Contact us</h4>
          </div>
          <div className="btn md:h-full md:w-[20%] max-md:hidden flex justify-center items-center">
            <button className='md:py-[16px] md:px-[50px] font-[600] bg-[#009379] md:rounded-[16px] max-md:rounded-[5px] md:text-[16px] text-white border-[1px] border-[#009379]  hover:bg-white hover:text-[#009379]'>Get Started</button>
          </div>
          <img className='md:hidden' width="30" height="30" src="https://img.icons8.com/material-outlined/48/FFFFFF/menu--v1.png" alt="menu--v1"/>
        </nav>
    </div>
  )
}

export default Navbar