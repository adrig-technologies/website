import Image from 'next/image';
import React from 'react';

const OurServices = () => {
  return (
    <div className='flex justify-center'>
      <div className='card-bg h-80 w-80 flex-col items-end rounded-lg'>
        <div className='flex h-3/5 flex-col items-center'>
          <Image src='./' alt='Your Image' width={100} height={100} />
        </div>
        <div className='card-des h-2/5 rounded-md p-4 text-center'>
          {/* Your description goes here */}
          <p className='font-bold'>
            Artificial Intelligence - Intelligence Refined
          </p>
          <button className='green-button mt-4 rounded-md px-4 py-2 text-white'>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
