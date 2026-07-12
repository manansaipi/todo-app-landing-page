import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ExternalLink } from 'lucide-react';
import PhoneMockup from './PhoneMockup';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 bg-white">
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-slate-900">
            Master Your Day With <br/>
            <span className="text-slate-900">Smart Tasks</span> & <br/>
            <span className="text-slate-900">Location tracking</span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed font-light">
            Boost your productivity through structured planning, location tracking, and smart notifications. Built entirely from scratch with Flutter and SQFLite.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://github.com/manansaipi/ToDo-List-Mobile-Application" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 hover:bg-black text-white rounded-2xl font-semibold transition-all duration-300 shadow-xl"
            >
              <ExternalLink className="w-5 h-5" />
              View on GitHub
            </a>
            <a 
              href="#features" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-slate-200 hover:bg-slate-50 text-slate-900 rounded-2xl font-semibold transition-all duration-300 shadow-sm"
            >
              Explore Features
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:h-[700px] flex items-center justify-center"
        >
          {/* Main floating phone */}
          <div className="animate-float relative z-20">
            <PhoneMockup imageSrc="/doc/home.png" alt="App Home Screen" />
          </div>
          
          {/* Secondary phone behind */}
          <div className="absolute top-10 right-0 lg:-right-10 opacity-60 z-10 scale-90 blur-[2px] hidden md:block" style={{ transform: 'rotate(10deg)' }}>
            <PhoneMockup imageSrc="/doc/see-map.png" alt="Map View" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
