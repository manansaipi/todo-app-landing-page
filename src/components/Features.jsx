import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ListTodo, Bell, Moon } from 'lucide-react';
import PhoneMockup from './PhoneMockup';

const FeatureRow = ({ title, description, icon: Icon, imageSrc, reversed = false }) => {
  return (
    <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 py-20`}>
      <motion.div 
        initial={{ opacity: 0, x: reversed ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex-1 space-y-6"
      >
        <div className="w-16 h-16 rounded-2xl glass-panel flex items-center justify-center text-slate-900 mb-6 border-slate-200">
          <Icon className="w-8 h-8" />
        </div>
        <h2 className="text-4xl font-bold text-slate-900">{title}</h2>
        <p className="text-xl text-slate-600 leading-relaxed font-light">{description}</p>
      </motion.div>
      <div className="flex-1 flex justify-center">
        <PhoneMockup imageSrc={imageSrc} alt={title} />
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-24 relative bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Powerful Features Built For <span className="text-slate-900">Productivity</span></h2>
          <p className="text-lg text-slate-600 font-light">Everything you need to manage your day, beautifully designed in one seamless application.</p>
        </div>

        <FeatureRow 
          title="Location-Based Tracking" 
          description="Never forget a task when you're nearby. Integrate Google Maps to attach specific locations to each task and view them all plotted on an interactive map."
          icon={MapPin}
          imageSrc="/doc/see-map.png"
        />

        <FeatureRow 
          title="Intuitive Task Management" 
          description="Create tasks with rich details including titles, descriptions, start/end times, and dates. Easily view your day on a beautiful timeline view aligned with your schedule."
          icon={ListTodo}
          imageSrc="/doc/add-task-form.png"
          reversed
        />

        <FeatureRow 
          title="Smart Notifications" 
          description="Set your wake-up and sleep times to customize reminder windows. Receive timely, non-intrusive notifications for all your scheduled tasks."
          icon={Bell}
          imageSrc="/doc/notification.png"
        />

        <FeatureRow 
          title="Comfortable Dark Mode" 
          description="Easy on the eyes, day or night. Toggle dark mode from the settings page for a comfortable viewing experience no matter the environment."
          icon={Moon}
          imageSrc="/doc/dark-mode.png"
          reversed
        />
      </div>
    </section>
  );
};

export default Features;
