import React from 'react';

import SectionDivider from '@/components/layout/SectionDivider';

import { Button } from '../ui/button';

const Homepage = () => {
  return (
    <div className='bg-gray-800'>
      {/* Homepage Components shall be added here based on the order defined in UI/UX design */}
      <SectionDivider className='custom-class'>
        <div className='mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-4 lg:text-left'>
          <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            Are You Impressed Already?
            <br />
            Start Contacting us today.
          </h2>
          <div className='mt-10 flex items-center justify-center gap-x-6 lg:justify-start'>
            <Button>Get Started</Button>
            <Button>Learn more</Button>
          </div>
        </div>
      </SectionDivider>
    </div>
  );
};

export default Homepage;
