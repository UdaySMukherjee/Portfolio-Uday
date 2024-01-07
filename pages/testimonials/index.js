//components
import TestimonialSlider from "../../components/TestimonialSlider";

//framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Testimonials = () => {
  return (
  <div className="h-full bg-primary/30 py-32 text-center">
    <div className="container mx-auto h-full flex flex-col justify-center">
      {/* title */}
      <motion.h2 
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="h2 mb-8 xl:mb-0"
      >
        Positions and <span className="text-accent">Responsibilities.</span>
        
      </motion.h2>
      <motion.div 
      variants={fadeIn('up', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
      className="container mx-auto flex justify-center text-gray-500">Swipe to look more</motion.div>
      {/* slider */}
      <motion.div 
        variants={fadeIn('up', 0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="h2 mb-8 xl:mb-0"
      >
        <TestimonialSlider />
      </motion.div>
    </div>
  </div>
  );
};

export default Testimonials;
