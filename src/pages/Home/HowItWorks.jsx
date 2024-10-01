import React from "react";
// Importing Framer Motion for animation

import driveway from "../../assets/images/driveway.svg"


const HowItWorks = () => {
    return (
        <section className="py-12 px-4 bg-white">
            {/* Top Row */}
            <div className="max-w-[1320px] mx-auto flex gap-3 flex-col md:flex-row justify-between  mb-12">
                <h2 className="text-3xl md:text-4xl text-center sm:text-left font-bold text-gray-800">How It Works</h2>
                <p className="sm:text-xl text-base md:w-1/2  text-center sm:text-left  text-gray-600">
                    Learn how our process works in three simple steps. We make it easier for you to get the best results with minimum effort.
                </p>
            </div>

            {/* Steps and Arrow */}
            <div className="relative max-w-[1320px] mx-auto   items-center">
                {/* Steps */}
                <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
                    {/* Step 1 */}
                    <div className="flex flex-col sm:items-start items-center ">
                        <div className="bg-[#F8CB3E]  w-fit p-4 rounded-full shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path d="M12.7169 5.95001C13.0159 5.78693 13.3336 6.03781 13.3336 6.37837V28.9714C13.3336 29.3435 13.0795 29.6581 12.7506 29.8319C12.7393 29.8379 12.7281 29.8439 12.7169 29.85L8.80023 32.0833C6.0669 33.65 3.81689 32.35 3.81689 29.1833V12.9667C3.81689 11.9167 4.56689 10.6167 5.50023 10.0833L12.7169 5.95001Z" fill="black" />
                                <path d="M24.5365 10.1705C24.8204 10.3111 25 10.6005 25 10.9173V32.8392C25 33.4533 24.3583 33.8565 23.805 33.5899L16.7216 30.1773C16.4333 30.0384 16.25 29.7466 16.25 29.4265V7.40934C16.25 6.79124 16.8993 6.38826 17.4532 6.66256L24.5365 10.1705Z" fill="black" />
                                <path d="M36.6665 10.8167V27.0333C36.6665 28.0833 35.9165 29.3833 34.9832 29.9167L29.1642 33.2516C28.6087 33.57 27.9165 33.1689 27.9165 32.5286V10.5505C27.9165 10.2514 28.0769 9.97512 28.3367 9.82681L31.6832 7.91667C34.4165 6.35001 36.6665 7.65001 36.6665 10.8167Z" fill="black" />
                            </svg>
                        </div>
                        <h3 className="mt-6 sm:text-3xl text-base font-bold text-gray-800">Enter Your Address</h3>

                    </div>

                    {/* Step 1 */}
                    <div className="flex flex-col sm:items-start items-center ">
                        <div className="bg-[#F8CB3E]  w-fit p-4 rounded-full shadow-lg">
                            <img src={driveway} alt="" />
                        </div>
                        <h3 className="mt-6 sm:text-3xl text-base font-bold text-gray-800">Our AI System Detects Your Driveway</h3>

                    </div>

                    {/* Step 1 */}
                    <div className="flex flex-col sm:items-start items-center ">
                        <div className="bg-[#F8CB3E]  w-fit p-4 rounded-full shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path d="M20.0002 3.33331C10.8002 3.33331 3.3335 10.8 3.3335 20C3.3335 29.2 10.8002 36.6666 20.0002 36.6666C29.2002 36.6666 36.6668 29.2 36.6668 20C36.6668 10.8 29.2002 3.33331 20.0002 3.33331ZM19.3502 19.7333C19.3502 24.8666 18.2335 26.0166 15.2502 27.7833C15.0502 27.9 14.8335 27.95 14.6168 27.95C14.1835 27.95 13.7668 27.7333 13.5335 27.3333C13.1835 26.7333 13.3835 25.9666 13.9668 25.6166C15.9835 24.4166 16.6835 23.9833 16.8168 20.9666H13.6502C11.8335 20.9666 10.4168 19.55 10.4168 17.7333V15.2666C10.4168 13.45 11.8335 12.0333 13.6502 12.0333H16.1335C17.9168 12.0333 19.3668 13.4833 19.3668 15.2666V19.7333H19.3502ZM29.5835 19.7333C29.5835 24.8666 28.4668 26.0166 25.4835 27.7833C25.2835 27.9 25.0668 27.95 24.8502 27.95C24.4168 27.95 24.0002 27.7333 23.7668 27.3333C23.4168 26.7333 23.6168 25.9666 24.2002 25.6166C26.2168 24.4166 26.9168 23.9833 27.0502 20.9666H23.8668C22.0502 20.9666 20.6335 19.55 20.6335 17.7333V15.2666C20.6335 13.45 22.0502 12.0333 23.8668 12.0333H26.3502C28.1335 12.0333 29.5835 13.4833 29.5835 15.2666V19.7333Z" fill="black" />
                            </svg>
                        </div>
                        <h3 className="mt-6 sm:text-3xl text-base font-bold text-gray-800">Enter Your Address</h3>

                    </div>


                </div>

            </div>
        </section>
    );
};

export default HowItWorks;
