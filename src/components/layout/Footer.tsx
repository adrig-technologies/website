import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-800 py-8 text-white'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='flex items-center'>
          <Image src='/logo.svg' width={50} height={50} alt='logo' />
          <span className='text-xl font-bold'>ADRIG Technologies</span>
        </div>
        <div className='flex space-x-4'>
          <a href='#' className='hover:text-gray-500'>
            Home
          </a>
          <a href='#' className='hover:text-gray-500'>
            About
          </a>
          <a href='#' className='hover:text-gray-500'>
            Services
          </a>
          <a href='#' className='hover:text-gray-500'>
            Contact
          </a>
        </div>
        <div>
          <span className='text-sm'>
            © 2023 ADRIG Technologies. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
