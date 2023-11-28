import React from 'react';

import Footer from '../layout/Footer';
import AboutUs from '../section/AboutUs';
import OurServices from '../section/OurServices';
import Products from '../section/Products';
import WhyChooseUs from '../section/WhyChooseUs';
import Navbar from '../ui/navbar';

const Homepage = () => {
  return (
    <main className='bg-gray-800'>
      {/* Homepage Components shall be added here based on the order defined in UI/UX design */}
      <Navbar />
      <AboutUs />
      <WhyChooseUs />
      <OurServices />
      <Products />
      <Footer />
    </main>
  );
};

export default Homepage;
