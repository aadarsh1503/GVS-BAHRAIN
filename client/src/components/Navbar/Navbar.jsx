import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaGlobe } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { useState } from 'react';
import { FaChevronDown, FaTimes ,FaBars  } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import GVS from "./GVS.png"
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';


const Navbar = () => {
  
  const items = [
    'Home',
    'About Us',
    'Freights',
    'Services',
    'Tools',
    'Email'
  ];

  const [openDropdown, setOpenDropdown] = useState(null);

  const handleToggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState('Home');


    
    

  return (
    <div>
    <header className="bg-DarkBlue">
      {/* Top Bar */}
      <div className="flex justify-between max-w-4xl mx-auto font-roboto items-center px-4 py-1 text-white text-sm">
  <span>Welcome to GVS Cargo & Logistics</span>
  <div className='mt-1'>
<LanguageSwitcher />
</div>
</div>


      </header>

      {/* Main Navbar */}
      <div className="bg-white py-6">
  <div className="container mx-auto max-w-4xl flex flex-col lg:flex-row justify-between items-center">
    {/* Logo */}
    <div className="mb-6 lg:mb-0">
      <img src={GVS} alt="GVS Cargo & Logistics" className="h-24 W-44" />
    </div>

    {/* Contact Info */}
    <div className="flex flex-col font-roboto  lg:flex-row max-w-5xl mx-auto items-center space-y-4 lg:space-y-0 lg:space-x-6 text-gray-700">
      <div className="flex items-center space-x-2">
        <MdLocationOn className="text-DarkBlue text-5xl" />
        <span className='text-sm text-left'>OFFICE 22, BLDG 661, RD 1208,  <br /> BLOCK 712 - SALMABAD,  <br />KINGDOM OF BAHRAIN</span>
      </div>
      <div className="flex items-center space-x-2">
        <FaPhoneAlt className="text-white bg-DarkBlue rounded text-4xl p-2" />
        <span className='text-sm '>+973 17491444
        </span>
      </div>
      <div className="flex items-center space-x-2">
        <FaWhatsapp className="text-white bg-DarkBlue text-4xl p-1" />
        <span className='text-sm '>+973 17491444</span>
      </div>
    </div>
  </div>
</div>


      {/* Navigation Menu */}
      <nav className="bg-DarkBlue font-roboto py-7">
      <div className="container max-w-6xl mx-auto flex items-center justify-between">
    {/* Desktop Navigation */}
    <ul className="hidden sm:flex  space-x-3 bg-white py-2 px-10 rounded-full">
        {['Home', 'About Us', 'Freights', 'Services', 'Tools', 'Email'].map((item) => (
            <li className="relative group" key={item}>
                {item === 'Home' ? (
                    // Link only for 'Home' item
                    <a href="/">
                        <button
                            className={`text-black py-2 px-6 flex items-center min-w-[100px] relative`}
                            onClick={() => setSelectedItem(item)}
                        >
                            {item}
                            <span
                                className={`absolute bottom-0 font-roboto left-0 w-full h-1 bg-DarkBlue transition-opacity duration-300 ${
                                    selectedItem === item || 'group-hover:opacity-100 opacity-0'
                                }`}
                            ></span>
                        </button>
                    </a>
                ) : (
                    // No link for other items
                    <button
                        className={`text-black font-roboto py-2 px-4 flex items-center min-w-[100px] relative`}
                        onClick={() => setSelectedItem(item)}
                    >
                        {item}
                        <FaChevronDown className="ml-2" />
                        <span
                            className={`absolute bottom-0 left-0 w-full h-1 bg-DarkBlue transition-opacity duration-300 ${
                                selectedItem === item || 'group-hover:opacity-100 opacity-0'
                            }`}
                        ></span>
                    </button>
                )}
          

        {/* Dropdown Options based on each item */}
        {item === 'About Us' && (
          <div className="absolute hidden group-hover:flex flex-col z-10 bg-white  text-black   lg:w-[256px] -ml-2   rounded">
           <a href="/whoWeAre" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins px-6 text-left">Who We Are</a>
<a href="/whereinUAE" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins px-6">Where We Operate in Bahrain</a>
<a href="/operateWorld" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins px-6">Where We Operate in the World</a>
<a href="/missionvisionandvalues" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins px-6">Mission, Vision, and Values</a>

          </div>
        )}
        {item === 'Freights' && (
          <div className="absolute hidden group-hover:flex flex-col z-10 bg-white text-black  shadow-lg p-2  lg:w-[150px] -ml-2 rounded">
            <a href="/airFreight" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins">Air Freight</a>
            <a href="/seaFreight" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins">Sea Freight</a>
            <a href="/roadFreight" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins">Road Freight</a>
          </div>
        )}
        {item === 'Services' && (
          <div className="absolute hidden group-hover:flex flex-col bg-white z-10 text-black shadow-lg  lg:w-[325px] -ml-2 rounded">
            <a href="/stuffingUnloading" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins  px-6">Stuffing Unloading - GVS Cargo & Logistics</a>
            <a href="/lcl" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins  px-6">LCL - Less Than Container Loaded</a>
            <a href="/fcl" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins  px-6">FCL- Full Container Loaded</a>
            <a href="/customClearance" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins  px-6">Custom Clearance</a>
            <a href="/dgr" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins  px-6">DGR-per-Dangerous perishable Products  </a>
            <a href="/inspection" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins  px-6">Inspection</a>
            <a href="/packaging" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins  px-6">Packaging</a>
            <a href="/storage" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins  px-6">Storage</a>
            <a href="/commercial" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins  px-6">Commercial and logical consultancy</a>
            <a href="/insurance" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins  px-6">International Cargo Insurance</a>
          </div>
        )}
        {item === 'Tools' && (
          <div className="absolute hidden group-hover:flex flex-col z-10 font-roboto bg-white text-black shadow-lg rounded">
          <a href="/incoterms" className="py-4 hover:bg-YellowDark px-4 text-sm">Incoterms </a>
            <a href="/container" className="py-4 hover:bg-YellowDark px-4 text-sm">Container</a>
          </div>
          
        )}
{item === 'Email' && (
  <div className="absolute hidden group-hover:flex flex-col z-10 bg-white text-black lg:w-[256px] -ml-2 rounded">
    <a
      href="mailto:customercare@gvscargo.com"
      className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins px-6 text-left"
    >
      Customer Care
    </a>
    <a
      href="mailto:sales@gvscargo.com"
      className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins px-6 text-left"
    >
      Seller Care
    </a>
    <a
      href="mailto:info@gvscargo.com"
      className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins px-6"
    >
      Business Enquiries
    </a>
  </div>
)}

      </li>
    ))}
  </ul>

  {/* Quote Button */}
  <a href='/contactUs'>
  <button className="hidden sm:block bg-white hover:bg-YellowDark   text-black px-24 py-2 rounded-xl">
    Request a Quote
  </button>
  </a>


    {/* Mobile Navigation */}
    <div className="sm:hidden flex flex-col justify-center items-center text-center h-full mx-auto">
  {/* Toggle Button */}
  <button
    onClick={() => setIsOpen(!isOpen)}
    className="text-white bg-gray-800 p-2 px-32 py-5 rounded-full flex justify-center items-center focus:outline-none"
  >
    {isOpen ? <FaTimes /> : <FaBars />}
  </button>

  {/* Sidebar Menu */}
  <div
    className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 z-40 shadow-lg transition-transform duration-500 ease-in-out transform ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    }`}
  >
    {/* Cross Button */}
    <button
      onClick={() => setIsOpen(false)}
      className="absolute top-4 right-4 text-2xl text-white"
    >
      <FaTimes />
    </button>

    {/* Menu Items */}
    <ul className="mt-10 overflow-y-auto max-h-screen">
      {items.map((item, index) => (
        <li
          key={index}
          className="border-b border-gray-700 px-4 py-4"
        >
          {item === 'Home' ? (
            <Link to="/" className="block w-full text-left">
              <button
                className="w-full text-left flex items-center justify-between font-bold"
                onClick={() => handleToggleDropdown(index)}
              >
                <span>{item}</span>
              </button>
            </Link>
          ) : (
            <button
              className="w-full text-left flex items-center justify-between font-bold"
              onClick={() => handleToggleDropdown(index)}
            >
              <span>{item}</span>
              <FaChevronDown className="text-white ml-2" />
            </button>
          )}

          {/* Dropdowns */}
          {item === 'Services' && openDropdown === index && (
            <div className="flex flex-col bg-gray-700 text-left text-xs font-roboto  items-start text-white rounded mt-2">
              <a href="/stuffingUnloading" className="py-2 px-1 hover:bg-yellow-500 font-thin">Stuffing Unloading - GVS Cargo & Logistics</a>
              <a href="/lcl" className="py-2 px-4 hover:bg-yellow-500 font-thin">LCL - Less Than Container Loaded</a>
              <a href="/customClearance" className="py-3 px-4 hover:bg-yellow-500 font-thin">Custom Clearance</a>
              <a href="/dgr" className="py-2 px-4 hover:bg-yellow-500 font-thin">DGR-per-Dangerous perishable Products</a>
              <a href="/inspection" className="py-2 px-4 hover:bg-yellow-500 font-thin">Inspection</a>
              <a href="/packaging" className="py-2 px-4 hover:bg-yellow-500 font-thin">Packaging</a>
              <a href="/storage" className="py-2 px-4 hover:bg-yellow-500 font-thin">Storage</a>
              <a href="/commercial" className="py-2 px-4 hover:bg-yellow-500 font-thin">Commercial and Logical Consultancy</a>
              <a href="/insurance" className="py-2 px-4 hover:bg-yellow-500 font-thin">International Cargo Insurance</a>
            </div>
          )}

          {item === 'Freights' && openDropdown === index && (
            <div className="flex flex-col bg-gray-700 text-left items-start text-xs  text-white rounded mt-2">
              <a href="/airFreight" className="w-full py-3 px-4 hover:bg-yellow-500 font-thin">Air Freight</a>
              <a href="/seaFreight" className="w-full py-3 px-4 hover:bg-yellow-500 font-thin">Sea Freight</a>
              <a href="/roadFreight" className="w-full py-3 px-4 hover:bg-yellow-500 font-thin">Road Freight</a>
            </div>
          )}

          {item === 'Tools' && openDropdown === index && (
            <div className="flex flex-col bg-gray-700 text-left items-start text-xs  text-white rounded mt-2">
              <a href="/incoterms" className="w-full py-3 px-4 hover:bg-yellow-500 font-thin">IncoTerms</a>
              <a href="/container" className="w-full py-3 px-4 hover:bg-yellow-500 font-thin">Containers</a>
            </div>
          )}

          {item === 'About Us' && openDropdown === index && (
            <div className="flex flex-col bg-gray-700 text-left items-start text-xs text-white rounded mt-2">
              <a href="/whoWeAre" className="w-full py-3 px-4 hover:bg-yellow-500 font-thin">Who We Are</a>
              <a href="/whereinUAE" className="w-full py-3 px-4 hover:bg-yellow-500 font-thin">Where We Operate in UAE</a>
              <a href="/operateWorld" className="w-full py-3 px-4 hover:bg-yellow-500 font-thin">Where We Operate in the World</a>
              <a href="/missionvisionandvalues" className="w-full py-3 px-4 hover:bg-yellow-500 font-thin">Mission, Vision, and Values</a>
            </div>
          )}
           {item === 'Email' && openDropdown === index && (
            <div className="flex flex-col bg-gray-700 text-left items-start text-xs  text-white rounded mt-2">
              <a  href="mailto:customercare@gvscargo.com" className="w-full py-3 px-4 hover:bg-yellow-500 font-thin">Customer Care</a>
              <a href="mailto:sales@gvscargo.com" className="w-full py-3 px-4 hover:bg-yellow-500 font-thin">Seller Care</a>
              <a  href="mailto:info@gvscargo.com" className="w-full py-3 px-4 hover:bg-yellow-500 font-thin">Business Enquiries</a>
            </div>

          )}
        </li>
      ))}
    </ul>




  </div>
  <a href='/contactUs'>
  <button className="mt-4 bg-gray-900 text-white py-2 w-64 rounded-lg shadow-lg focus:outline-none">
    Request a quote
  </button>
  </a>
</div>



  </div>
</nav>
    </div>
  );
};

export default Navbar;
