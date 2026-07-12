import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';

function App() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('autoScroll') === 'true') {
      let scrollAmount = 0;
      let scrollStep = 2;
      let isScrollingDown = true;
      let animationFrameId;

      const autoScroll = () => {
        if (isScrollingDown) {
          window.scrollBy(0, scrollStep);
          if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
            isScrollingDown = false;
            setTimeout(() => {
              animationFrameId = requestAnimationFrame(autoScroll);
            }, 1000);
            return;
          }
        } else {
          window.scrollBy(0, -scrollStep);
          if (window.scrollY <= 0) {
            isScrollingDown = true;
            setTimeout(() => {
              animationFrameId = requestAnimationFrame(autoScroll);
            }, 1000);
            return;
          }
        }
        animationFrameId = requestAnimationFrame(autoScroll);
      };
      
      setTimeout(() => {
        animationFrameId = requestAnimationFrame(autoScroll);
      }, 2000);

      return () => cancelAnimationFrame(animationFrameId);
    }
  }, []);

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
