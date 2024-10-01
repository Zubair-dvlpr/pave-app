import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import customer1 from '../../assets/images/customer1.png';
import customer2 from '../../assets/images/customer2.png';
import customer3 from '../../assets/images/customer3.png';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

// Sample testimonial data
const testimonials = [
  {
    name: 'John Doe',
    city: 'New York',
    testimonial: '"Pave-N-Save made getting a quote so easy, and the final result was fantastic!" Fast, professional, and affordable. Highly recommend Pave-NSave!',
    rating: 5,
    imgSrc: customer1,
  },
  {
    name: 'John Doe',
    city: 'New York',
    testimonial: '"Pave-N-Save made getting a quote so easy, and the final result was fantastic!" Fast, professional, and affordable. Highly recommend Pave-NSave!',
    rating: 5,
    imgSrc: customer2,
  },
  {
    name: 'Jane Smith',
    city: 'Los Angeles',
    testimonial: '"Pave-N-Save made getting a quote so easy, and the final result was fantastic!" Fast, professional, and affordable. Highly recommend Pave-NSave!',
    rating: 4,
    imgSrc: customer3,
  },
  {
    name: 'John Doe',
    city: 'New York',
    testimonial: '"Pave-N-Save made getting a quote so easy, and the final result was fantastic!" Fast, professional, and affordable. Highly recommend Pave-NSave!',
    rating: 5,
    imgSrc: customer2,
  },
];

const TestimonialSlider = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-[1320px] relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl text-center sm:text-left font-bold text-[#000] mb-8">What Our Customers Say</h2>

        {/* Slider for Desktop (3 slides) */}
        <div className="hidden lg:block"> {/* Show only on medium and larger screens */}
          <Swiper
            slidesPerView={3} // Show 3 slides on desktop
            spaceBetween={30}
            pagination={{
              clickable: true,
              el: '.swiper-pagination-desktop', // Desktop pagination container
              renderBullet: (index, className) => {
                return `<span class="${className}"></span>`; // Custom bullet rendering
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="flex flex-col  p-6 bg-white rounded-lg">
                <img src={testimonial.imgSrc} alt={testimonial.name} className="w-16 h-16 rounded-full mb-4" />
                <p className="text-gray-700 mb-4 text-left">"{testimonial.testimonial}"</p>
                <div className="flex justify-between items-center">
                  <div className='flex flex-col'>
                    <h4 className="font-bold text-[#352E2E] text-lg">{testimonial.name}</h4>
                    <span className="text-gray-500">{testimonial.city}</span>
                  </div>
                  <div className="flex mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .587l3.668 7.428 8.233 1.195-5.951 5.475 1.406 8.214L12 18.897l-7.356 3.868 1.406-8.214-5.951-5.475 8.233-1.195z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination-desktop mt-4"></div> {/* Pagination container for desktop */}
        </div>

        {/* Slider for Tablet and Mobile (1 slide) */}
        <div className="lg:hidden"> {/* Show only on smaller screens */}
          <Swiper
            slidesPerView={1} // Show 1 slide on tablet and mobile
            spaceBetween={30}
            pagination={{
              clickable: true,
              el: '.swiper-pagination-mobile', // Mobile pagination container
              renderBullet: (index, className) => {
                return `<span class="${className}"></span>`;
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="flex flex-col p-6 bg-white rounded-lg shadow-md">
                <img src={testimonial.imgSrc} alt={testimonial.name} className="w-16 h-16 rounded-full mb-4" />
                <p className="text-gray-700 text-left mb-4">"{testimonial.testimonial}"</p>
                <div className="flex justify-between items-center">
                  <div className='flex flex-col'>
                    <h4 className="font-bold text-[#352E2E] text-lg">{testimonial.name}</h4>
                    <span className="text-gray-500">{testimonial.city}</span>
                  </div>
                  <div className="flex mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .587l3.668 7.428 8.233 1.195-5.951 5.475 1.406 8.214L12 18.897l-7.356 3.868 1.406-8.214-5.951-5.475 8.233-1.195z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Dots for tablet and mobile */}
          <div className="swiper-pagination-mobile mt-4"></div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
