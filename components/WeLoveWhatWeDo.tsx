import React from 'react';

export default function WeLoveWhatWeDo() {
  return (
    <section className="py-20 md:py-28 bg-[#EFF3F6] overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                
                {/* Text Content */}
                <div className="w-full lg:w-1/2 relative z-10 pr-0 lg:pr-10">
                    <h2 className="text-3xl md:text-[2.6rem] font-bold text-fp-pink mb-8 leading-tight">
                        We love what we do
                    </h2>
                    <div className="text-gray-800 text-[17px] md:text-lg leading-relaxed mb-16 text-justify lg:text-left font-normal">
                         <p>
                            foodpanda is the largest food and grocery delivery platform in Asia, outside of China. Operating in more than 400 cities across 11 markets, we continue to expand and grow in our core food delivery business, as well as in new verticals like grocery deliveries, with a strong tech infrastructure at our core. From our restaurants-partners, cloud kitchens and cloud grocery stores — foodpanda is just one tap away, getting everything you need into your hands quickly and conveniently!
                         </p>
                    </div>

                    {/* Button with Peeking Panda */}
                    <div className="relative inline-block mt-2">
                        {/* Panda Peeking SVG */}
                        <div className="absolute -top-[45px] left-1 w-16 h-14 z-0">
                             <svg viewBox="0 0 100 85" className="w-full h-full drop-shadow-sm">
                                {/* Left Ear */}
                                <circle cx="20" cy="30" r="14" fill="#333" />
                                {/* Right Ear */}
                                <circle cx="80" cy="30" r="14" fill="#333" />
                                {/* Head */}
                                <ellipse cx="50" cy="55" rx="40" ry="32" fill="white" />
                                {/* Left Eye Patch */}
                                <ellipse cx="32" cy="50" rx="10" ry="8" fill="#333" transform="rotate(-15 32 50)" />
                                {/* Right Eye Patch */}
                                <ellipse cx="68" cy="50" rx="10" ry="8" fill="#333" transform="rotate(15 68 50)" />
                                {/* Left Eye White */}
                                <circle cx="34" cy="48" r="2.5" fill="white" />
                                {/* Right Eye White */}
                                <circle cx="66" cy="48" r="2.5" fill="white" />
                                {/* Nose */}
                                <ellipse cx="50" cy="62" rx="4" ry="3" fill="#333" />
                                {/* Cheeks */}
                                <circle cx="22" cy="62" r="5" fill="#FFC0CB" opacity="0.6" />
                                <circle cx="78" cy="62" r="5" fill="#FFC0CB" opacity="0.6" />
                             </svg>
                        </div>

                        <button className="relative z-10 bg-fp-pink hover:bg-pink-600 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 text-sm tracking-widest uppercase">
                            Find out more
                        </button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full lg:w-1/2 relative">
                    {/* Pink Background Blob - positioned to match screenshot */}
                    <div className="absolute -top-10 -right-20 lg:-right-40 w-[120%] h-[115%] bg-[#FFC2D1] rounded-[3rem] -z-10"></div>
                    
                    {/* Image Container */}
                    <div className="rounded-[2.5rem] overflow-hidden shadow-sm relative z-0 aspect-[4/3] bg-gray-200">
                         {/* Using a placeholder that resembles a team photo inside an office to match the context */}
                        <img 
                            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
                            alt="foodpanda team" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}