import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  hidden: {
    opacity: 0,
    y: '20px',
  },
};

const SectionWrapper = ({ children }) => {
  const control = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      control.start('visible');
    }
    // else {
    //   control.start('hidden');
    // }
  }, [control, inView]);

  return (
    <motion.div
      style={{
        position: 'relative',
      }}
      ref={ref}
      variants={variants}
      initial='hidden'
      animate={control}
    >
      {children}
    </motion.div>
  );
};

export default SectionWrapper;
