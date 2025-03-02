// src/components/Navbar.js
'use client';
import Link from 'next/link';
import Image from 'next/image';
import mainLogo from '../assets/main-camelai.webp';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="fixed w-full z-10 py-3 md:py-4 bg-black/20 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image src={mainLogo} alt="CamelAI Logo" width={120} height={40} className="w-24 sm:w-28 md:w-32" />
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <NavLink href="#" text="Blog" />
            <NavLink href="#" text="Pricing" />
            <NavLink href="#" text="Log in" />
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-3 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              <Link href="#" className="text-white hover:text-gray-200 py-2">Blog</Link>
              <Link href="#" className="text-white hover:text-gray-200 py-2">Pricing</Link>
              <Link href="#" className="text-white hover:text-gray-200 py-2">Log in</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// NavLink component with hover animations
function NavLink({ href, text }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link 
      href={href} 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.span 
        className="text-white inline-block"
        animate={{ y: isHovered ? -2 : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {text}
      </motion.span>
      <motion.div 
        className="absolute bottom-0 left-0 h-0.5 bg-white"
        initial={{ width: 0 }}
        animate={{ width: isHovered ? '100%' : 0 }}
        transition={{ duration: 0.2 }}
      />
    </Link>
  );
}
