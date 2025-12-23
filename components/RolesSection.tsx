import React from 'react';

const jobs = [
  {
    title: "Product Manager (Pickup)",
    location: "Singapore",
  },
  {
    title: "Specialist, Field Sales",
    location: "Malacca, Malaysia",
  },
  {
    title: "Specialist, Field Sales",
    location: "Johor Bahru, Malaysia",
  }
];

export default function RolesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl md:text-[2.5rem] font-bold mb-20 text-fp-pink text-left leading-tight">
          Some roles you might be interested in
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {jobs.map((job, idx) => (
            <div key={idx} className="relative mt-12 md:mt-0">
              {/* Card Container */}
              <div className="border border-fp-pink rounded-xl px-8 pt-16 pb-10 h-full flex flex-col bg-white relative">
                
                {/* Floating Logo - Centered on top border */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                   <div className="w-20 h-20 rounded-full border border-fp-pink bg-white flex flex-col items-center justify-center z-10">
                      <img src="/assets/home/logo-job.png" className='w-14 h-auto' alt="" />
                   </div>
                </div>

                {/* Star Icon */}
                <div className="absolute top-8 right-6 cursor-pointer hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-fp-pink stroke-current fill-none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>

                {/* Content */}
                <div className="mt-6 flex-grow">
                  <h3 className="text-xl font-bold text-black mb-16 leading-snug">
                    {job.title}
                  </h3>
                  
                  <div className="flex items-center gap-3 text-gray-800 mb-10">
                    <svg className="w-5 h-5 text-fp-pink flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-[15px] font-normal">{job.location}</span>
                  </div>
                </div>

                {/* Button */}
                <div className="text-center">
                  <button className="bg-fp-pink hover:bg-pink-600 text-white font-bold py-3 px-10 rounded-full text-[11px] tracking-[0.1em] uppercase shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                    Read More
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}