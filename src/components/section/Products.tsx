// ProductSection.tsx
import Image from 'next/image';
import React, { useState } from 'react';

// Import your Carousel component
import Section from '@/components/layout/Section';

// Sample data for products
const productsData = [
  {
    title: 'Product 1',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, dolor sint. Illo hic dolores aspernatur expedita atque perspiciatis culpa necessitatibus exercitationem commodi corrupti quam eius repudiandae accusamus rem explicabo, quia at tempore minima rerum debitis quas, deserunt laboriosam dolore. Quasi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, dolor sint. Illo hic dolores aspernatur expedita atque perspiciatis culpa necessitatibus exercitationem commodi corrupti quam eius repudiandae accusamus rem explicabo, quia at tempore minima rerum debitis quas, deserunt laboriosam dolore. Quasi?',
    imageUrl: '/images/product1.jpg', // Replace with the actual path to your image
  },
  {
    title: 'Product 2',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, dolor sint. Illo hic dolores aspernatur expedita atque perspiciatis culpa necessitatibus exercitationem commodi corrupti quam eius repudiandae accusamus rem explicabo, quia at tempore minima rerum debitis quas, deserunt laboriosam dolore. Quasi?',
    imageUrl: '/images/product2.jpg', // Replace with the actual path to your image
  },
  // Add more products as needed
  {
    title: 'Product 3',
    description: 'Description for Product 1',
    imageUrl: '/images/product1.jpg', // Replace with the actual path to your image
  },
  {
    title: 'Product 4',
    description: 'Description for Product 2',
    imageUrl: '/images/product2.jpg', // Replace with the actual path to your image
  },
];

// Products component
const Products: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === productsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? productsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <Section title='PRODUCTS' className='text-white'>
      <div className='relative mt-4 flex items-center justify-center'>
        <button
          className='prev-button z-10 -mr-10 rounded-full bg-green-500 p-2'
          onClick={handlePrev}
        >
          <span className='text-2xl font-bold text-black'>←</span>
        </button>
        <div className='product-carousel w-8/9 flex space-x-4 rounded-lg bg-gray-900'>
          {productsData.map((product, index) => (
            <div
              key={index}
              className={`product-card h-120 w-96 rounded-lg ${
                index === activeIndex ? '' : 'hidden'
              }`}
            >
              <div className='relative h-60'>
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  layout='fill'
                  objectFit='cover'
                  className='rounded-md px-5'
                />
              </div>
              <div className='mt-4 text-white'>
                <h3 className='text-center text-xl font-semibold'>
                  {product.title}
                </h3>
                <p className='px-5 text-center'>{product.description}</p>
              </div>
            </div>
          ))}
          <div className='absolute bottom-2 flex space-x-2'>
            {productsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 rounded-full ${
                  index === activeIndex
                    ? 'h-3 w-6 scale-125 transform rounded-full bg-green-500'
                    : 'bg-green-500'
                }`}
              />
            ))}
          </div>
        </div>
        <button
          className='next-button z-10 -ml-8 rounded-full bg-green-500 p-2'
          onClick={handleNext}
        >
          <span className='text-2xl font-bold text-black'>→</span>
        </button>
      </div>
    </Section>
  );
};

export default Products;
