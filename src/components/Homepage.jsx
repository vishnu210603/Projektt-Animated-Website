import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import image from "../assets/PROJEXX.png"
function Homepage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.3"
      className='w-full h-full bg-black pt-1'
    >
      <div className='textstructure mt-40 px-20'>
        {["we create", "appealing", "presentations"].map((item, index) => (
          <div className='masker' key={index}>
            <div className='w-fit flex items-center'>
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '10vw' }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className='mr-[1vh] w-[10vw] h-[10vh] rounded-md relative top-[.9vh] bg-white'
                >
                  <img
                    className='object-cover border-[2px] w-full h-full rounded-md'
                    src={image}
                    alt="image"
                  />
                </motion.div>
              )}
              <h1 className='uppercase text-[6vw] leading-[5vw] tracking-tighter font-medium'>
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className='border-t-[2px] border-gray-800 mt-28 flex justify-between items-center text-bold uppercase py-4 px-16'>
        {["For public and private companies", "For the first pitch to IPO"].map(
          (item, index) => (
            <p key={index} className='text-md font-bold tracking-tight leading-none'>
              {item}
            </p>
          )
        )}

        <div className='start flex items-center gap-5'>
          <div className='px-5 py-2 border-[2px] border-gray-400 rounded-md font-medium text-md text-black bg-white uppercase'>
            Let's start a project
          </div>
          <div className='w-6.5 h-6.5 items-center justify-center border-[1px] border-gray-500 rounded-full'>
            <div className='size=5'><FaArrowLeftLong/></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
