import React from 'react'
import heroImg from '../../../public/images/hero-img.png'
export const Hero = () => {
  return (
    <div
      className=''
      style={{
        backgroundImage: "url('/images/hero.png')",
        backgroundRepeat: "repeat",
        backgroundAttachment: 'scroll'
      }}
    >
      <div className='
      py-32 bg-[#aa2c23ef] flex flex-col md:flex-row items-center md:justify-between
       px-10 md:px-20
      '>
        <div className='md:w-2/3 md:transform md:translate-x-20  
        relative z-[3]'>
          <h1 className='
          bg-[#ff00004d] p-3
         uppercase text-white text-4xl md:text-7xl font-bold'>
            Taste the authentic
            Saudi cuisine
          </h1>
          <p className='text-white md:pr-52'>
            Among the best Saudi chefs in the world, serving you something beyond flavor.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 
          duration-300
          shadow-xl px-7 py-3 my-2
          ">
            EXPLORE MENU
          </button>
        </div>
        <div className='md:w-1/2 my-5 md:my-0  relative z-[2]'>
          <img src={heroImg} alt="Hero Image"
            className="w-5/7"
          />
        </div>
      </div>
    </div>
  )
}
