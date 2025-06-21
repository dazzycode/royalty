import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { FiChevronDown, FiChevronUp, FiMenu, FiX } from 'react-icons/fi';
import ServiceModal from './Modal';

import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const TrainPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    message: '',
  });

  const [showDropdown, setShowDropdown] = useState(false);
  const [showTraining, setShowTraining] = useState(false); 
  const [showTrade, setShowTrade] = useState(false);       


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  const toggleDropdown = () => setShowDropdown(!showDropdown);
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

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
    <div className='font-sans'>

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
      <div className="relative pt-20">
        <img src="/train.png" alt="hero" className="w-full h-[50vh] object-cover" />
      </div>

      {/* Main Content */}
      <div className="flex pt-20 flex-col md:flex-row font-sans items-start justify-center min-h-screen bg-gray-100 p-6 gap-8">
        {/* Form Section */}
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            Empower Yourself — Master<br></br> the Art of
            Sustainable <br></br>Craftsmanship with
            Royalty <br></br>Recycling Hub!
          </h1>
          <p className="text-gray-600 text-justify mb-6 max-w-4xl">
            Join our hands-on training program and master the art of transforming <br />
            discarded materials into valuable, eco-friendly creations.<br />
            Fill out the form below to start your journey toward<br />
            sustainable craftsmanship!
          </p>

          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <div>
              <label htmlFor="fullName" className="block mb-1 font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block mb-1 font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 font-medium text-gray-700">
                Why did you participate?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message..."
                required
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#013341] text-white py-2 px-6 rounded-full hover:bg-blue-700 transition"
              >
                Submit Form
              </button>
            </div>
          </form>
        </div>

        {/* Newsletter */}
        <div className="w-full md:w-1/3 bg-[#013341] text-white p-6 shadow-lg py-10 rounded-[3rem]">
          <h2 className="text-4xl font-semibold mb-4">Subscribe to our Newsletter</h2>
          <p className="mb-4 text-justify">
            Be the First to Hear from Royalty Recycling Hub!<br />
            Get exclusive updates on our latest programs,<br />
            sustainable innovations, and community<br />
            projects — straight to your inbox.
          </p>
          <form
            className="flex flex-col space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Subscribed!');
            }}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="px-3 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white text-black"
              required
            />
            <button
              type="submit"
              className="bg-black text-white rounded-full font-semibold py-2 px-4 hover:bg-gray-600 transition"
            >
              Subscribe
            </button>
          </form>
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
    </div>
  );
};

export default TrainPage;
