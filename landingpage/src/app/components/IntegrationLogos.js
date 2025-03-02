// components/IntegrationLogos.js
"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function IntegrationLogos() {
  const topRowLogos = [
    { name: 'Excel', src: '/logos/excel.png' },
    { name: 'Power BI', src: '/logos/power-bi.png' },
    { name: 'Postgres', src: '/logos/postgres.png' },
    { name: 'Salesforce', src: '/logos/salesforce.png' },
    { name: 'Tableau', src: '/logos/tableau.png' },
    { name: 'HubSpot', src: '/logos/hubspot.png' },
    { name: 'LinkedIn', src: '/logos/linkedin.png' },
    // Duplicate logos to ensure continuous scrolling
    { name: 'Excel', src: '/logos/excel.png' },
    { name: 'Power BI', src: '/logos/power-bi.png' },
    { name: 'Postgres', src: '/logos/postgres.png' },
    { name: 'Salesforce', src: '/logos/salesforce.png' },
    { name: 'Tableau', src: '/logos/tableau.png' },
    { name: 'HubSpot', src: '/logos/hubspot.png' },
    { name: 'LinkedIn', src: '/logos/linkedin.png' }
  ];

  const bottomRowLogos = [
    { name: 'LinkedIn', src: '/logos/linkedin.png' },
    { name: 'HubSpot', src: '/logos/hubspot.png' },
    { name: 'Tableau', src: '/logos/tableau.png' },
    { name: 'Salesforce', src: '/logos/salesforce.png' },
    { name: 'Postgres', src: '/logos/postgres.png' },
    { name: 'Power BI', src: '/logos/power-bi.png' },
    { name: 'Excel', src: '/logos/excel.png' },
    // Duplicate logos to ensure continuous scrolling
    { name: 'LinkedIn', src: '/logos/linkedin.png' },
    { name: 'HubSpot', src: '/logos/hubspot.png' },
    { name: 'Tableau', src: '/logos/tableau.png' },
    { name: 'Salesforce', src: '/logos/salesforce.png' },
    { name: 'Postgres', src: '/logos/postgres.png' },
    { name: 'Power BI', src: '/logos/power-bi.png' },
    { name: 'Excel', src: '/logos/excel.png' },
  ];
 
  
  return (
    <div className="py-8 sm:py-12 md:py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top row - scrolling left */}
        <div className="flex overflow-hidden mb-4 sm:mb-8">
          <motion.div 
            className="flex space-x-4 sm:space-x-8"
            animate={{ x: [0, '-50%'] }}
            transition={{ 
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear"
            }}
          >
            {topRowLogos.map((logo, index) => (
              <div 
                key={index} 
                className="bg-black/30 p-2 sm:p-4 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white hover:scale-110 cursor-pointer"
              >
                <div className="relative w-10 h-10 sm:w-16 sm:h-16">
                  <Image
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Bottom row - scrolling right */}
        <div className="flex overflow-hidden mb-4 sm:mb-8">
          <motion.div 
            className="flex space-x-4 sm:space-x-8"
            animate={{ x: ['-50%', 0] }}
            transition={{ 
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear"
            }}
          >
            {bottomRowLogos.map((logo, index) => (
              <div 
                key={index} 
                className="bg-black/30 p-2 sm:p-4 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white hover:scale-110 cursor-pointer"
              >
                <div className=" relative w-10 h-10 sm:w-16 sm:h-16">
                  <Image
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        
      </div>
    </div>
  );
}
