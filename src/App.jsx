import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Hero />
      <Features />
      <Gallery />
      
      <footer className="py-12 text-center border-t border-slate-200 bg-slate-50">
        <p className="text-slate-500 mb-4">
          Built with Flutter, SQFLite, and Google Maps API.
        </p>
        <p className="text-sm text-slate-600">
          Created by <a href="https://www.linkedin.com/in/abdulmannansaipi/" target="_blank" rel="noreferrer" className="text-slate-900 hover:text-slate-600 font-medium">Abdul Mannan Saipi</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
