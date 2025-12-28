import React, { useState } from 'react';
import { MapPin, Star } from 'lucide-react';

const LocationJobCard: React.FC<{ title: string; location: string }> = ({ title, location }) => (
  <div className="bg-white rounded-lg shadow-md p-6 pt-12 relative border border-gray-100 hover:border-fp-pink transition-all duration-300 flex flex-col h-full min-h-[320px] group">
    
    {/* Top Logo */}
    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white p-1 rounded-full border border-gray-100 shadow-sm w-12 h-12 flex items-center justify-center group-hover:border-fp-pink transition-colors">
       <div className="w-full h-full rounded-full border border-fp-pink flex items-center justify-center flex-col">
            {/* Simple Panda Face Icon */}
             <svg viewBox="0 0 24 24" className="w-4 h-4 text-fp-pink fill-current">
               <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8 8 8z"/>
               <circle cx="8.5" cy="9.5" r="1.5" fill="white"/>
               <circle cx="15.5" cy="9.5" r="1.5" fill="white"/>
               <path d="M12 16c-1.5 0-2.8-.8-3.5-2h7c-.7 1.2-2 2-3.5 2z" fill="white"/>
             </svg>
            <span className="text-[5px] text-fp-pink font-bold text-center leading-none mt-[1px]">foodpanda</span>
       </div>
    </div>

    {/* Top Right Star */}
    <button className="absolute top-4 right-4 text-fp-pink hover:text-pink-700">
      <Star size={20} />
    </button>

    {/* Content */}
    <div className="flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 mb-6 mt-4 leading-tight">
        {title}
        </h3>

        <div className="mt-auto">
            <div className="flex items-center gap-2 text-gray-600 mb-8">
            <MapPin size={18} className="text-fp-pink shrink-0" />
            <span className="text-sm">{location}</span>
            </div>

            <div className="flex justify-center">
                <button className="bg-fp-pink text-white font-bold py-3 px-8 rounded-full text-xs hover:bg-pink-700 transition uppercase tracking-wider">
                Read More
                </button>
            </div>
        </div>
    </div>
  </div>
);

