import React from 'react';
import { Star, MapPin, ChevronDown, ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';

const JobResultCard: React.FC<{ title: string; location: string }> = ({ title, location }) => (
  <div className="bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.1)] p-6 pt-10 relative flex flex-col h-full min-h-[300px] border border-transparent hover:border-fp-pink transition-colors duration-300 group">
    
    {/* Top Logo */}
    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white p-1 rounded-full border border-gray-100 shadow-sm w-12 h-12 flex items-center justify-center group-hover:border-fp-pink transition-colors">
       <div className="w-full h-full rounded-full border border-fp-pink flex items-center justify-center">
            <span className="text-[8px] text-fp-pink font-bold text-center leading-none">food<br/>panda</span>
       </div>
    </div>

    {/* Top Right Star */}
    <button className="absolute top-4 right-4 text-fp-pink hover:text-pink-700">
      <Star size={20} />
    </button>

    {/* Content */}
    <div className="flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-gray-900 mb-2 mt-4 leading-tight">
        {title}
        </h3>
        
        <div className="mt-auto">
            <div className="flex items-center gap-2 text-gray-500 mb-6 text-sm">
                <MapPin size={16} className="text-fp-pink shrink-0" />
                <span>{location}</span>
            </div>

            <div className="flex justify-center">
                <button className="bg-fp-pink text-white font-bold py-2.5 px-8 rounded-full text-xs hover:bg-pink-700 transition uppercase tracking-wider">
                Read More
                </button>
            </div>
        </div>
    </div>
  </div>
);

const ArticleCard: React.FC<{ 
    date: string; 
    category: string; 
    title: string; 
    description: string; 
    image: string;
}> = ({ date, category, title, description, image }) => (
    <div className="flex flex-col h-full group cursor-pointer">
        <div className="relative rounded-2xl overflow-hidden aspect-video mb-6 shadow-sm">
            <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute top-4 left-4 bg-gray-900/80 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                {date}
            </div>
        </div>
        <div className="flex-1 flex flex-col">
            <span className="text-fp-pink font-bold text-xs uppercase tracking-wider mb-3">{category}</span>
            <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-fp-pink transition-colors">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">{description}</p>
            <div className="mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-900 group-hover:text-fp-pink transition-colors">
                Read More <ArrowRight size={14} />
            </div>
        </div>
    </div>
);

const JobsPage: React.FC = () => {
  const jobs = [
    { title: "Associate, Account Management", location: "Yangon, Myanmar" },
    { title: "Specialist, Logistics Performance", location: "Kuala Lumpur, Malaysia" },
    { title: "Specialist, Demand Control", location: "Taguig, Philippines" },
    { title: "Specialist, Geomatics", location: "Kuala Lumpur, Malaysia" },
    { title: "Product Manager (Pickup)", location: "Singapore" },
    { title: "Specialist, Field Sales", location: "Malacca, Malaysia" },
    { title: "Specialist, Field Sales", location: "Johor Bahru, Malaysia" },
    { title: "Specialist, Field sales", location: "Ipoh, Malaysia" },
    { title: "Specialist, Field Sales", location: "Ipoh, Malaysia" },
    { title: "Manager, Retail Media & Partnerships", location: "Bangsar South, Malaysia" },
    { title: "Lead Vendor Operations", location: "Bangsar South, Malaysia" },
    { title: "Specialist, Category & Commercial", location: "Taguig, Philippines" },
  ];

  const articles = [
    {
        date: "Friday, 12 July 2024",
        category: "COMPANY UPDATE",
        title: "pandapurpose 2023: Delivering with purpose to local communities...",
        description: "Delivering with purpose to local communities across Asia.",
        image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=800&auto=format&fit=crop"
    },
    {
        date: "Thursday, 20 June 2024",
        category: "COMPANY UPDATE",
        title: "Building a Better Workplace: foodpanda's Mental Health Initiatives",
        description: "How we are prioritizing mental wellness for our employees through various programs.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"
    },
    {
        date: "Friday, 03 May 2024",
        category: "COMPANY UPDATE",
        title: "Our Office Space",
        description: "Take a step into our APAC Headquarters! Ever wondered what it is like to be a panda? Let us show you! Here at foodpanda, we're...",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="w-full bg-white pb-20">
      
      {/* Header Section */}
      <div className="pt-12 pb-8 text-center bg-white">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Job results</h1>
        <h2 className="text-2xl font-bold text-gray-900">207 result(s)</h2>
      </div>

      {/* Filter Section */}
      <div className="bg-gray-100 py-6 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
                {['Location', 'Job Category', 'Job type', 'Time Type'].map((filter) => (
                    <div key={filter} className="relative group min-w-[200px]">
                        <button className="w-full bg-white border border-black rounded-full py-2.5 px-6 flex items-center justify-between text-sm font-medium text-gray-900 hover:bg-gray-50">
                            {filter}
                            <ChevronDown size={16} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Jobs Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {jobs.map((job, idx) => (
                <JobResultCard key={idx} title={job.title} location={job.location} />
            ))}
        </div>

        {/* Pagination */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-200 pt-8 mb-20 text-sm font-medium text-gray-500">
            <div className="mb-4 md:mb-0">
                <span className="uppercase tracking-wider mr-2 text-black font-bold">Results per page :</span>
                <span className="text-black font-bold mr-2">12</span>
                <span className="mr-2 hover:text-black cursor-pointer">24</span>
                <span className="hover:text-black cursor-pointer">48</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-black font-bold w-6 h-6 flex items-center justify-center rounded bg-gray-100">1</span>
                <span className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded cursor-pointer">2</span>
                <span className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded cursor-pointer">3</span>
                <span className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded cursor-pointer">4</span>
                <span className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded cursor-pointer">5</span>
                <span className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded cursor-pointer">6</span>
                <span className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded cursor-pointer">7</span>
                <span className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded cursor-pointer">8</span>
                <span className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded cursor-pointer">9</span>
                <span className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded cursor-pointer">10</span>
                <span>...</span>
                <ChevronRight size={16} className="cursor-pointer hover:text-black" />
                <ChevronRight size={16} className="-ml-1 cursor-pointer hover:text-black" />
            </div>
        </div>

        {/* Articles Section */}
        <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-fp-pink mb-12">Articles you might like</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {articles.map((article, idx) => (
                    <ArticleCard key={idx} {...article} />
                ))}
            </div>

            <div className="flex items-center justify-between relative">
                {/* Centered Button */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <button className="bg-white border border-fp-pink text-fp-pink px-10 py-3 rounded-full font-bold text-xs tracking-[0.15em] hover:bg-fp-pink hover:text-white transition uppercase">
                        View All
                    </button>
                </div>
                
                {/* Right Arrows */}
                <div className="flex gap-3 ml-auto">
                    <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-fp-pink hover:border-fp-pink transition">
                        <ChevronLeft size={24} />
                    </button>
                    <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-fp-pink border-fp-pink transition">
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default JobsPage;