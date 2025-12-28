import React from 'react';
import { ChevronDown } from 'lucide-react';

const WhyFoodpanda: React.FC = () => {
  return (
    <div className="w-full bg-gray-50">
      <div className="w-full bg-fp-pink h-48 flex items-center justify-center relative px-4">
        <div className="absolute top-4 right-4 md:right-8 lg:right-16">
            <button className="text-white flex items-center gap-1 text-sm font-medium hover:opacity-80">
                Language <ChevronDown size={16} />
            </button>
        </div>
        <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight text-center">
          pandapurpose
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-24">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
            
            {/* Left Image */}
            <div className="w-full md:w-1/2">
                <div className="rounded-[2.5rem] overflow-hidden shadow-xl relative aspect-[4/3] group">
                    {/* Using a food container related image to match the context */}
                    <img 
                        src="https://images.unsplash.com/photo-1595475207225-428b62bda831?q=80&w=2000&auto=format&fit=crop" 
                        alt="Reusable food containers" 
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                </div>
            </div>

            {/* Right Content */}
            <div className="w-full md:w-1/2">
                <h2 className="text-3xl md:text-5xl font-bold text-fp-pink mb-6 leading-[1.15]">
                    We Believe In <br/> Purposeful Work
                </h2>
                
                <p className="text-gray-900 text-base md:text-lg leading-relaxed mb-10 font-medium">
                    At foodpanda, our aim is to get 1% better everyday. We are committed to
                    driving progress while caring for our communities and protecting our
                    planet. Download our 2022 social impact info - pandapurpose - below.
                </p>

                <div className="relative inline-block mt-6">
                    {/* Decorative Panda Peeking Illustration */}
                    <div className="absolute -top-12 left-8 w-16 h-14 z-10 pointer-events-none">
                        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
                            <path d="M20,60 Q10,20 50,10 Q90,20 80,60" fill="#fff" stroke="#333" strokeWidth="3" />
                            <circle cx="35" cy="40" r="5" fill="#333" />
                            <circle cx="65" cy="40" r="5" fill="#333" />
                            <ellipse cx="50" cy="50" rx="6" ry="4" fill="#333" />
                            <circle cx="20" cy="20" r="10" fill="#333" />
                            <circle cx="80" cy="20" r="10" fill="#333" />
                        </svg>
                    </div>
                    
                    <button className="bg-fp-pink text-white px-12 py-3.5 rounded-full font-bold text-sm tracking-[0.15em] hover:bg-pink-700 transition shadow-lg flex items-center justify-center uppercase relative overflow-hidden group">
                        <span className="relative z-10">Download</span>
                        <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                    </button>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default WhyFoodpanda;