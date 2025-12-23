import React from 'react';

const stats = [
  { value: '7,000 +', label: 'EMPLOYEES' },
  { value: '400 +', label: 'CITIES' },
  { value: '50 +', label: 'NATIONALITIES' },
  { value: '20 +', label: 'LANGUAGES' },
];

export default function StatsSection() {
  return (
    <section className="py-20 md:py-24 bg-[#ffb2bb]">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Section Title */}
        <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#333333] text-center mb-16 leading-tight">
          A diverse and high-performing team
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 w-full lg:w-auto max-w-2xl shrink-0">
            {stats.map((stat, idx) => (
              <div key={idx} className="relative group">
                {/* Outer Border Container */}
                <div className="border-[1.5px] border-white/80 rounded-[2rem] p-1.5 transition-transform hover:-translate-y-1 duration-300">
                  {/* Inner White Card */}
                  <div className="bg-white rounded-[1.6rem] py-10 px-4 md:px-10 flex flex-col items-center justify-center h-full min-w-[160px] md:min-w-[200px] aspect-square shadow-sm">
                    <span className="text-3xl md:text-[2.5rem] font-extrabold text-fp-pink mb-3 leading-none">
                      {stat.value}
                    </span>
                    <span className="text-sm md:text-[0.9rem] font-bold text-fp-pink uppercase tracking-widest">
                      {stat.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Panda Mascot */}
          <div className="relative w-full max-w-[300px] md:max-w-[380px] lg:max-w-[420px] flex justify-center lg:justify-start mt-8 lg:mt-0">
             {/* Using a placeholder that matches the 'standing waving' pose closely */}
             <img 
               src="/assets/home/paupau.svg" 
               alt="Pau-Pau Waving" 
               className="w-full h-auto object-contain drop-shadow-2xl"
             />
          </div>

        </div>
      </div>
    </section>
  );
}