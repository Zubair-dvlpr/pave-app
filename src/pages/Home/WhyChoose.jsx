import React from 'react';
import { motion } from 'framer-motion';
import choose from '../../assets/images/Choose.webp';
import Checkbox from '../../assets/Icons/Checkbox';
const WhyChoose = () => {
  return (
    <div className="bg-white py-28">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side Content */}
          <div className="space-y-5">
            <h2 className="text-4xl md:text-5xl font-bold leading-[60px] text-gray-800">Why Choose
              <br /> <span className='text-[#F8CB3E]'>Pave-N-Save?</span> </h2>

            {/* List of Reasons */}
            <ul className="list-disc text-xl pl-5 space-y-2 text-gray-700">
              <li> Innovative AI-driven quote system </li>
              <li> Experienced and professional team </li>
              <li> High-quality materials and craftsmanship </li>
              <li> Affordable pricing with no hidden fees </li>
            </ul>

            {/* Paragraph */}
            <p className="text-[#000] text-xl opacity-80">
            Pave-N-Save’s innovative AI system provides fast and accurate quotes. No need for on-site visits—get your estimate in minutes.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="relative w-full  flex items-center justify-center bg-gray-100">
            {/* Background Image */}
            <div className="w-full ">
              <img
                src={choose} // Replace with actual image
                alt="Pave-N-Save Services"
                className="w-full  object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Icon 1 - Top Left */}
            <motion.div
              className="absolute top-10 md:-left-10 left-0"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', duration: 1 }}
              viewport={{ once: true }}
            >
              <ul className='bg-white sm:p-3 p-1 shadow-md'>
                <li className='flex gap-2 sm:text-xl text-xs text-[#000] items-center'>
                  <Checkbox />
                  Driveway Boundaries Analyzed
                </li>
              </ul>
            </motion.div>

            {/* Icon 2 - Bottom Left */}
            <motion.div
              className="absolute bottom-5 left-5"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', duration: 1 }}
              viewport={{ once: true }}
            >
              <ul className='bg-white sm:p-3 p-1 shadow-md'>
                <li className='flex gap-2 sm:text-xl text-xs text-[#000] items-center'>
                  <Checkbox />
                  Driveway Boundaries Analyzed
                </li>
              </ul>
            </motion.div>

            {/* Icon 3 - Right Center */}
            <motion.div
              className="absolute right-0 top-1/2 transform -translate-y-1/2"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', duration: 1 }}
              viewport={{ once: true }}
            >
             <ul className='bg-white sm:p-3 p-1 shadow-md'>
                <li className='flex gap-2 sm:text-xl text-xs text-[#000] items-center'>
                  <Checkbox />
                  Driveway Boundaries Analyzed
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
