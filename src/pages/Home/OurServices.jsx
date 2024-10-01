import React, { useState } from 'react';
import PavingIcon from '../../assets/Icons/PavingIcon';
import ProjectIcon from '../../assets/Icons/ProjectsIcon';
import MaintenanceIcon from '../../assets/Icons/MaintenanceIcon';

const OurServices = () => {
  // Array of service objects
  const services = [
    {
      title: 'Residential Paving',
      description: 'We provide top-notch residential paving services to make your driveway and walkways durable and aesthetically pleasing.',
      icon: PavingIcon, // Pass the icon component directly
    },
    {
      title: 'Commercial Paving',
      description: 'Our commercial paving services ensure smooth and long-lasting parking lots, roads, and other infrastructure.',
      icon: MaintenanceIcon, // Use a real icon component here instead of string paths (replace with actual components)
    },
    {
      title: 'Pavement Maintenance',
      description: 'We offer maintenance services to keep your pavement in top condition, ensuring longevity and safety.',
      icon: ProjectIcon, // Use a real icon component here instead of string paths (replace with actual components)
    },
  ];

  return (
    <div className="bg-black py-16">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center uppercase text-white mb-12">Our Services</h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-12">
          {services.map((service, index) => {
            const [hover, setHover] = useState(false); // Hover state for each service card
            const iconColor = hover ? 'white' : 'black'; // Change icon color based on hover

            const IconComponent = service.icon; // Retrieve icon component

            return (
              <div
                key={index}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="bg-white group text-black p-8 rounded-lg flex flex-col items-center text-center transition-all duration-300 hover:bg-[#F8CB3E] hover:text-black"
              >
                {/* Icon */}
                <div className="bg-[#00000017] group-hover:bg-[#000] p-4 rounded-full mb-4 transition-colors duration-300">
                  <IconComponent color={iconColor} /> {/* Icon with dynamic color */}
                </div>

                {/* Title */}
                <h3 className="text-xl text-[#000] font-bold mb-2">{service.title}</h3>

                {/* Description */}
                <p className="text-[#04040499]">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
