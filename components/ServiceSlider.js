// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';

//next image
import Image from 'next/image';

// icons
import {
  RxCrop,
  RxArrowTopRight,
} from "react-icons/rx";

// service data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Click to View',
    pdfLink: 'https://drive.google.com/file/d/1xkQw9R99LxRci2MtzbOtPYkiG1JTksU1/view?usp=sharing', 
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      className='h-[240px] sm:h-[340px]'
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-12 flex 
            sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)]
            transition-all duration-300'>
              {/* icon */}
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              {/* title & desc */}
              <div className='mb-8'>
                <div className='mb-2 text-lg '>{item.title}</div>
                {/* <p className='max-w-[350px] leading-normal'>
                  {item.description}
                </p> */}
              </div>
              {/* clickable image and arrow */}
              <div className='text-3xl items-center'>
                <a href={item.pdfLink} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={'/Resume.png'}
                    width={1000}
                    height={200}
                    alt=''
                    className='translate-z-0 w-full h-half'
                  />
                  <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent
                  transition-all duration-300' />
                </a>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
