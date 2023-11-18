import React from 'react';

import { CardDemo } from '../layout/cards';
import Carousel from '../layout/carousel';
import Footer from '../layout/footer';
import { NavigationBar } from '../layout/NavigationBar';
import { Button } from '../ui/button';

export const classNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(' ');
};

const Example = () => {
  return (
    <div className='bg-gray-800'>
      <NavigationBar />
      <Carousel />
      <CardDemo />
      <Button> Sreejith </Button>
      <Footer />
    </div>
  );
};

export default Example;
