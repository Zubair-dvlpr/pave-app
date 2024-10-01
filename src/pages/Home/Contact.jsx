import React from 'react';

const Contact = () => {
  return (
    <div className="bg-[#F6F6F6] py-28">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Side Content */}
          <div className="col-span-2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-[#000]">Get in Touch</h2>

            <ul className="space-y-4">
              {/* Icons and contact details */}
              <li className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M20.6201 8.45C19.5701 3.83 15.5401 1.75 12.0001 1.75C12.0001 1.75 12.0001 1.75 11.9901 1.75C8.4601 1.75 4.4201 3.82 3.3701 8.44C2.2001 13.6 5.3601 17.97 8.2201 20.72C9.2801 21.74 10.6401 22.25 12.0001 22.25C13.3601 22.25 14.7201 21.74 15.7701 20.72C18.6301 17.97 21.7901 13.61 20.6201 8.45ZM12.0001 13.46C10.2601 13.46 8.8501 12.05 8.8501 10.31C8.8501 8.57 10.2601 7.16 12.0001 7.16C13.7401 7.16 15.1501 8.57 15.1501 10.31C15.1501 12.05 13.7401 13.46 12.0001 13.46Z" fill="#F8CB3E" />
                </svg>
                <span className="text-gray-600">176 Maple Avenue suite 302, Monsey, NY 10952, USA</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path d="M17.62 11.2501C17.19 11.2501 16.85 10.9001 16.85 10.4801C16.85 10.1101 16.48 9.3401 15.86 8.6701C15.25 8.0201 14.58 7.6401 14.02 7.6401C13.59 7.6401 13.25 7.2901 13.25 6.8701C13.25 6.4501 13.6 6.1001 14.02 6.1001C15.02 6.1001 16.07 6.6401 16.99 7.6101C17.85 8.5201 18.4 9.6501 18.4 10.4701C18.4 10.9001 18.05 11.2501 17.62 11.2501Z" fill="#F8CB3E" />
                  <path d="M21.2298 11.25C20.7998 11.25 20.4598 10.9 20.4598 10.48C20.4598 6.93 17.5698 4.05 14.0298 4.05C13.5998 4.05 13.2598 3.7 13.2598 3.28C13.2598 2.86 13.5998 2.5 14.0198 2.5C18.4198 2.5 21.9998 6.08 21.9998 10.48C21.9998 10.9 21.6498 11.25 21.2298 11.25Z" fill="#F8CB3E" />
                  <path d="M11.05 15.45L9.2 17.3C8.81 17.69 8.19 17.69 7.79 17.31C7.68 17.2 7.57 17.1 7.46 16.99C6.43 15.95 5.5 14.86 4.67 13.72C3.85 12.58 3.19 11.44 2.71 10.31C2.24 9.17 2 8.08 2 7.04C2 6.36 2.12 5.71 2.36 5.11C2.6 4.5 2.98 3.94 3.51 3.44C4.15 2.81 4.85 2.5 5.59 2.5C5.87 2.5 6.15 2.56 6.4 2.68C6.66 2.8 6.89 2.98 7.07 3.24L9.39 6.51C9.57 6.76 9.7 6.99 9.79 7.21C9.88 7.42 9.93 7.63 9.93 7.82C9.93 8.06 9.86 8.3 9.72 8.53C9.59 8.76 9.4 9 9.16 9.24L8.4 10.03C8.29 10.14 8.24 10.27 8.24 10.43C8.24 10.51 8.25 10.58 8.27 10.66C8.3 10.74 8.33 10.8 8.35 10.86C8.53 11.19 8.84 11.62 9.28 12.14C9.73 12.66 10.21 13.19 10.73 13.72C10.83 13.82 10.94 13.92 11.04 14.02C11.44 14.41 11.45 15.05 11.05 15.45Z" fill="#F8CB3E" />
                  <path d="M21.9701 18.83C21.9701 19.11 21.9201 19.4 21.8201 19.68C21.7901 19.76 21.7601 19.84 21.7201 19.92C21.5501 20.28 21.3301 20.62 21.0401 20.94C20.5501 21.48 20.0101 21.87 19.4001 22.12C19.3901 22.12 19.3801 22.13 19.3701 22.13C18.7801 22.37 18.1401 22.5 17.4501 22.5C16.4301 22.5 15.3401 22.26 14.1901 21.77C13.0401 21.28 11.8901 20.62 10.7501 19.79C10.3601 19.5 9.9701 19.21 9.6001 18.9L12.8701 15.63C13.1501 15.84 13.4001 16 13.6101 16.11C13.6601 16.13 13.7201 16.16 13.7901 16.19C13.8701 16.22 13.9501 16.23 14.0401 16.23C14.2101 16.23 14.3401 16.17 14.4501 16.06L15.2101 15.31C15.4601 15.06 15.7001 14.87 15.9301 14.75C16.1601 14.61 16.3901 14.54 16.6401 14.54C16.8301 14.54 17.0301 14.58 17.2501 14.67C17.4701 14.76 17.7001 14.89 17.9501 15.06L21.2601 17.41C21.5201 17.59 21.7001 17.8 21.8101 18.05C21.9101 18.3 21.9701 18.55 21.9701 18.83Z" fill="#F8CB3E" />
                </svg>
                <span className="text-gray-600">Pavensaveinfo@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path d="M17 4H7C4 4 2 5.5 2 9V16C2 19.5 4 21 7 21H17C20 21 22 19.5 22 16V9C22 5.5 20 4 17 4ZM17.47 10.09L14.34 12.59C13.68 13.12 12.84 13.38 12 13.38C11.16 13.38 10.31 13.12 9.66 12.59L6.53 10.09C6.21 9.83 6.16 9.35 6.41 9.03C6.67 8.71 7.14 8.65 7.46 8.91L10.59 11.41C11.35 12.02 12.64 12.02 13.4 11.41L16.53 8.91C16.85 8.65 17.33 8.7 17.58 9.03C17.84 9.35 17.79 9.83 17.47 10.09Z" fill="#F8CB3E" />
                </svg>
                <span className="text-gray-600">+1-(845) 388-1445 - Pave 'n' Save INC</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.35 15.57C16.21 15.81 15.96 15.94 15.7 15.94C15.57 15.94 15.44 15.91 15.32 15.83L12.22 13.98C11.45 13.52 10.88 12.51 10.88 11.62V7.52C10.88 7.11 11.22 6.77 11.63 6.77C12.04 6.77 12.38 7.11 12.38 7.52V11.62C12.38 11.98 12.68 12.51 12.99 12.69L16.09 14.54C16.45 14.75 16.57 15.21 16.35 15.57Z" fill="#F8CB3E" />
                </svg>
                <span className="text-gray-600">Mon-Fri - 08:00-19:00</span>
              </li>
            </ul>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white col-span-3 ms:p-10 p-5 rounded-2xl lg:w-[90%]">
            <form action="#" className="space-y-6">
              {/* Company Name - Full Width */}
              <div>
                <label htmlFor="companyName" className="block text-[#000] text-xl leading-8 font-medium">Company Name</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  className="mt-3 p-3 w-full border border-gray-300 rounded-lg bg-[#F2F2F2] focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter your company name"
                />
              </div>

              {/* Email and Phone Number in 1 Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-[#000] text-xl leading-8 font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-3 p-3 w-full border border-gray-300 bg-[#F2F2F2] rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[#000] text-xl leading-8 font-medium">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-3 p-3 w-full border border-gray-300 bg-[#F2F2F2] rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              {/* Address - Full Width */}
              <div>
                <label htmlFor="address" className="block text-[#000] text-xl leading-8 font-medium">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="mt-3 p-3 w-full border border-gray-300 bg-[#F2F2F2] rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter your address"
                />
              </div>

              {/* Question Heading */}
              <h3 className="text-xl font-bold text-center text-gray-700 mt-6">Have a question?</h3>

              {/* Submit Button */}
              <div className='flex justify-center'>
                <button
                  type="submit"
                  className=" bg-[#F8CB3E] text-[#000] text-xl font-semibold py-3 px-12 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition ease-in-out duration-200"
                >
                  Reach Out to Us
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
