import React from 'react';

const articles = [
  {
    id: 1,
    date: "Friday, 12 July 2024",
    category: "COMPANY UPDATE",
    title: "pandapurpose 2023: Delivering with purpose to local communities across...",
    image: "/assets/home/a1.jpg",
    hasDescription: false
  },
  {
    id: 2,
    date: "Thursday, 20 June 2024",
    category: "COMPANY UPDATE",
    title: "Building a Better Workplace: foodpanda’s Mental Health Initiatives",
    image: "/assets/home/a2.png",
    hasDescription: false
  },
  {
    id: 3,
    date: "Friday, 03 May 2024",
    category: "COMPANY UPDATE",
    title: "Our Office Space",
    description: "Take a step into our APAC Headquarters! Ever wondered what it is like to be a panda? Let us show you! Here at foodpanda, we’re committed to creatin...",
    image: "/assets/home/a3.jpg",
    hasDescription: true
  }
];

export default function BlogSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl md:text-[2.5rem] font-bold mb-10 text-fp-pink text-left leading-tight">
          Read more about foodpanda
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-xl border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden group">
              
              {/* Image Container with Date Overlay */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 pointer-events-none"></div>
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20">
                    <span className="text-white text-[11px] font-semibold drop-shadow-md tracking-wide">
                        {article.date}
                    </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 pb-8 flex flex-col flex-grow relative">
                <span className="text-[11px] font-bold text-fp-pink uppercase mb-3 block tracking-wider">
                  {article.category}
                </span>
                
                <h3 className="text-[1.25rem] font-medium text-gray-900 mb-3 leading-snug">
                  {article.title}
                </h3>
                
                {article.description && (
                  <p className="text-[15px] text-gray-600 leading-relaxed mb-4">
                    {article.description}
                  </p>
                )}
                
                {/* Spacer to push link to bottom */}
                <div className="flex-grow min-h-[20px]"></div>

                <div className="flex justify-end mt-auto">
                   <a href="#" className="text-[11px] font-bold text-gray-900 uppercase tracking-widest flex items-center gap-2 hover:text-fp-pink transition-colors group/link">
                     READ MORE 
                     <svg 
                        className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                     >
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                     </svg>
                   </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-fp-pink hover:bg-pink-600 text-white font-bold py-3.5 px-10 rounded-full text-xs tracking-widest uppercase shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}