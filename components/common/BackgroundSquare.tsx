'use client';
import { motion } from 'framer-motion';

function BackgroundSquare() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ['20%', '20%', '50%', '80%', '20%'],
      }}
      transition={{
        duration: 5,
        repeatType: 'loop',
        repeatDelay: 5,
      }}
      className='relative flex justify-center items-center'
    >
      <div className='border border-gray-500 h-[200px] w-[200px] mt-20 animate-ping opacity-20' />
      <div className='border border-gray-600 h-[300px] w-[300px] mt-20 absolute animate-[spin_5s_linear_infinite]' />
      <div className='border border-gray-600 h-[300px] w-[300px] mt-20 absolute animate-[spin_10s_linear_infinite] opacity-20 ' />
      <div className='border border-gray-500 opacity-20 animate-pulse absolute mt-20 h-[500px] w-[500px]' />
      <div className='border border-gray-500 h-[200px] w-[200px] mt-20 absolute opacity-50' />
    </motion.div>
  );
}

export default BackgroundSquare;
