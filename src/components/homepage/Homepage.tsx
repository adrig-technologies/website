import React from 'react';

// import Footer from '../layout/Footer';
// import AboutUs from '../section/AboutUs';
import HeroContent from '../section/HeroContent';
import LoadingPage from '../section/LoadingPage';
// import OurServices from '../section/OurServices';
// import Products from '../section/Products';
// import WhyChooseUs from '../section/WhyChooseUs';

const Homepage = () => {
  return (
    <main className='bg-black'>
      {/* Homepage Components shall be added here based on the order defined in UI/UX design */}
      <HeroContent />
      <LoadingPage />
      {/* <AboutUs />
      <WhyChooseUs />
      <OurServices />
      <Products />
      <Footer /> */}
    </main>
  );
};

export default Homepage;
