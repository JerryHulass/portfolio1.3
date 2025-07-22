import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const ScrollProgressIndicator = () => {
  const scrollY = useMotionValue(0);
  const [scrollHeight, setScrollHeight] = useState(1); // prevent divide-by-zero

  useEffect(() => {
    const updateScrollHeight = () => {
      const { scrollHeight, clientHeight } = document.documentElement;
      setScrollHeight(scrollHeight - clientHeight);
    };

    updateScrollHeight();
    window.addEventListener('resize', updateScrollHeight);
    return () => window.removeEventListener('resize', updateScrollHeight);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  const scrollProgress = useTransform(scrollY, [0, scrollHeight], [0, 100]);

  return (
    <div className="fixed top-[50svh] right-[2%] -translate-y-1/2 w-1.5 h-[100px] rounded-full bg-gray-300 overflow-hidden z-50">
      <motion.div
        className="w-full bg-[#B22222] rounded-full h-full"
        style={{ height: scrollProgress }}
      />
    </div>
  );
};

export default ScrollProgressIndicator;
