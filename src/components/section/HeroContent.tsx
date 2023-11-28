import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

import Section from '@/components/layout/Section';

const HeroContent = () => {
  return (
    <Section className='text-green-400'>
      <span className='ivory my-2'>ADRIG AI TECHNOLOGIES</span>
      <h1 className='text-xl font-bold'>
        We are {/* @ts-ignore */}
        <ReactTypingEffect
          text={[
            'architects',
            'designers',
            'developers',
            'creators',
            'innovators',
          ]}
          eraseDelay={3000}
          speed={30}
        />{' '}
        of your {/*@ts-ignore*/}
        <ReactTypingEffect
          typingDelay={3000}
          text={[
            'business ideas',
            'AI applications',
            'projects',
            'games',
            'website',
          ]}
          eraseDelay={6000}
          speed={30}
        />
      </h1>
    </Section>
  );
};

export default HeroContent;
