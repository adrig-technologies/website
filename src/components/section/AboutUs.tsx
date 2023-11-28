import Image from 'next/image';
import React from 'react';

import Section from '@/components/layout/Section';

const AboutUs = () => {
  const projectStats = [
    { count: 2097, title: 'Projects and Plans' },
    { count: 3590, title: 'Helped people' },
    { count: 74, title: 'Volunteer' },
    { count: 100, title: 'Timing' },
  ];

  return (
    <Section
      className='font-poppins relative bg-black text-white'
      title='ABOUT US'
    >
      <div className='before-title absolute inset-x-0 top-0 flex items-center justify-center space-x-2'>
        <h2 className='mb-[-90px] text-6xl font-bold opacity-25 '>ABOUT US</h2>
      </div>
      <div className='flex flex-wrap'>
        <div className='relative mb-10 w-full px-4 lg:mb-0 lg:w-1/2'>
          <Image src='/gst.jpg' alt='Your Image' width={800} height={600} />
          <div className='h-100 absolute bottom-0 left-0 flex w-full items-center justify-center rounded-sm bg-orange-100 p-4'>
            <div className='text-center'>
              <p className='mb-4 text-black'>
                At Adrig, we're more than a startup, we're architects of ideas.
              </p>
              <a
                href='#'
                className='rounded-full bg-green-500 px-4 py-2 text-black'
              >
                View Details
              </a>
            </div>
          </div>
        </div>
        <div className='mb-10 w-full px-4 lg:mb-0 lg:w-1/2'>
          <div className='flex flex-wrap'>
            {projectStats.map(({ count, title }, index) => (
              <div
                key={title}
                className={`bg-black-500 ivory w-1/2 p-6 ${
                  index === 0
                    ? ' border-b-4 border-r-4 border-green-500 '
                    : index === 3
                    ? 'border-l-4 border-t-4 border-green-500'
                    : ''
                }`}
              >
                <span>{title}</span>
                <p className='mb-2 mt-4 text-3xl font-bold'>{count}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutUs;
