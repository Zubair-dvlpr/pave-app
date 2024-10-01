import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';

import SocialIcons from './SocialIcons';
const Footer = () => {

  const [fill, setFill] = useState("#fff");
  const [circle, setCircle] = useState(['#000', '#D4D4D8']);

  const sections = [
    {
      title: "About us",
      links: [
        { path: "/about", text: "Paving Before and After" },
        { path: "/our-team", text: "Additional Services" },
        { path: "/careers", text: "Residential Concrete Services" },
        { path: "/contact", text: "Commercial Concrete Services" },
      ],
    },
    {
      title: "Residential",
      links: [
        { path: "/residential", text: "Residential Driveway Paving" },
        { path: "/commercial", text: "Paving Residential Services" },
        { path: "/projects", text: "Asphalt Road Services" },
        { path: "/testimonials", text: "Why To choose us" },
      ],
    },
    {
      title: "Commercial",
      links: [
        { path: "/support", text: "Paving Service Area" },
        { path: "/faq", text: "F.A.Q Paving" },
        { path: "/privacy", text: "Industrial Paving" },
        { path: "/terms", text: "Our Team" },
      ],
    },
    {
      title: "Contact Us",
      links: [
        { path: "/blog", text: "Get Your FREE Estimate!" },
        { path: "/news", text: "Queens Paving Contractors" },
        { path: "/case-studies", text: "Asphalt and Concrete" },
        { path: "/events", text: "Asphalt Road Renovations" },
      ],
    },
  ];

  return (
    <footer className="bg-[#000] text-white py-10">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1 - Logo and Social Icons */}
          <div>
            <div className="mb-4">
              <Link to="/" className="text-2xl font-bold">
                <img src={logo} alt="" />
              </Link>
            </div>
            <SocialIcons />
          </div>

          {/* Column 2 - About and Links */}
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="mb-4 font-semibold text-xl">{section.title}</h3>
              <ul className="space-y-2 mt-7">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link to={link.path} className="hover:text-gray-400 text-base leading-8">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 my-8"></div>

        {/* Copyright Section */}
        <div className="text-center text-white">
          <p>&copy; {new Date().getFullYear()} Pave-N-Save. All rights</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
