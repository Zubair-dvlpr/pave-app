import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const handleMenuClick = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName); // Toggle the menu
  };
  const toggleSearch = () => setIsSearchVisible((prev) => !prev);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  // Menu items array
  const menuItems = [
    { name: 'Home', link: '/'},
    { name: 'About us', link: '#menu2', subMenu: [{ name: 'Submenu 1', link: '#submenu3' }, { name: 'Submenu 2', link: '#3submenu4' }] },
    { name: 'Residential', link: '#menu3', subMenu: [{ name: 'Submenu 1', link: '#submenu3' }, { name: 'Submenu 2', link: '#3submenu4' }] },
    { name: 'Commercial', link: '#menu4', subMenu: [{ name: 'Submenu 1', link: '#submenu3' }, { name: 'Submenu 2', link: '#3submenu4' }] },
    { name: 'Service area', link: '#menu5', subMenu: [{ name: 'Submenu 1', link: '#submenu3' }, { name: 'Submenu 2', link: '#submenu4' }] },
    { name: 'Services', link: '#menu6', subMenu: [{ name: 'Submenu 1', link: '#submenu3' }, { name: 'Submenu 2', link: '#submenu4' }] },
    { name: 'Contact us', link: '#menu7', subMenu: [{ name: 'Submenu 1', link: '#submenu3' }, { name: 'Submenu 2', link: '#submenu4' }] },
    { name: 'Galleries', link: '#menu8', subMenu: [{ name: 'Submenu 1', link: '#submenu3' }, { name: 'Submenu 2', link: '#submenu4' }] },
  ];

  return (
    <header className="w-full bg-[#000] py-3  text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="text-2xl font-bold">
            <img src={logo} alt="" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 items-center">
          <nav>
            <ul className="flex space-x-6">
              {menuItems.map((menuItem) => (
                <li key={menuItem.name} className="group py-2 hover:border-b hover:text-[#F8CB3E] border-[#F8CB3E] relative">
                  <Link to={menuItem.link}>
                    {menuItem.name}
                    {menuItem.subMenu && (
                      <svg
                        className="inline ml-1 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown */}
                  {menuItem.subMenu && (
                    <ul className="absolute z-50 left-0 mt-4 w-40 bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                      {menuItem.subMenu.map((subItem) => (
                        <li key={subItem.name} className="px-4 py-2 hover:bg-gray-700">
                          <Link to={subItem.link}>{subItem.name}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Search Button */}
          <div className="relative">
            <button onClick={toggleSearch} className="z-10 py-4 " aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3.31573 13.7811L4.04591 13.6098L3.31573 13.7811ZM3.31573 8.324L4.04591 8.49528L3.31573 8.324ZM18.7893 8.324L19.5195 8.15273L18.7893 8.324ZM18.7893 13.781L19.5195 13.9523L18.7893 13.781ZM13.781 18.7893L13.6098 18.0591L13.781 18.7893ZM8.324 18.7893L8.15273 19.5195L8.324 18.7893ZM8.324 3.31573L8.15272 2.58555L8.324 3.31573ZM13.781 3.31573L13.9523 2.58555L13.781 3.31573ZM20.4697 21.5303C20.7626 21.8232 21.2374 21.8232 21.5303 21.5303C21.8232 21.2374 21.8232 20.7626 21.5303 20.4697L20.4697 21.5303ZM4.04591 13.6098C3.65136 11.9278 3.65136 10.1773 4.04591 8.49528L2.58555 8.15272C2.13815 10.06 2.13815 12.045 2.58555 13.9523L4.04591 13.6098ZM18.0591 8.49528C18.4537 10.1773 18.4537 11.9278 18.0591 13.6098L19.5195 13.9523C19.9669 12.045 19.9669 10.06 19.5195 8.15273L18.0591 8.49528ZM13.6098 18.0591C11.9278 18.4537 10.1773 18.4537 8.49528 18.0591L8.15273 19.5195C10.06 19.9669 12.045 19.9669 13.9523 19.5195L13.6098 18.0591ZM8.49528 4.04591C10.1773 3.65136 11.9278 3.65136 13.6098 4.04591L13.9523 2.58555C12.045 2.13815 10.06 2.13815 8.15272 2.58555L8.49528 4.04591ZM8.49528 18.0591C6.28757 17.5413 4.56377 15.8175 4.04591 13.6098L2.58555 13.9523C3.23351 16.7147 5.39038 18.8715 8.15273 19.5195L8.49528 18.0591ZM13.9523 19.5195C16.7147 18.8715 18.8715 16.7147 19.5195 13.9523L18.0591 13.6098C17.5413 15.8175 15.8175 17.5413 13.6098 18.0591L13.9523 19.5195ZM13.6098 4.04591C15.8175 4.56377 17.5413 6.28757 18.0591 8.49528L19.5195 8.15273C18.8715 5.39037 16.7147 3.23351 13.9523 2.58555L13.6098 4.04591ZM8.15272 2.58555C5.39037 3.23351 3.23351 5.39037 2.58555 8.15272L4.04591 8.49528C4.56377 6.28756 6.28757 4.56377 8.49528 4.04591L8.15272 2.58555ZM16.8048 17.8655L20.4697 21.5303L21.5303 20.4697L17.8655 16.8048L16.8048 17.8655Z" fill="white" />
              </svg>
            </button>
            {isSearchVisible && (
              <input type="text" placeholder="Search..." className="absolute right-14 mt-2 w-48 p-2 bg-gray-700 text-white rounded-lg focus:outline-none shadow-lg transition-opacity duration-300" />
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>




      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-gray-800 text-white px-4 py-6 space-y-4">
          {menuItems.map((menuItem) => (
            <div key={menuItem.name} className="group relative">
              <div
                onClick={() => handleMenuClick(menuItem.name)}
                className="block hover:bg-gray-700 p-2 cursor-pointer"
              >
                {menuItem.name}
                {menuItem.subMenu && (
                  <svg
                    className="inline ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </div>

              {/* Mobile Dropdown */}
              {menuItem.subMenu && openMenu === menuItem.name && (
                <ul className="pl-4 space-y-2">
                  {menuItem.subMenu.map((subItem) => (
                    <li key={subItem.name} className="hover:bg-gray-700 p-2">
                      <Link to={subItem.link}>{subItem.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}




    </header>
  );
};

export default Header;
