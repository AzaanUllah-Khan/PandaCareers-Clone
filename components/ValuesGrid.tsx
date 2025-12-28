import React, { useState } from 'react';
import { MapPin, Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface JobCardProps {
  title: string;
  location: string;
}

const JobCard: React.FC<JobCardProps> = ({ title, location }) => (
  <div className="bg-white rounded-lg shadow-md p-6 pt-12 relative border-t-4 border-t-white hover:border-t-fp-pink transition-all duration-300 flex flex-col h-full min-h-[320px]">
    
    {/* Top Logo */}
    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white p-1 rounded-full border border-gray-100 shadow-sm w-12 h-12 flex items-center justify-center">
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
        <h3 className="text-xl font-bold text-gray-900 mb-6 mt-4 line-clamp-3 leading-tight">
        {title}
        </h3>

        <div className="mt-auto">
            <div className="flex items-center gap-2 text-gray-600 mb-8">
            <MapPin size={18} className="text-fp-pink shrink-0" />
            <span className="text-sm">{location}</span>
            </div>

            <button className="w-full bg-fp-pink text-white font-bold py-3 rounded-full text-sm hover:bg-pink-700 transition uppercase tracking-wide">
            Read More
            </button>
        </div>
    </div>
  </div>
);

const testimonialsData = [
    {
        quote:
            "In my time here, I've had the privilege to learn more about how to help people feel like they belong, but I've also had the good fortune to learn more about myself. The people are some of the kindest I've ever worked with, and I'm always thankful for the culture of inclusion and friendliness I experience here every day.",
        name: 'Faith Sim',
        role: 'Employee Engagement Intern (APAC), Singapore',
        image: 'https://picsum.photos/id/64/800/1000',
    },
    {
        quote:
            'Working at foodfp has been an incredible journey of growth. The fast-paced environment pushes you to be your best, and the collaborative spirit ensures that no one is left behind. It\'s refreshing to be part of a team where innovation is encouraged and every idea is valued regardless of your role.',
        name: 'Ahmed Malik',
        role: 'Logistics Specialist, Malaysia',
        image: 'https://picsum.photos/id/91/800/1000',
    },
    {
        quote:
            'The diversity here is unmatched. I work with colleagues from all over the globe, and that exposure has broadened my perspective immensely. We work hard, we play hard, and we support each other like a family. It\'s truly a place where you can bring your authentic self to work.',
        name: 'Sarah Jenkins',
        role: 'Product Manager, Thailand',
        image: 'https://picsum.photos/id/338/800/1000',
    },
];

const valuesData = [
    {
        title: 'Own It',
        items: ['Get things done', 'Think long term', 'Use resources carefully'],
    },
    {
        title: 'Raise the Bar',
        items: ['Set a high bar', 'Hire & develop the best', 'Provide feedback'],
    },
    {
        title: 'Dive Deep',
        items: ['Challenge the data', 'Know how things work', 'Be hands on'],
    },
    {
        title: 'Bring Good Vibes',
        items: [
            'Be a good team player',
            "Focus on what's possible",
            'Create a positive workplace',
        ],
    },
    {
        title: 'Deliver Value Fast',
        items: ['Focus on what matters', 'Move with pace', 'Comfortable with change'],
    },
    {
        title: 'Stay Humble',
        items: ['Keep an open mind', "Don't be entitled", 'Improve continuously'],
    },
];

const ValuesGrid: React.FC = () => {
    const [showAll, setShowAll] = useState(false);

  const jobs = [
    {
      title: "Associate, Account Management",
      location: "Yangon, Myanmar"
    },
    {
      title: "Specialist, Logistics Performance",
      location: "Kuala Lumpur, Malaysia"
    },
    {
      title: "Specialist, Demand Control",
      location: "Taguig, Philippines"
    },
    {
      title: "Senior Software Engineer, Backend",
      location: "Singapore, Singapore"
    },
    {
      title: "Marketing Manager, Growth",
      location: "Bangkok, Thailand"
    },
    {
      title: "HR Business Partner, People Operations",
      location: "Karachi, Pakistan"
    }
  ];

  const visibleJobs = showAll ? jobs : jobs.slice(0, 3);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState<'left' | 'right'>('right');

    const handleNext = () => {
        setDirection('right');
        setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    };

    const handlePrev = () => {
        setDirection('left');
        setCurrentIndex(
            (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
        );
    };

    const currentTestimonial = testimonialsData[currentIndex];

    return (
        <>
            <div className="w-full bg-fp-pink h-48 md:h-48 flex items-center justify-center">
                <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight">
                    Our values
                </h1>
            </div>
            <section className="max-w-4xl mx-auto px-6 py-12 md:py-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-fp-pink mb-8">
                    Together we win
                </h2>
                <div className="space-y-6 text-gray-800 leading-relaxed text-[15px] md:text-base">
                    <p>
                        If you're passionate about good food and great work, you're in the right place. At foodfp, we are a potluck of cultures and personalities across 10 locations in Asia.
                    </p>
                    <p>
                        Our values are what unite us. We're always on the lookout for driven, talented and passionate fps to join our diverse team and drive success for the team, partners, and community.
                    </p>
                </div>
            </section>


            <section className="max-w-7xl mx-auto px-4 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
                    {valuesData.map((val, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            {/* Image Placeholder imitating the banners */}
                            <div className={`w-full h-32 md:h-36 rounded-lg overflow-hidden mb-6 relative shadow-sm group`}>
                                <img
                                    src={`https://picsum.photos/seed/${val.title.replace(/\s/g, '')}/500/200`}
                                    alt={val.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">{val.title}</h3>

                            <div className="flex flex-col gap-3 text-center w-full">
                                {val.items.map((item, i) => (
                                    <React.Fragment key={i}>
                                        <p className="text-gray-800 text-sm md:text-[15px] leading-snug">{item}</p>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-fp-pink font-medium mb-6 px-4">
                        If these values describe you and the people you want to work with, check out our open roles and book your place at our table!
                    </p>
                    <button className="bg-fp-pink text-white px-8 py-3 rounded-full font-bold text-sm tracking-wide hover:bg-pink-700 transition shadow-md">
                        EXPLORE JOBS
                    </button>
                </div>
            </section>
            <section className="w-full relative py-12 md:py-20 overflow-hidden">
                <style>{`
          @keyframes slideInRight {
            from { transform: translateX(50px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          @keyframes slideInLeft {
            from { transform: translateX(-50px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          .animate-slide-right {
            animation: slideInRight 0.5s ease-out forwards;
          }
          .animate-slide-left {
            animation: slideInLeft 0.5s ease-out forwards;
          }
        `}</style>

                {/* Key forces re-render of the wrapper to trigger animation */}
                <div
                    key={currentIndex}
                    className={`max-w-7xl mx-auto px-4 md:px-8 relative flex flex-col md:flex-row items-center ${direction === 'right' ? 'animate-slide-right' : 'animate-slide-left'}`}
                >

                    {/* Left Image Section */}
                    <div className="relative w-full md:w-1/2 z-10 mb-8 md:mb-0">
                        {/* Pink Background Blob Shape */}
                        <div className="absolute top-4 -left-4 md:-left-12 w-[90%] h-[95%] bg-fp-pink rounded-[3rem] transform -rotate-1 z-0 transition-transform duration-500 hover:rotate-2"></div>

                        {/* Image */}
                        <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-xl mx-auto md:mr-12 w-[85%] md:w-[90%] aspect-[3/4]">
                            <img
                                src={currentTestimonial.image}
                                alt="Employee with Panda"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Right Content Section */}
                    <div className="relative w-full md:w-1/2 md:-ml-20 z-20">
                        <div className="bg-gray-100/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-sm min-h-[400px] flex flex-col justify-center relative">

                            <blockquote className="text-gray-900 text-base md:text-lg leading-relaxed font-medium mb-8">
                                {currentTestimonial.quote}
                            </blockquote>

                            <div className="mb-8">
                                <h4 className="text-fp-pink font-bold text-lg">{currentTestimonial.name}</h4>
                                <p className="text-fp-pink text-sm">{currentTestimonial.role}</p>
                            </div>

                            <div className="flex gap-4 mb-4">
                                <button
                                    onClick={handlePrev}
                                    className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-500 hover:border-fp-pink hover:text-fp-pink transition bg-white"
                                >
                                    <ChevronLeft size={20} />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-500 hover:border-fp-pink hover:text-fp-pink transition bg-white"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>

                            {/* 3D Panda decorative image at bottom right */}
                            <div className="absolute -bottom-6 -right-2 md:-right-8 w-32 md:w-40">
                                {/* Placeholder for the 3D panda head */}
                                <img src="https://picsum.photos/id/433/200/200" className="w-full h-full object-contain rounded-full border-4 border-white shadow-lg" alt="Panda decoration" />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-fp-light py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-fp-pink text-center mb-16">
                        Some jobs that may be of interest
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
                        {visibleJobs.map((job, idx) => (
                            <JobCard key={idx} title={job.title} location={job.location} />
                        ))}
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative">
                        {/* Centered Button */}
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="bg-fp-pink text-white px-10 py-3 rounded-full font-bold text-sm tracking-wide hover:bg-pink-700 transition shadow-md uppercase"
                        >
                            {showAll ? 'Show Less' : 'View All Jobs'}
                        </button>

                        {/* Right Arrows */}
                        <div className="flex gap-3 md:absolute md:right-0">
                            <button className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-400 hover:text-fp-pink hover:border-fp-pink transition shadow-sm">
                                <ChevronLeft size={24} />
                            </button>
                            <button className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-400 hover:text-fp-pink hover:border-fp-pink transition shadow-sm">
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ValuesGrid;