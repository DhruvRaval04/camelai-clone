// components/AdvancedAnimatedGradient.js
'use client';
import { motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';

export default function AdvancedAnimatedGradient({ children }) {
  const controls = useAnimationControls();
  
  useEffect(() => {
    const animateGradient = async () => {
      while (true) {
        await controls.start({
          backgroundPosition: ['0% 50%', '100% 50%'],
          transition: { duration: 10, ease: 'linear' }
        });
        await controls.start({
          backgroundPosition: ['100% 50%', '0% 50%'],
          transition: { duration: 10, ease: 'linear' }
        });
      }
    };
    
    animateGradient();
  }, [controls]);
  
  return (
    <motion.div
      animate={controls}
      className="min-h-screen w-full relative overflow-hidden"
      style={{
        background: 'linear-gradient(-45deg, #4a1259, #7e2553, #9e2b25, #4a1259)',
        backgroundSize: '400% 400%',
      }}
    >
      {children}
    </motion.div>
  );
}
