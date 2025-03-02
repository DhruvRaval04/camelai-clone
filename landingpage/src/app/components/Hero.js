// src/components/Hero.js
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="min-h-[100vh] flex flex-col items-center justify-center text-center px-4 pt-16 pb-8 md:py-30">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
          The AI Data Analyst
        </h1>
        <p className="text-lg sm:text-xl text-white mb-8 sm:mb-10">
          Ask questions, get instant charts and insights from your data.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 sm:mb-16">
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="#" className="w-full sm:w-auto bg-white text-black px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-gray-100 flex items-center justify-center">
              Try free
              <i className="fas fa-chevron-right ml-3"></i>
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="#" className="w-full sm:w-auto border border-white text-white px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-white/10 flex items-center justify-center">
              Book demo
              <i className="fas fa-chevron-right ml-3"></i>
            </Link>
          </motion.div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-16">
          <div className="bg-black/20 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm flex items-center">
            <span className="bg-orange-500 text-white w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded mr-2">Y</span>
            Y Combinator backed
          </div>
          <div className="bg-black/20 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm flex items-center">
            <span className="mr-2">🔒</span>
            Enterprise Security
          </div>
          <div className="bg-black/20 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm flex items-center">
            <span className="mr-2">🛡️</span>
            100% Data Privacy
          </div>
        </div>
        
        <div className="relative w-full mx-auto rounded-xl overflow-hidden shadow-2xl">
          <div style={{ 
            width: '100%',
            maxWidth: '100%', 
            margin: '0 auto',
            borderRadius: '12px',
            overflow: 'hidden'
          }}>
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/rdPeT8-iiqY"
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <Link href="https://your-destination-url.com">
                  <motion.div 
                    className="bg-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center cursor-pointer"
                    whileHover={{ scale: 1.1, boxShadow: "0px 10px 25px rgba(0,0,0,0.2)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <i className="fas fa-play text-2xl sm:text-3xl text-black"></i>
                  </motion.div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
