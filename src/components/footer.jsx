import React from 'react'

const Footer = () => {
  return (
    <div>
         <footer className='page6 w-full h-full bg-[#2D2D2D] md:py-[30px] md:px-[130px] flex flex-col justify-between items-start max-md:py-4 max-md:px-4'>
          <div className="w-full h-full flex max-md:flex-col justify-between items-start md:mb-[30px] max-md:gap-[16px] md:gap-[150px]">
          <div className="col-1 flex flex-col md:gap-[30px] max-md:gap-[10px] items-start">
            <div className="h-full flex justify-center items-center max-md:mx-auto">
            <svg className='max-md:h-[24px] max-md:w-[24px]' xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
              <path d="M30.375 10.125H5.625C5.00368 10.125 4.5 10.6287 4.5 11.25V28.125C4.5 28.7463 5.00368 29.25 5.625 29.25H30.375C30.9963 29.25 31.5 28.7463 31.5 28.125V11.25C31.5 10.6287 30.9963 10.125 30.375 10.125Z" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M11.25 3.375L18 10.125L24.75 3.375" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M26.4375 18C27.3695 18 28.125 17.2445 28.125 16.3125C28.125 15.3805 27.3695 14.625 26.4375 14.625C25.5055 14.625 24.75 15.3805 24.75 16.3125C24.75 17.2445 25.5055 18 26.4375 18Z" fill="white" />
              <path d="M26.4375 24.75C27.3695 24.75 28.125 23.9945 28.125 23.0625C28.125 22.1305 27.3695 21.375 26.4375 21.375C25.5055 21.375 24.75 22.1305 24.75 23.0625C24.75 23.9945 25.5055 24.75 26.4375 24.75Z" fill="white" />
              <path d="M21.375 29.25V10.125" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <h2 className='md:text-[23.625px] max-md:text-[16px] font-[700]'>Landing</h2>
            <h2 className='md:text-[23.625px] max-md:text-[16px] font-[400]'>Page</h2>
            </div>
            <div className="create-landing flex flex-col md:gap-[24px] max-md:gap-[10px] max-md:text-center">
            <h1 className='font-[700] md:text-[40px] max-md:text-[20px] text-[#FFF] md:w-[340px]'>Create Engaging Landing Pages</h1>
            <p className='font-[400] md:text-[21px] max-md:text-[14px] text-[#FFF] md:w-[390px]'>Build beautiful landing pages in record time with igrowmybiz Landing Page UI kit for Figma.</p>
            </div>
          </div>
          <div className="col-23 w-full flex justify-between  items-start md:mb-[30px] max-md:px-2">
          <div className="col-2 flex flex-col md:gap-[24px] max-md:gap-[10px]">
            <h2 className='text-[#009379] font-[600] md:text-[24px] max-md:text-[16px]'>Menu</h2>
            <div className="menu-cont flex flex-col items-left md:gap-[12px] max-md:gap-[6px]">
            <p className='md:text-[18px] max-md:text-[12px] font-[400] text-[#FFF]'>Home</p>
            <p className='md:text-[18px] max-md:text-[12px] font-[400] text-[#FFF]'>Our Services</p>
            <p className='md:text-[18px] max-md:text-[12px] font-[400] text-[#FFF]'>Blogs</p>
            <p className='md:text-[18px] max-md:text-[12px] font-[400] text-[#FFF]'>About Us</p>
            <p className='md:text-[18px] max-md:text-[12px] font-[400] text-[#FFF]'>Contact Us</p>
            </div>
          </div>
          <div className="col-3 flex flex-col md:gap-[24px] max-md:gap-[10px]">
            <h2 className='text-[#009379] font-[600] md:text-[24px] max-md:text-[16px]'>Connect with us</h2>
           <div className="contact-col flex flex-col md:gap-[20px] max-md:gap-[10px]">
           <div className='flex items-center md:gap-[12px] max-md:gap-[6px]'>
              <svg className='max-md:w-[12px] max-md:h-[12px]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path opacity="0.2" d="M8.67187 11.7C9.44364 13.2938 10.7324 14.5792 12.3281 15.3469C12.4458 15.4026 12.576 15.4268 12.7059 15.4169C12.8358 15.407 12.9608 15.3635 13.0687 15.2907L15.4125 13.725C15.516 13.6548 15.6357 13.6119 15.7603 13.6005C15.8849 13.589 16.0104 13.6093 16.125 13.6594L20.5125 15.5438C20.6625 15.6062 20.7877 15.7162 20.869 15.8568C20.9504 15.9974 20.9832 16.1608 20.9625 16.3219C20.8234 17.4073 20.2937 18.4048 19.4723 19.1278C18.6509 19.8508 17.5943 20.2498 16.5 20.25C13.1185 20.25 9.87548 18.9067 7.48439 16.5156C5.0933 14.1246 3.75 10.8815 3.75 7.50003C3.75025 6.40578 4.1492 5.34911 4.87221 4.52774C5.59522 3.70637 6.59274 3.17659 7.67812 3.03753C7.83922 3.01684 8.00266 3.04967 8.14326 3.13099C8.28386 3.2123 8.39384 3.33758 8.45625 3.48753L10.3406 7.88441C10.3896 7.99723 10.4101 8.12038 10.4003 8.24299C10.3905 8.36561 10.3507 8.48393 10.2844 8.58753L8.71875 10.9688C8.64905 11.0765 8.60814 11.2003 8.59993 11.3283C8.59172 11.4563 8.61649 11.5843 8.67187 11.7Z" fill="#009379" />
                <path d="M8.67187 11.7C9.44364 13.2938 10.7324 14.5792 12.3281 15.3469C12.4458 15.4026 12.576 15.4268 12.7059 15.4169C12.8358 15.407 12.9608 15.3635 13.0687 15.2907L15.4125 13.725C15.516 13.6548 15.6357 13.6119 15.7603 13.6005C15.8849 13.589 16.0104 13.6093 16.125 13.6594L20.5125 15.5438C20.6625 15.6062 20.7877 15.7162 20.869 15.8568C20.9504 15.9974 20.9832 16.1608 20.9625 16.3219C20.8234 17.4073 20.2937 18.4048 19.4723 19.1278C18.6509 19.8508 17.5943 20.2498 16.5 20.25C13.1185 20.25 9.87548 18.9067 7.48439 16.5156C5.0933 14.1246 3.75 10.8815 3.75 7.50003C3.75025 6.40578 4.1492 5.34911 4.87221 4.52774C5.59522 3.70637 6.59274 3.17659 7.67812 3.03753C7.83922 3.01684 8.00266 3.04967 8.14326 3.13099C8.28386 3.2123 8.39384 3.33758 8.45625 3.48753L10.3406 7.88441C10.3896 7.99723 10.4101 8.12038 10.4003 8.24299C10.3905 8.36561 10.3507 8.48393 10.2844 8.58753L8.71875 10.9688C8.64905 11.0765 8.60814 11.2003 8.59993 11.3283C8.59172 11.4563 8.61649 11.5843 8.67187 11.7Z" stroke="#009379" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14.9438 3.75C16.2159 4.09141 17.3759 4.76142 18.3072 5.69279C19.2386 6.62416 19.9086 7.78412 20.25 9.05625" stroke="#009379" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14.1656 6.64697C14.9307 6.85017 15.6285 7.25202 16.1883 7.81179C16.748 8.37156 17.1499 9.06936 17.3531 9.83447" stroke="#009379" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p className='md:text-[16px] max-md:text-[12px] font-[400] text-[#FFF]'>+012 345 6789</p>
            </div>
            <div className='flex items-center md:gap-[12px] max-md:gap-[6px]'>
              <svg className='max-md:w-[12px] max-md:h-[12px]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path opacity="0.2" d="M21 5.25L12 13.5L3 5.25H21Z" fill="#009379" />
                <path d="M3 5.25H21V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18V5.25Z" stroke="#009379" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21 5.25L12 13.5L3 5.25" stroke="#009379" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p className='md:text-[16px] max-md:text-[12px] font-[400] text-[#FFF]'>Hello@animaapp.com</p>
            </div>
           </div>
          </div>
          </div>
          </div>
          <div className=' md:px-[130px] w-full h-[1px] bg-[#009379] max-md:mt-2'></div>
          <div className="copywrite h-full w-full flex items-center justify-center md:mt-[30px] max-md:mt-[10px]">
          <p className='font-[400] md:text-[16px] max-md:text-[8px] text-[#FFF] text-center'>© 2024 Copyright, All Right Reserved</p>
          </div>
        </footer>
    </div>
  )
}

export default Footer