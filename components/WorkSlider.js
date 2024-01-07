// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'Dataset Generator',
          path: '/DatasetGenerator.png',
        },
        {
          title: 'Pick and Place Robot',
          path: '/Like &.png',
        },
        {
          title: 'Atmospheric Water Harvestor',
          path: '/AWH.png',
        },
        {
          title: 'AERO',
          path: '/aero.png',
        },
      ],
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react'

// import swiper styles
import 'swiper/css';

//icons
import { BsArrowRight } from 'react-icons/bs';

// next image
import Image from 'next/image';

const WorkSlider = () => {
  const projectLinks = [
    'https://youtu.be/TVqmIPIePm0?si=Ikf2SnXDtWnRksj1',
    'https://youtu.be/oq3xvIfDO6w?si=3lev1Nrf2MPiYSEE',
    'https://youtu.be/rxJzqlLHSnc?si=Mu1VKUxn1xmr7mLs',
    'https://youtu.be/B2i3bsM8I_c?si=yEVH8rngAyTAyIUf',
  ];
  return (
    <Swiper
      spaceBetween={10}
      className='h-[280px] sm:h-[480px]'
    >
      {workSlides.slides.map((slide, slideIndex) => {
        return (
          <SwiperSlide key={slideIndex}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index) => {
                const projectLink = projectLinks[index]; // Fix here - use 'index' instead of 'imageIndex'
                return (
                  <a key={index} href={projectLink} target="_blank" rel="noopener noreferrer">
                    <div 
                      className='relative rounded-lg overflow-hidden flex items-center 
                      justify-center group'
                      key={index}
                    >
                      <div className='flex items-center justify-center relative overflow-hidden
                      group'>
                        {/* image */}
                        <Image src={image.path} width={500} height={300} alt=''/>
                        {/* overflow gradient */}
                        <div className='absolute inset-0 bg-gradient-to-l
                        from-transparent via-[#c717aa] to-[#330ea3] opacity-0
                        group-hover:opacity-85 translation-all duration-700'></div>
                        {/* title */}
                        <div className='absolute bottom-0 translate-y-full
                        group-hover:-translate-y-10 group-hover:xl:-translate-y-20
                        translation-all duration-300'>
                          <div className='flex items-center gap-x-2 text-[16px] tracking-[0.2em]'>
                            {/* title part 1 */}
                            <div className='delay-100'>WATCH</div>
                            {/* title part 2 */}
                            <div className='translate-y-[500%]
                            group-hover:translate-y-0 transition-all duration-300 delay-150'>
                              PROJECT
                            </div>
                            {/* icon */}
                            <div className='text-xl translate-y-[500%]
                            group-hover:translate-y-0 transition-all duration-300 delay-200'>
                              <BsArrowRight/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