const LocationsPage: React.FC = () => {
  // Define location data with coordinates tuned for the South/SE Asia map
  const locationsData = [
    {
      id: 'pakistan',
      name: 'Pakistan',
      description: "Welcome to foodpanda Pakistan! We are Pakistan's #1 delivery marketplace. We are looking for highly driven and smart individuals to join our growing team in Karachi, Lahore, and Islamabad.",
      image: "https://attraxcdnprod1-freshed3dgayb7c3.z01.azurefd.net/1481181/0f1cd41f-b5a4-4fa7-b963-a5706b26c90b/0.0.0/img/2f7eef56-bf98-4e75-68e2-08dbc5c265d8",
      top: '40%',
      left: '9%'
    },
    {
      id: 'bangladesh',
      name: 'Bangladesh',
      description: "foodpanda Bangladesh is the leading food delivery service in the country. We are a team of problem solvers who are constantly looking for ways to improve our service.",
      image: "https://attraxcdnprod1-freshed3dgayb7c3.z01.azurefd.net/1481181/0f1cd41f-b5a4-4fa7-b963-a5706b26c90b/0.0.0/img/d352c72c-ac89-4484-68e1-08dbc5c265d8",
      top: '49%',
      left: '43%'
    },
    {
      id: 'myanmar',
      name: 'Myanmar',
      description: "Mingalabar! foodpanda Myanmar launched in 2019 and has been growing rapidly since. Join us to bring good food into your everyday.",
      image: "https://attraxcdnprod1-freshed3dgayb7c3.z01.azurefd.net/1481181/0f1cd41f-b5a4-4fa7-b963-a5706b26c90b/0.0.0/img/a4913ae2-5e75-4d79-3969-08dbc5c2d82e",
      top: '62%',
      left: '50%'
    },
    {
      id: 'thailand',
      name: 'Thailand',
      description: "Sawasdee! We are the first food delivery service in Thailand. We are a young and dynamic team looking for people who want to make a difference.",
      image: "https://attraxcdnprod1-freshed3dgayb7c3.z01.azurefd.net/1481181/0f1cd41f-b5a4-4fa7-b963-a5706b26c90b/0.0.0/img/dff86594-fc5f-4c65-3966-08dbc5c2d82e",
      top: '68%',
      left: '58%'
    },
    {
      id: 'malaysia',
      name: 'Malaysia',
      description: "foodpanda Malaysia is where it all started. We are the headquarters for the APAC region (excluding Singapore) and we are always looking for top talent.",
      image: "https://attraxcdnprod1-freshed3dgayb7c3.z01.azurefd.net/1481181/0f1cd41f-b5a4-4fa7-b963-a5706b26c90b/0.0.0/img/aee53705-23d8-4ab7-68e6-08dbc5c265d8",
      top: '88%',
      left: '59%'
    },
    {
      id: 'singapore',
      name: 'Singapore',
      description: "Welcome to foodpanda Singapore! Our Singapore office houses both the APAC regional team as well as the Singapore local team and we are always looking for enthusiastic problem solvers to join us!",
      image: "https://attraxcdnprod1-freshed3dgayb7c3.z01.azurefd.net/1481181/0f1cd41f-b5a4-4fa7-b963-a5706b26c90b/0.0.0/img/75e81bbd-8604-4a26-45f6-08dbc58bc25e",
      top: '95%',
      left: '62%'
    },
    {
      id: 'philippines',
      name: 'Philippines',
      description: "Mabuhay! We are foodpanda Philippines. We are a fun and energetic team who loves food and technology. Come join our panda family!",
      image: "https://attraxcdnprod1-freshed3dgayb7c3.z01.azurefd.net/1481181/0f1cd41f-b5a4-4fa7-b963-a5706b26c90b/0.0.0/img/20efdb7e-42dd-46a5-396a-08dbc5c2d82e",
      top: '65%',
      left: '88%'
    },
    {
      id: 'hongkong',
      name: 'Hong Kong',
      description: "foodpanda Hong Kong is looking for smart and driven individuals to join our team. We are a fast-paced and exciting company to work for.",
      image: "https://attraxcdnprod1-freshed3dgayb7c3.z01.azurefd.net/1481181/0f1cd41f-b5a4-4fa7-b963-a5706b26c90b/0.0.0/img/06a50123-de91-4ef9-45f7-08dbc58bc25e",
      top: '51%',
      left: '78%'
    }
  ];

  const [activeLocationId, setActiveLocationId] = useState('singapore');
  
  const activeLocation = locationsData.find(loc => loc.id === activeLocationId) || locationsData[0];

  const roles = [
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
    }
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Header */}
      <div className="w-full bg-fp-pink h-48 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight">
          Our locations
        </h1>
      </div>

      {/* Intro Text */}
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-fp-pink mb-6 leading-tight">
          With multiple locations across Asia, there’s always room at our table.
        </h2>
        <p className="text-gray-800 font-medium">
          Click on a location below to explore current opportunities in that destination.
        </p>
      </div>

      {/* Map Section */}
      <div className="bg-[#FFC4D6]/30 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">All over APAC</h2>
            
            <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Map Area */}
                {/* 
                   Used aspect-ratio to maintain map dimensions responsively. 
                   The background image is a specific South/SE Asia projection.
                */}
                <div className="w-full lg:w-3/5 relative aspect-[1.5] rounded-2xl overflow-hidden bg-gray-200 shadow-inner">
                    <img 
                        src="https://attraxcdnprod1-freshed3dgayb7c3.z01.azurefd.net/1481181/0f1cd41f-b5a4-4fa7-b963-a5706b26c90b/0.0.0/img/d80245bb-d61b-492a-3194-08dc1849cb5d" 
                        alt="Map of APAC" 
                        className="w-full h-full object-cover"
                    />
                    
                    {/* Interactive Dots */}
                    {locationsData.map((loc) => (
                      <button
                        key={loc.id}
                        onClick={() => setActiveLocationId(loc.id)}
                        className={`absolute rounded-full border-white shadow-md transition-all duration-300 transform hover:scale-110 focus:outline-none flex items-center justify-center group ${
                          activeLocationId === loc.id 
                            ? 'w-4 h-4 bg-fp-pink border-2 z-20 scale-110' 
                            : 'w-3 h-3 bg-fp-pink border-2 hover:bg-pink-600 z-10'
                        }`}
                        style={{ top: loc.top, left: loc.left }}
                        aria-label={`Select ${loc.name}`}
                      >
                         {/* Pulse effect for active dot */}
                         {activeLocationId === loc.id && (
                            <span className="absolute -inset-2 rounded-full bg-fp-pink opacity-25 animate-ping"></span>
                         )}
                         
                         {/* Tooltip on hover */}
                         <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-30">
                            {loc.name}
                         </div>
                      </button>
                    ))}
                </div>

                {/* Info Card */}
                <div className="w-full lg:w-2/5 bg-white rounded-3xl p-8 shadow-lg transition-all duration-500 min-h-[500px] flex flex-col h-full">
                    <h3 className="text-4xl font-bold text-fp-pink mb-6">{activeLocation.name}</h3>
                    <p className="text-gray-800 mb-8 leading-relaxed text-[15px]">
                        {activeLocation.description}
                    </p>
                    

                    <div className="rounded-2xl overflow-hidden mb-8 h-48 w-full shadow-sm">
                        <img 
                            src={activeLocation.image} 
                            alt={`${activeLocation.name} Office`} 
                            className="w-full h-full object-cover transition-opacity duration-300"
                        />
                    </div>

                     <button className="bg-fp-pink text-white font-bold py-3 px-8 rounded-full text-xs hover:bg-pink-700 transition uppercase tracking-widest w-fit mt-auto">
                        View Jobs in {activeLocation.name}
                    </button>
                </div>
            </div>
        </div>
      </div>

      {/* Roles Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-fp-pink mb-16 text-center md:text-left">
            Some roles you might be interested in
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {roles.map((role, idx) => (
                <LocationJobCard key={idx} title={role.title} location={role.location} />
            ))}
        </div>
      </div>

    </div>
  );
};

export default LocationsPage;