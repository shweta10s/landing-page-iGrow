import React from 'react'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Sponser from './components/sponser'


const App = () => {
  return (
    <div>
      <div className="main text-white relative bg-[#F8F9FF]">
        <Navbar />

        <div className="bg-image md:h-[580px] max-md:h-[300px] md:w-full relative">
          <img className='h-full w-full object-cover' src="/public/images/bg-image.png" alt="" />
          <div className="context h-full w-full absolute z-10 top-0 left-0 ">
            <div className="part1 h-full md:w-2/3 max-md:px-4 flex flex-col items-center justify-center md:gap-[20px] max-md:gap-[8px]">
              <h1 className='md:w-[70%] md:text-[67px] max-md:text-[24px] max-md:text-center font-[700] md:leading-tight max-md:mt-8'>Create Engaging Landing Pages</h1>
              <p className='md:w-[70%] md:text-[21px] max-md:text-[12px] font-[400] max-md:text-center  md:leading-tight'>Build beautiful landing pages in record time with igrowmybiz Landing Page UI kit for Figma.</p>
              <div className="md:w-[70%] btn-2 flex items-center justify-start md:gap-4 max-md:gap-2 md:mt-[20px] max-md:mt-[10px]">
                <button className='md:py-[16px] max-md:py-[8px] md:px-[50px] max-md:px-[20px] font-[600] bg-[#009379] md:rounded-[16px] max-md:rounded-[5px] border-[1px] border-[#009379] md:text-[16px] max-md:text-[12px] text-white hover:bg-white hover:text-[#009379]'>Get Started</button>
                <button className='md:py-[16px] max-md:py-[8px] md:px-[50px] max-md:px-[20px] font-[600] bg-white md:rounded-[16px] max-md:rounded-[5px] border-[1px] border-[#009379] md:text-[16px] max-md:text-[12px] text-[#009379] hover:bg-[#009379] hover:text-white'>How it works</button>
              </div>
            </div>
          </div>
        </div>

        <div className="page2-sponsers h-full w-full text-black bg-[#F8F9FF]">

          <Sponser />

          <div className='md:pb-10 max-md:pb-5'>
            <h1 className='md:text-[38px] max-md:text-[24px] text-center font-[700]'>Our Services</h1>
            <p className='md:text-[16px] max-md:text-[12px] font-[400] text-center max-md:px-8 md:mt-[10px]'>These are just a few features you’ll get using Anima Landing Page Ui Kit.</p>
          </div>

          <div className="boxes md:h-[65%] max-md:h-full flex justify-evenly items-center md:px-10 max-md:px-8">
            <div className="box max-md:hidden md:h-[90%] md:w-[350px] md:py-[40px] max-md:py-[20px] md:px-[30px] max-md:px-[15px] flex flex-col items-center justify-between md:gap- max-md:gap-[10px]">
              <div className="content flex flex-col justify-between items-center md:gap-[30px] max-md:gap-[15px]">
                <div className="ol-1 flex justify-center items-center">
                  <svg className='max-md:w-[20px] max-md:h-[20px]' xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                    <path opacity="0.2" d="M11.4351 35.8148C11.313 35.9389 11.1674 36.0373 11.0069 36.1046C10.8463 36.1718 10.674 36.2064 10.5 36.2064C10.3259 36.2064 10.1536 36.1718 9.99307 36.1046C9.83252 36.0373 9.68695 35.9389 9.56482 35.8148L6.18513 32.4352C6.06112 32.313 5.96264 32.1675 5.89542 32.0069C5.8282 31.8464 5.79358 31.6741 5.79358 31.5C5.79358 31.3259 5.8282 31.1536 5.89542 30.9931C5.96264 30.8325 6.06112 30.687 6.18513 30.5648L23.625 13.125L28.875 18.375L11.4351 35.8148Z" fill="#FF6250" />
                    <path d="M35.4375 21V28.875" stroke="#FF6250" stroke-width="2.375" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M31.5 24.9375H39.375" stroke="#FF6250" stroke-width="2.375" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13.7812 6.5625V13.125" stroke="#FF6250" stroke-width="2.375" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10.5 9.84375H17.0625" stroke="#FF6250" stroke-width="2.375" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M27.5625 30.1874V35.4374" stroke="#FF6250" stroke-width="2.375" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M24.9375 32.8125H30.1875" stroke="#FF6250" stroke-width="2.375" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M30.5856 6.17398L6.18873 30.5708C5.67617 31.0834 5.67617 31.9144 6.18873 32.427L9.58201 35.8203C10.0946 36.3328 10.9256 36.3328 11.4382 35.8203L35.835 11.4234C36.3476 10.9109 36.3476 10.0798 35.835 9.56727L32.4417 6.17398C31.9292 5.66142 31.0981 5.66142 30.5856 6.17398Z" stroke="#FF6250" stroke-width="2.375" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M23.625 13.125L28.875 18.375" stroke="#FF6250" stroke-width="2.375" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <div className='flex flex-col md:gap-[24px] max-md:gap-[12px]'>
                  <h1 className='md:text-[28px] max-md:text-[20px] font-[600] text-center'>Fast building</h1>
                  <p className='md:text-[16px] max-md:text-[12px] font-[400] text-center'>Tailor Anima's Landing Page UI Kit to your unique style and brand with customisable components, in no time!</p>
                </div>
              </div>
              <div className="line flex text-center justify-between items-center md:pt-4 md:gap-[10px] max-md:gap-[5px]">
                <p className='text-[#009379] md:text-[16px] max-md:text-[12px] font-[600]'>Learn More</p>
                <svg className='max-md:w-[12px] max-md:-h-[12px]' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3.125 10H16.875" stroke="#009379" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#009379" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>

            <div className="box max-md:hidden md:h-[90%] md:w-[350px] md:py-[40px] max-md:py-[20px] md:px-[30px] max-md:px-[15px] flex flex-col items-center justify-between md:gap- max-md:gap-[10px]">
              <div className="content flex flex-col justify-between items-center md:gap-[30px] max-md:gap-[15px]">
                <div className="ol-2 flex justify-center items-center">
                  <svg className='max-md:w-[20px] max-md:h-[20px]' xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                    <path opacity="0.2" d="M34.125 6.5625H28.875C28.1501 6.5625 27.5625 7.15013 27.5625 7.875V13.125C27.5625 13.8499 28.1501 14.4375 28.875 14.4375H34.125C34.8499 14.4375 35.4375 13.8499 35.4375 13.125V7.875C35.4375 7.15013 34.8499 6.5625 34.125 6.5625Z" fill="#009379" />
                    <path opacity="0.2" d="M7.875 6.63672H13.125C13.8089 6.63672 14.3633 7.19112 14.3633 7.875V13.125C14.3633 13.8089 13.8089 14.3633 13.125 14.3633H7.875C7.19112 14.3633 6.63672 13.8089 6.63672 13.125V7.875C6.63672 7.19112 7.19112 6.63672 7.875 6.63672Z" fill="#009379" stroke="#009379" stroke-width="0.148438" />
                    <path opacity="0.2" d="M28.875 27.6367H34.125C34.8089 27.6367 35.3633 28.1911 35.3633 28.875V34.125C35.3633 34.8089 34.8089 35.3633 34.125 35.3633H28.875C28.1911 35.3633 27.6367 34.8089 27.6367 34.125V28.875C27.6367 28.1911 28.1911 27.6367 28.875 27.6367Z" fill="#009379" stroke="#009379" stroke-width="0.148438" />
                    <path opacity="0.2" d="M7.875 27.6367H13.125C13.8089 27.6367 14.3633 28.1911 14.3633 28.875V34.125C14.3633 34.8089 13.8089 35.3633 13.125 35.3633H7.875C7.19112 35.3633 6.63672 34.8089 6.63672 34.125V28.875C6.63672 28.1911 7.19112 27.6367 7.875 27.6367Z" fill="#009379" stroke="#009379" stroke-width="0.148438" />
                    <path d="M34.125 6.5625H28.875C28.1501 6.5625 27.5625 7.15013 27.5625 7.875V13.125C27.5625 13.8499 28.1501 14.4375 28.875 14.4375H34.125C34.8499 14.4375 35.4375 13.8499 35.4375 13.125V7.875C35.4375 7.15013 34.8499 6.5625 34.125 6.5625Z" stroke="#009379" stroke-width="2.375" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13.125 6.5625H7.875C7.15013 6.5625 6.5625 7.15013 6.5625 7.875V13.125C6.5625 13.8499 7.15013 14.4375 7.875 14.4375H13.125C13.8499 14.4375 14.4375 13.8499 14.4375 13.125V7.875C14.4375 7.15013 13.8499 6.5625 13.125 6.5625Z" stroke="#009379" stroke-width="2.375" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M34.125 27.5625H28.875C28.1501 27.5625 27.5625 28.1501 27.5625 28.875V34.125C27.5625 34.8499 28.1501 35.4375 28.875 35.4375H34.125C34.8499 35.4375 35.4375 34.8499 35.4375 34.125V28.875C35.4375 28.1501 34.8499 27.5625 34.125 27.5625Z" stroke="#009379" stroke-width="2.375" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13.125 27.5625H7.875C7.15013 27.5625 6.5625 28.1501 6.5625 28.875V34.125C6.5625 34.8499 7.15013 35.4375 7.875 35.4375H13.125C13.8499 35.4375 14.4375 34.8499 14.4375 34.125V28.875C14.4375 28.1501 13.8499 27.5625 13.125 27.5625Z" stroke="#009379" stroke-width="2.375" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10.5 27.5625V14.4375" stroke="#009379" stroke-width="2.375" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M27.5625 31.5H14.4375" stroke="#009379" stroke-width="2.375" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M31.5 14.4375V27.5625" stroke="#009379" stroke-width="2.375" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M14.4375 10.5H27.5625" stroke="#009379" stroke-width="2.375" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <div className='flex flex-col md:gap-[24px] max-md:gap-[12px]'>
                  <h1 className='md:text-[28px] max-md:text-[20px] font-[600] text-center'>Responsive Design</h1>
                  <p className='md:text-[16px] max-md:text-[12px] font-[400] text-center'>No need to worry about screen size. Anima's Landing Page UI Kit adapts to any screen size, from desktop to mobile.</p>
                </div>
              </div>
              <div className="line flex text-center justify-between items-center md:pt-4 md:gap-[10px] max-md:gap-[5px]">
                <p className='text-[#009379] md-text-[16px] max-md:text-[12px] font-[600]'>Learn More</p>
                <svg className='max-md:w-[12px] max-md:-h-[12px]' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3.125 10H16.875" stroke="#009379" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#009379" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>

            <div className="box md:h-[90%] md:w-[350px] md:py-[40px] max-md:py-[20px] md:px-[30px] max-md:px-[15px] flex flex-col items-center justify-between md:gap- max-md:gap-[10px]">
              <div className="content flex flex-col justify-between items-center md:gap-[30px] max-md:gap-[15px]">
                <div className="ol-3 flex justify-center items-center">
                  <svg className='max-md:w-[20px] max-md:h-[20px]' xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                    <path opacity="0.2" d="M16.8 32.55L9.45 25.2L6.21797 34.1086C6.12862 34.3424 6.10885 34.597 6.16105 34.8417C6.21325 35.0865 6.3352 35.3109 6.51216 35.4879C6.68911 35.6648 6.91352 35.7868 7.15827 35.839C7.40302 35.8912 7.65765 35.8714 7.89141 35.782L16.8 32.55Z" fill="#F8D57E" />
                    <path opacity="0.2" d="M32.6124 24.8424L32.6126 24.8426C32.7608 24.9895 32.8695 25.1716 32.9285 25.3717C32.9875 25.5719 32.995 25.7838 32.9502 25.9877C32.9054 26.1915 32.8098 26.3807 32.6723 26.5377C32.5348 26.6948 32.3599 26.8145 32.1637 26.8858L25.4816 29.3141L12.6859 16.5185L15.1143 9.83633C15.1856 9.64017 15.3053 9.46521 15.4623 9.32771C15.6193 9.19021 15.8085 9.09463 16.0124 9.04984C16.2162 9.00505 16.4281 9.01252 16.6283 9.07155C16.8285 9.13057 17.0105 9.23924 17.1575 9.38745L17.1577 9.38768L32.6124 24.8424Z" fill="#F8D57E" stroke="#F8D57E" stroke-width="0.148438" />
                    <path d="M6.21797 34.1086L15.0445 9.81098C15.1201 9.60306 15.247 9.41762 15.4134 9.27188C15.5798 9.12613 15.7804 9.02482 15.9965 8.97735C16.2125 8.92988 16.4371 8.93779 16.6493 9.00036C16.8615 9.06292 17.0544 9.1781 17.2102 9.3352L32.6648 24.7899C32.8219 24.9456 32.9371 25.1386 32.9997 25.3508C33.0622 25.563 33.0702 25.7875 33.0227 26.0036C32.9752 26.2196 32.8739 26.4202 32.7282 26.5866C32.5824 26.7531 32.397 26.8799 32.1891 26.9555L7.89141 35.7821C7.65765 35.8714 7.40302 35.8912 7.15827 35.839C6.91352 35.7868 6.68911 35.6648 6.51216 35.4879C6.3352 35.3109 6.21325 35.0865 6.16105 34.8418C6.10885 34.597 6.12862 34.3424 6.21797 34.1086V34.1086Z" stroke="#F8D57E" stroke-width="2.375" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M27.5625 11.8125C27.5625 11.8125 27.5625 7.875 31.5 7.875C35.4375 7.875 35.4375 3.9375 35.4375 3.9375" stroke="#F8D57E" stroke-width="2.375" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M16.8 32.55L9.44998 25.2" stroke="#F8D57E" stroke-width="2.375" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M23.625 2.625V6.5625" stroke="#F8D57E" stroke-width="2.375" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M35.4375 18.375L38.0625 21" stroke="#F8D57E" stroke-width="2.375" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M35.4375 13.125L39.375 11.8125" stroke="#F8D57E" stroke-width="2.375" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12.6 16.5375L25.4625 29.4" stroke="#F8D57E" stroke-width="2.375" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <div className='flex flex-col md:gap-[24px] max-md:gap-[12px]'>
                  <h1 className='md:text-[28px] max-md:text-[20px] font-[600] text-center'>No Code Needed</h1>
                  <p className='md:text-[16px] max-md:text-[12px] font-[400] text-center'>Zero coding skills required, Anima's Landing Page UI Kit empowers you to create stunning landing pages with ease.</p>
                </div>
              </div>
              <div className="line flex text-center justify-between items-center md:pt-4 md:gap-[10px] max-md:gap-[5px]">
                <p className='text-[#009379] md:text-[16px] max-md:text-[12px] font-[600]'>Learn More</p>
                <svg className='max-md:w-[12px] max-md:-h-[12px]' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3.125 10H16.875" stroke="#009379" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#009379" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="page3 h-full w-full flex flex-col items-center text-black bg-[#F8F9FF]">
          <div>
            <h1 className='md:text-[38px] max-md:text-[24px] text-center font-[700] md:mt-5 max-md:mt-3'>Our Metrics Tell the Story</h1>
            <p className='md:text-[16px] max-md:text-[12px] font-[400] text-center max-md:px-8 md:mt-[10px] max-md:mt-[5px]'>Our metrics component gives you the inside scoop on your success and helps you stay on top of your game in style.</p>
          </div>
          <div className="matric-part md:h-[30%] w-full flex max-md:flex-col justify-center items-center md:px-16 max-md:px-8 md:py-10 max-md:py-5 md:gap-3 max-md:gap-5">
            <div className="matric-1 md:w-[50%] max-md:w-full flex justify-evenly items-center md:pl-9 md:gap-4 max-md:gap-4 ">
              <div className="matric md:w-[260px] max-md:h-[90px] max-md:w-[50%] md:py-[18px] max-md:py-[10px] flex flex-col gap-[5px]">
                <p className='md:text-[38px] max-md:text-[18px] font-[700] text-center'>10k+</p>
                <p className='md:text-[16px] max-md:text-[12px] font-[400] text-center'>Website launched</p>
              </div>
              <div className="matric md:w-[260px] max-md:h-[90px] max-md:w-[50%] md:py-[18px] max-md:py-[10px] flex flex-col gap-[5px]">
                <p className='md:text-[38px] max-md:text-[18px] font-[700] text-center'>931k+</p>
                <p className='md:text-[16px] max-md:text-[12px] font-[400] text-center'>Projects created with Anima</p>
              </div>
            </div>
            <div className="matric-2 md:w-[50%] max-md:w-full flex justify-evenly items-center md:pr-9 md:gap-4 max-md:gap-4 ">
              <div className="matric md:w-[260px] max-md:h-[90px] max-md:w-[50%] md:py-[18px] max-md:py-[10px]  flex flex-col gap-[5px]">
                <p className='md:text-[38px] max-md:text-[18px] font-[700] text-center'>240k+</p>
                <p className='md:text-[16px] max-md:text-[12px] font-[400] text-center'>New users joined Anima</p>
              </div>
              <div className="matric md:w-[260px] max-md:h-[90px] max-md:w-[50%] md:py-[18px] max-md:py-[10px]  flex flex-col gap-[5px]">
                <p className='md:text-[38px] max-md:text-[18px] font-[700] text-center'>12k+</p>
                <p className='md:text-[16px] max-md:text-[12px] font-[400] text-center'>Teams used Anima</p>
              </div>
            </div>
          </div>

        </div>

        <div className="page4 h-full w-full flex justify-center items-center bg-[#F8F9FF]">
          <div className="about h-full md:w-[86%] flex max-md:flex-col-reverse max-md:gap-4 relative">
            <div className="left md:w-[50%] h-full flex justify-center items-center md:pl-20">
              <img className='md:w-[410px] max-md:w-[200px] scale-x-[-1] rounded-lg' src="/public/images/man.png" alt="" />
            </div>
            <div className="right md:w-[50%] flex flex-col justify-center items-left md:px-8 max-md:px-4 md:gap-4 max-md:gap-3 text-black">
              <h1 className='md:text-[50px] max-md:text-[24px] max-md:text-center font-[700]'>About us</h1>
              <p className='md:text-[16px] max-md:text-[12px] max-md:text-justify font-[400]'>“The Landing Page UI Kit has been a game changer for my agency. The pre-designed components and templates have helped us deliver projects faster and with more consistency. Great job!" “The Landing Page UI Kit has been a game changer for my agency. The pre-designed components and templates have helped us deliver projects faster and with more consistency. Great job!" “The Landing Page UI Kit has been a game changer for my agency. The pre-designed components and templates have helped us deliver projects faster and with more consistency. Great job!" “The Landing Page UI Kit has been a game changer for my agency. The pre-designed components and templates have helped us deliver projects faster and with more consistency. Great job!"</p>
            </div>
            <div className="overlay max-md:w-[210px] md:w-[320px] md:h-[70px] absolute flex items-center justify-evenly md:top-[60%] max-md:top-[80%] md:left-[8%] max-md:left-[4%] max-md:py-1 max-md:px-1">
              <div className="circle md:w-[39px] max-md:w-[28px] md:h-[39px] max-md:h-[28px] rounded-full flex justify-center items-center bg-[#68D585]">
                <svg className='max-md:w-[14px] max-md:h-[16px]' xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 18" fill="none">
                  <path d="M7.85715 17.1429C8.91756 17.1405 9.82239 16.2357 10 15H5.71429C5.89191 16.2357 6.79674 17.1405 7.85715 17.1429Z" fill="#2D2D2D" />
                  <path d="M14.9302 13.7066C14.9122 13.6821 13.125 11.2088 13.125 9.15751V5.49451C13.125 2.45997 10.6066 0 7.5 0C4.39341 0 1.87503 2.45997 1.87503 5.49451V9.15751C1.87503 11.2088 0.0877871 13.6821 0.0697872 13.7066C-0.011818 13.8183 -0.0226979 13.9651 0.0415967 14.0871C0.105891 14.2091 0.234579 14.2857 0.375036 14.2857H14.625C14.7654 14.2857 14.8941 14.2091 14.9584 14.0871C15.0227 13.9651 15.0118 13.8183 14.9302 13.7066Z" fill="#2D2D2D" />
                </svg>
              </div>
              <div className="rect md:h-[35px] flex flex-col items-start justify-center ">
                <p className='md:text-[15px] max-md:text-[12px] font-[400]'>New Invitation!</p>
                <p className='md:text-[17px] max-md:text-[12px] font-[400]'>IGrowmybiz digital marketing </p>
              </div>
            </div>
          </div>
        </div>

        <div className="page5 h-full w-full flex  flex-col items-center  text-black md:pt-[50px] max-md:pt-[25px]">
          <div className="contact-form md:w-[80%] max-md:w-[90%] flex items-center justify-center md:py-4 max-md:py-2 bg-[#E5F4F2]">
            <div className="contact-content md:w-[80%] flex flex-col items-center justify-evenly md:py-3 max-md:py-2">
              <h1 className='font-[700] md:text-[50px] max-md:text-[24px] max-md:text-center md:mb-[20px] max-md:mb-[10px]'>Get Landing Page UI Today!</h1>
              <p className='font-[400] md:text-[21px] max-md:text-[12px] max-md:text-center md:mb-[30px] max-md:mb-[15px]'>Break the Figma limits and explore the endless possibilities with Anima.</p>
              <button className='md:py-[16px] max-md:py-[8px] md:px-[50px] max-md:px-[20px] font-[600] bg-[#009379] md:rounded-[16px] max-md:rounded-[5px] md:text-[16px] max-md:text-[12px] text-white hover:bg-white hover:text-[#009379] border-[1px] border-[#009379]  flex md:gap-2 max-md:gap-1 items-center'>Get Started <svg className='max-md:h-[10px] max-md:w-[10px]' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3.125 10H16.875" stroke="#F8F9FF" stroke-width="1.38889" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#F8F9FF" stroke-width="1.38889" stroke-linecap="round" stroke-linejoin="round" />
              </svg></button>

            </div>
          </div>

          <div className="lets-touch md:w-[80%] max-md:w-[90%] flex flex-col md:gap-4 max-md:gap-2 md:px-[60px] max-md:px-[30px] md:text-left max-md:text-center my-[60px] max-md:my-[30px]">
            <h1 className='md:text-[38px] max-md:text-[24px] font-[700]'>Let’s get in touch!</h1>
            <p className='md:text-[16px] max-md:text-[12px] font-[400]'>Got questions about the Landing Page UI Kit? Our team is here to help. Contact us for quick and friendly support.</p>
            <form className='md:h-[40%] w-full md:mt-[40px] max-md:mt-[20px] flex flex-col md:items-start gap-4 max-md:gap-3' action="">
              <div className="form-content w-full h-full flex max-md:flex-col max-md:gap-2">
                <div className="left md:w-[50%] flex flex-col items-start max-md:items-center justify-center md:gap-4 max-md:gap-2">
                  <input className='md:h-[60px] max-md:h-[40px] md:w-[96%] max-md:w-[100%] md:px-[20px] max-md:px-[10px] md:py-[8px] max-md:py-[4px] md:text-[16px] max-md:text-[14px] font-[400] md:rounded-[20px] max-md:rounded-[10px] bg-[#FFF] border-[1px] border-[#D8D8D8]' type="text" placeholder='Full Name' name='fullname' />
                  <input className='md:h-[60px] max-md:h-[40px] md:w-[96%] max-md:w-[100%] md:px-[20px] max-md:px-[10px] md:py-[8px] max-md:py-[4px] md:text-[16px] max-md:text-[14px] font-[400] md:rounded-[20px] max-md:rounded-[10px] bg-[#FFF] border-[1px] border-[#D8D8D8]' type="email" placeholder='Email ID' name='email' />
                </div>
                <div className="right md:w-[50%] flex flex-col items-end max-md:items-center justify-center md:gap-4 max-md:gap-2">
                  <input className='md:h-[60px] max-md:h-[40px] md:w-[96%] max-md:w-[100%] md:px-[20px] max-md:px-[10px] md:py-[8px] max-md:py-[4px] md:text-[16px] max-md:text-[14px] font-[400] md:rounded-[20px] max-md:rounded-[10px] bg-[#FFF] border-[1px] border-[#D8D8D8]' type="text" placeholder='Number' name='number' />
                  <input className='md:h-[60px] max-md:h-[40px] md:w-[96%] max-md:w-[100%] md:px-[20px] max-md:px-[10px] md:py-[8px] max-md:py-[4px] md:text-[16px] max-md:text-[14px] font-[400] md:rounded-[20px] max-md:rounded-[10px] bg-[#FFF] border-[1px] border-[#D8D8D8]' type="text" placeholder='Location' name='location' />
                </div>
              </div>
              <button className='md:py-[16px] max-md:py-[8px] md:px-[50px] max-md:px-[20px] font-[600] bg-[#009379] md:rounded-[16px] max-md:rounded-[5px] md:text-[16px] max-md:text-[12px] text-white border-[1px] border-[#009379] hover:bg-white hover:text-[#009379] flex md:gap-2 max-md:gap-1 items-center max-md:mx-auto'>Submit</button>
            </form>
          </div>
        </div>

        <Footer />


      </div>
    </div>
  )
}

export default App