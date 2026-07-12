import React from 'react';
import { motion } from 'framer-motion';

const PhoneMockup = ({ imageSrc, alt, className = '' }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`relative mx-auto border-black bg-black border-[8px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl overflow-hidden ${className}`}
    >
      <div className="w-[148px] h-[18px] bg-black top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-20"></div>
      <div className="h-[46px] w-[3px] bg-black absolute -left-[11px] top-[124px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-black absolute -left-[11px] top-[178px] rounded-l-lg"></div>
      <div className="h-[64px] w-[3px] bg-black absolute -right-[11px] top-[142px] rounded-r-lg"></div>
      
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative">
        <img 
          src={imageSrc} 
          alt={alt} 
          className="w-full h-full object-cover object-top"
        />
        {/* Subtle reflection effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none"></div>
      </div>
    </motion.div>
  );
};

export default PhoneMockup;
