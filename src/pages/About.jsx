import React, { useState, useEffect, } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { FiChevronDown, FiChevronUp,  FiMenu, FiX  } from 'react-icons/fi';
import PopupModal from './PopupModal';
import ServiceModal from './Modal';
import { useNavigate, Link } from 'react-router-dom';

import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const About = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showTraining, setShowTraining] = useState(false);
  const [showTrade, setShowTrade] = useState(false);
  const [showModal, setShowModal] = useState(false);
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    setShowModal(true); // Show popup modal on page load
  }, []);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

 const navigate = useNavigate();


function ShoppingCart({ isActive = true }) {
  return (
    <div className="relative inline-block">
      <FaShoppingCart className="text-2xl text-gray-800" />
      {isActive && (
        <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-600 rounded-full border-2 border-white"></span>
      )}
    </div>
  );
}

  return (
    <div className="font-sans">
      {/* Navigation */}
       
      <nav className="flex justify-between items-center px-6 py-6 shadow-md bg-white fixed w-full top-0 z-50">
           <Link to="/">
             <img src="/logo.png" alt="Petabyte Esports" className="h-10" />
           </Link>
     
           {/* Desktop Menu */}
           <ul className="hidden md:flex gap-6 text-lg font-medium items-center">
             <Link to="/"><li className="hover:text-[#013341] cursor-pointer">Home</li></Link>
             <Link to="/shop"><li className="hover:text-[#013341] cursor-pointer">Shop</li></Link>
             <Link to="/about"><li className="hover:text-[#013341] cursor-pointer">About us</li></Link>
     
             {/* SERVICE Dropdown */}
             <li className="relative">
               <button
                 onClick={toggleDropdown}
                 className="flex items-center gap-1 hover:text-[#013341]"
               >
                 Service {showDropdown ? <FiChevronUp /> : <FiChevronDown />}
               </button>
     
               {showDropdown && (
                 <div className="absolute top-full mt-4 left-0 bg-white border rounded-xl shadow-lg w-96 z-50 p-4">
                   <div className="grid grid-cols-1 gap-4">
                     {/* Trainings */}
                     <Link to="/training" onClick={() => setShowDropdown(false)} className="flex bg-gray-100 rounded-xl overflow-hidden shadow cursor-pointer transition-transform hover:scale-105">
                       <img src="/training.png" alt="Trainings" className="w-1/3 h-full object-cover" />
                       <div className="p-4 flex flex-col justify-center">
                         <h3 className="text-lg font-bold mb-1">Trainings</h3>
                         <p className="text-sm text-gray-600 text-justify">Learn sustainable furniture design and production from industry experts — hands-on and future-focused</p>
                       </div>
                     </Link>
     
                     {/* Trade */}
                     <Link to="/trade" onClick={() => setShowDropdown(false)} className="flex bg-gray-100 mt-3 rounded-xl overflow-hidden shadow cursor-pointer transition-transform hover:scale-105">
                       <img src="/trading.png" alt="To the Trade" className="w-1/3 h-full object-cover" />
                       <div className="p-4 flex flex-col justify-center">
                         <h3 className="text-lg font-bold mb-1">To the trades</h3>
                         <p className="text-sm text-gray-600 text-justify">Tailored designs for your brand — collaborate with us to craft bespoke, sustainable furniture that reflects your style and vision.</p>
                       </div>
                     </Link>
                   </div>
                 </div>
               )}
             </li>
           </ul>
     
           {/* Cart and Shop Now */}
           <div className="hidden md:flex gap-4 items-center">
             <Link to="/cart" className="flex items-center gap-4">
               <ShoppingCart isActive={true} />
             </Link>
             <Link to="/shop">
               <p className="mx-4 cursor-pointer hover:text-[#013341]">Shop Now</p>
             </Link>
           </div>
     
           {/* Mobile Menu Button */}
           <button
             className="md:hidden text-2xl text-black"
             onClick={toggleMobileMenu}
           >
             {isMobileMenuOpen ? <FiX /> : <FiMenu />}
           </button>
     
           {/* Mobile Dropdown */}
           {isMobileMenuOpen && (
             <div className="absolute top-20 left-0 w-full bg-white z-40 px-6 py-4 shadow-md md:hidden">
               <ul className="flex flex-col gap-4 text-lg font-medium">
                 <Link to="/" onClick={closeMobileMenu}><li className="hover:text-[#013341]">Home</li></Link>
                 <Link to="/shop" onClick={closeMobileMenu}><li className="hover:text-[#013341]">Shop</li></Link>
                 <Link to="/about" onClick={closeMobileMenu}><li className="hover:text-[#013341]">About us</li></Link>
     
                 {/* Optionally render service links directly in mobile menu */}
                 <Link to="/training" onClick={closeMobileMenu}><li className="hover:text-[#013341]">Trainings</li></Link>
                 <Link to="/trade" onClick={closeMobileMenu}><li className="hover:text-[#013341]">To the trades</li></Link>
     
                 <Link to="/cart" onClick={closeMobileMenu}><li className="hover:text-[#013341]">Cart</li></Link>
               </ul>
             </div>
           )}
         </nav>
      
     

     {/* Hero Section */}
         <div className=" items-center  mx-auto px-4 py-40 grid grid-cols-1 lg:grid-cols-2 gap-12 font-sans text-gray-800">

      {/* Image Section */}
      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
        <img
          src="/about.png"
          alt="Ruth Oladoja"
          className=""
        />
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-semibold mb-4">MEET RUTH OLA DOJA</h2>
        <p className="text-sm leading-relaxed text-justify text-gray-700 mb-4">
          Waste management is a critical part of building a greener, healthier
          planet—yet it's often overlooked. At Royalty Recycling Hub, a local
          leader in sustainability, the mission is clear: empower communities
          through eco-conscious initiatives and close the loop on waste.
        </p>
        <p className="text-sm leading-relaxed  text-justify text-gray-700 mb-4">
          With a proven track record of launching high-impact recycling programs,
          Royalty is not just talking about change—they’re making it happen.
        </p>
        <p className="text-sm leading-relaxed text-justify text-gray-700 mb-4">
          From upcycling furniture to educating youth on sustainable practices,
          the hub is redefining what community-based sustainability looks like.
        </p>
        <p className="text-sm leading-relaxed text-justify  text-gray-700">
          Building a cleaner future requires everyone to play a role—from local
          government to private recyclers to everyday citizens. Royalty
          Recycling Hub is proving it's not only possible, it’s powerful.
        </p>
        <div className="flex gap-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-white bg-[#00363D] rounded-full p-2 w-8 h-8" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-white bg-[#00363D] rounded-full p-2 w-8 h-8" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="text-white bg-[#00363D] rounded-full p-2 w-8 h-8" />
              </a>
            </div>
      </div>
  
      </div>
 

 
 
      {/* Footer */}
      <footer className="bg-black mx-auto text-white py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          <div>
            <img src="/footerlogo.png" alt="Logo" className="h-36 mb-4" />
          </div>
          <div>
            <h4 className="font-semibold mb-2">CONTACT US</h4>
            <p>Got any questions, send us a message</p>
            <p className="mt-4">07061714506</p>
            <p>royaltyrecyclinghub@gmail.com</p>
            <div className="flex gap-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-white bg-[#00363D] rounded-full p-2 w-8 h-8" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-white bg-[#00363D] rounded-full p-2 w-8 h-8" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="text-white bg-[#00363D] rounded-full p-2 w-8 h-8" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Pages</h4>
            <ul className="space-y-1">
                           <Link to="/"> <li>Home</li></Link>
             <Link to="/shop"> <li>Shop</li></Link>
             <Link to="/about"> <li>About us</li></Link>
              <Link to="/blog"> <li>Blog</li></Link>
                           <Link to=""> <li>Contact us</li></Link>

            </ul>
          </div>
        </div>
       <div className="mt-6 text-xs text-center md:text-right">
  <p>
    Royalty Recycling Hub copyright ©2025
  </p>
</div>

      </footer>

      {/* Modals */}
      <ServiceModal isOpen={showTraining} onClose={() => setShowTraining(false)} />
      <ServiceModal isOpen={showTrade} onClose={() => setShowTrade(false)} />
      <PopupModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default About;
