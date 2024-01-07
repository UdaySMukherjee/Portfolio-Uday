import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// icons
import { FaQuoteLeft } from 'react-icons/fa';

// next image
import Image from 'next/image';

const testimonialSlider = [
  // Replace the following objects with your actual data
  {
    image: '/iema.jpg',
    name: 'IEMA Research & Development PVT. LTD.',
    position: 'Drones and Robotics Intern',
    message: 'Vision and Sensors Interface. Worked with an NHS Project Implementing RPA for Patient Data Management.',
  },
  {
    image: '/ceds.png',
    name: 'Center of Excellence and Data Science',
    position: 'Team Member',
    message: 'Currently doing projects on BCI and ARVR.',
  },
  {
    image: '/iedc.png',
    name: 'Innovation and Entrepreneurship Development Cell',
    position: 'Inventory Team Lead & Robotics Domain Lead',
    message: 'Did projects on IoT, and Drones',
  },
];

const TestimonialSlider = () => {


  return (
    <Swiper className='h-[400px]'>
      {testimonialSlider.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
              {/* avatar, name, position */}
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center 
              items-center relative mx-auto xl:mx-0'>
                <div className='flex flex-col justify-center text-center'>
                  {/* avatar */}
                  <div className='mb-2 mx-auto'>
                    <Image src={person.image} width={100} height={100} alt='' />
                  </div>
                  {/* name */}
                  <div className='text-lg'>{person.name}</div>
                  {/* position */}
                  <div className='text-[12px] uppercase font-extralight tracking-widest'>
                    {person.position}
                  </div>
                </div>
              </div>
              {/* quote and Message */}
              <div className='flex-1 flex flex-col justify-center before:w-[1px]
              xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-
              [200px] relative xl:pl-20'>
                {/* quote icon */}
                <div className='mb-4'>
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto
                  md:mx-0' />
                </div>
                {/* message */}
                <div className='xl:text-lg text-center md:text-left text-[24px] '>
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
