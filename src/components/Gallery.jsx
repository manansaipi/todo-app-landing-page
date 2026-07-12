import React from 'react';

const screenshots = [
  { src: '/doc/get-start.png', alt: 'Get Started' },
  { src: '/doc/wake-up.png', alt: 'Wake Up Time' },
  { src: '/doc/sleep.png', alt: 'Sleep Time' },
  { src: '/doc/add-loc.png', alt: 'Add Location' },
  { src: '/doc/task-created.png', alt: 'Task Created' },
  { src: '/doc/update-task.png', alt: 'Update Task' },
  { src: '/doc/complete.png', alt: 'Complete Task' },
  { src: '/doc/set-time.png', alt: 'Set Time' },
  { src: '/doc/detail-task.png', alt: 'Detail Task' },
  { src: '/doc/delete-task.png', alt: 'Delete Task' },
];

const Gallery = () => {
  // Duplicate array for seamless infinite marquee effect
  const doubleScreenshots = [...screenshots, ...screenshots];

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">Every Screen, <span className="text-slate-900">Crafted With Care</span></h2>
      </div>
      
      {/* Infinite scrolling marquee container */}
      <div className="relative w-full overflow-hidden flex flex-col justify-center">
        <div className="flex animate-marquee w-[max-content] gap-8 px-4 items-center">
          {doubleScreenshots.map((screen, index) => (
            <div 
              key={index}
              className="flex-none w-[220px] rounded-[2rem] overflow-hidden border-[6px] border-black shadow-xl bg-black"
            >
              <img 
                src={screen.src} 
                alt={screen.alt} 
                className="w-full h-auto rounded-xl"
              />
            </div>
          ))}
        </div>
        
        {/* Gradient fades on left and right for seamless look */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent"></div>
      </div>
    </section>
  );
};

export default Gallery;
