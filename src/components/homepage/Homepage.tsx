import Image from 'next/image';
import React from 'react';

import Section from '@/components/layout/Section';

const Homepage = () => {
  return (
    <div className='bg-gray-800'>
      {/* Homepage Components shall be added here based on the order defined in UI/UX design */}
      <Section
        title='Your Title'
        subtitle='Your Subtitle'
        className='bg-gray-900 text-white'
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
          dolor sint. Illo hic dolores aspernatur expedita atque perspiciatis
          culpa necessitatibus exercitationem commodi corrupti quam eius
          repudiandae accusamus rem explicabo, quia at tempore minima rerum
          debitis quas, deserunt laboriosam dolore. Quasi?
        </p>
        <Image src='./' alt='Your Image' width={100} height={100} />
      </Section>
    </div>
  );
};

export default Homepage;
