import Image from 'next/image';
import React from 'react';

const LoadingPage = () => {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='text-center'>
        <Image src='/logo.png' alt='logo' width={200} height={200} />
        <h1 className='mb-4 text-4xl font-bold text-gray-300'>
          Under Construction
        </h1>
        <p className='text-gray-300'>
          Stay tuned! Our website is under construction.
        </p>
        <div className='animate-spin text-green-700'>
          {/* Tailwind CSS rotating spinner animation */}
          <svg
            className='h-12 w-12'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M17.657 6.343a8 8 0 10-11.314 11.314'
            />
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M22 12a10 10 0 11-19.395-1'
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
