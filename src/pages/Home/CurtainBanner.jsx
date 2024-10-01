import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Framer Motion for smooth animation
import Curtainleft from '../../assets/images/Curtainleft.webp';
import Curtainright from '../../assets/images/Curtainright.webp';
const CurtainBanner = () => {
  const [scrollY, setScrollY] = useState(0); // State to track scroll position
  const [viewportHeight, setViewportHeight] = useState(0);
  // Update scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Get current scroll position
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate how far to move the curtains (progressive movement)
  const curtainMove = Math.min(scrollY / 5, 100); // Max move is 100px

  return (
    <section className={`bg-black-800 overflow-hidden h-screen text-white  ${scrollY > 600 ? "relative" : "fixed w-full z-30" }`} >
      {/* Left Curtain */}
      <motion.div
        className="absolute  bg-cover bg-right bg-no-repeat opacity-65  z-20 top-0 left-0 h-full w-1/2 bg-black"
        style={{ transform: `translateX(-${curtainMove}%)`, backgroundImage : `url(${Curtainleft})` }} // Move left curtain progressively
        transition={{ type: 'spring', stiffness: 100 }}
      />

      {/* Right Curtain */}
      <motion.div
        className="absolute top-0 bg-left right-0 z-20 bg-cover bg-no-repeat opacity-65   h-full w-1/2 bg-black"
        style={{ transform: `translateX(${curtainMove}%)`, backgroundImage : `url(${Curtainright})` }} // Move right curtain progressively
        transition={{ type: 'spring', stiffness: 100 }}
      />

      {/* Banner Content */}
      <div className="relative max-w-[1320px] px-3 z-10 mx-auto h-full flex items-center  ">
        <motion.div
          className=""
          initial={{ opacity: 0 }}
          animate={{ opacity: scrollY > 50 ? 1 : 1 }} // Fade in when scroll passes 50px
          transition={{ duration: 0.5 }}
        >
          <h1 className="md:text-9xl sm:text-6xl text-5xl text-left font-bold ">Transform Your Driveway with <span className="text-[#F8CB3E]"> Pave-N-Save </span> </h1>
          <p className=" text-lg text-left  mt-5 ">Precision Paving with Instant Quotes at Your Fingertips</p>
          <button className='bg-[#F8CB3E] px-16 mt-7 text-[#000] py-5 font-semibold rounded-lg transition-transform transform hover:bg-[#D6A932] hover:scale-105'>
  Get Your Free Estimate
</button>


        </motion.div>
      </div>
    </section>
  );
};

export default CurtainBanner;
