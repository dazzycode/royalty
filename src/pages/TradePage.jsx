import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {FaWhatsapp, FaShoppingCart, FaLinkedin, FaPinterest, FaSnapchat } from 'react-icons/fa';
import { FiChevronDown, FiChevronUp, FiMenu, FiX  } from 'react-icons/fi';
import ServiceModal from './Modal';
import { ShieldCheckIcon } from '@heroicons/react/24/solid'

import {
  FaFacebook, FaInstagram
} from "react-icons/fa6";

const TradePage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    message: '',
  });

  const [showDropdown, setShowDropdown] = useState(false);
  const [showTraining, setShowTraining] = useState(false); 
  const [showTrade, setShowTrade] = useState(false);      

  const navigate = useNavigate();

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
                           <img src="/logo.png" alt="Royalty Recycling" className="h-10" />

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
                             <img src="/train.jpg" alt="Trainings" className="w-1/3 h-full object-cover" />
                             <div className="p-4 flex flex-col justify-center">
                               <h3 className="text-lg font-bold mb-1">Trainings</h3>
                               <p className="text-sm text-gray-600 text-justify">Learn sustainable furniture design and production from industry experts — hands-on and future-focused</p>
                             </div>
                           </Link>
           
                           {/* Trade */}
                           <Link to="/trade" onClick={() => setShowDropdown(false)} className="flex bg-gray-100 mt-3 rounded-xl overflow-hidden shadow cursor-pointer transition-transform hover:scale-105">
                             <img src="/sustain-bg.jpg" alt="To the Trade" className="w-1/3 h-full object-cover" />
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
           
                       <Link to="/cart" onClick={closeMobileMenu}><li className="hover:text-[#013341]">Collections</li></Link>
                     </ul>
                   </div>
                 )}
               </nav>
            

      {/* Hero Section */}
      <section className="relative py-10 mt-20 ">
             <img
               src="/sustain-bg.jpg"
               alt="hero"
               className="w-full h-[180%] md:h-[60vh] object-cover"
             />
             <div className="absolute top-0 pt-10 left-0 w-full h-full flex flex-col justify-center items-left text-left text-white px-4">
               <h1 className="text-3xl md:text-5xl font-bold mb-4">Sustainable Designs,<br></br> Tailored to Your Brand.
               </h1>
               <p className="max-w-xl text-sm text-justify mb-6">
                   Bespoke eco-friendly furniture crafted to reflect your brand’s unique style and values. Whether you’re designing a café, office, or boutique space, our sustainable creations blend aesthetics, functionality, and environmental responsibility to make a lasting impact.            </p>
              <div className="flex justify-start">
  <a href="https://wa.me/2348121091801" target="_blank" rel="noreferrer" className="bg-white text-black px-6 py-2 rounded-full hover:bg-[#013341]">
    LET'S COLLABORATE
  </a>
</div>

             </div>
     
             {/* Floating Icons */}
             <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
              <a href="https://wa.me/2348121091801" target="_blank" rel="noreferrer">
  <FaWhatsapp className="text-green-500 text-5xl bg-green-800 rounded-full shadow-lg p-2" />
</a>

             <Link to='/cart'> <FaShoppingCart className="text-gray-800 text-5xl bg-white rounded-full shadow-lg p-2 cursor-pointer" /></Link>
             </div>
           </section> 
       {/* mission Section */}
<section className="py-16 px-6 md:px-20 bg-[#f1f1f1]">
  <div className="flex flex-col md:flex-row items-stretch gap-10">
     {/* Left Column - Image */}
<div className="w-full md:w-1/2">
      <img
        src="/pastoffice2.jpg"
        alt="Home Style"
        className="w-full h-full object-cover rounded shadow-lg"
      />
    </div>
      {/* Right Column - Text */}
    <div className="w-full md:w-1/2 flex flex-col justify-center">
      <h2 className="text-2xl md:text-4xl text-[#1E1E1E] font-bold mb-3 leading-snug">
        Crafted for Businesses, <br></br>Built for Impact.
      </h2>
      <p className="text-sm text-[#1E1E1E] text-justify mt-4">
We partner with designers, business owners, and hospitality brands to create custom, sustainable furniture
 pieces that align with your vision. Whether you’re revamping a restaurant, upgrading your office,
  or furnishing a boutique hotel — our team brings eco-conscious
   craftsmanship and timeless style to life.      </p>
    </div>
       
  </div>
</section>
 <div className="bg-[#013341] text-white py-12 px-6 md:px-20  ">
      {/* Testimonial Quote */}
        <div className="flex flex-col md:flex-row items-stretch gap-10">

  {/*  Image - Left */}
 <div className="w-full md:w-1/2">
      <img
        src="/royalty.jpg"
        alt="Home Style"
        className="w-full h-full object-cover rounded shadow-lg"
      />
    </div>

  {/* Text Content - Right */}
  <div className="max-w-8xl">
     {/* Text Content */}
      <div className="max-w-md text-left mx-5 md:text-left">
  <h2 className="text-3xl md:text-4xl font-bold mb-10">How It Works</h2>
  <div className="space-y-4">

    {/* Step 1 */}
    <div className="flex items-start gap-4">
             <ShieldCheckIcon className="w-10 h-12 text-white  rounded-full p-1" />
 
      <div>
        <h3 className="text-xl md:text-2xl font-bold">CONSULTATION</h3>
        <p className="text-sm mt-1">Share your vision, space requirements, and style choices.</p>
      </div>
    </div>

    {/* Step 2 */}
    <div className="flex items-start gap-4">
              <ShieldCheckIcon className="w-10 h-12 text-white  rounded-full p-1" />

      <div>
        <h3 className="text-xl md:text-2xl font-bold">CONCEPT DESIGN</h3>
        <p className="text-sm mt-1">Our team ideates, and provides unique designs for you.</p>
      </div>
    </div>

    {/* Step 3 */}
    <div className="flex items-start gap-4">
      <ShieldCheckIcon className="w-10 h-12 text-white  rounded-full p-1" />

      <div>
        <h3 className="text-xl md:text-2xl font-bold">CRAFTING PROCESS</h3>
        <p className="text-sm mt-1">Handcrafting using sustainable materials, ensuring quality and durability.</p>
      </div>
    </div>
    {/* Step 4*/}
    <div className="flex items-start gap-4">
      <ShieldCheckIcon className="w-10 h-12 text-white  rounded-full p-1" />

      <div>
        <h3 className="text-xl md:text-2xl font-bold">DELIVERY & SETUP</h3>
        <p className="text-sm mt-1">Finished pieces delivered, ready to transform your space.</p>
      </div>
    </div>


  </div>
  </div>
  </div>   
</div>
</div>
   {/* PAST TRADE PROJECTS */}
<section className="bg-white py-16 px-6 md:px-20">
  <h2 className="text-2xl md:text-5xl font-bold mb-2">Past Trade Projects</h2>
  <p className="text-sm text-gray-600 mb-8">See Our Creations in Action</p>

  {/* Image Grid - Custom Layout */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="col-span-1 md:col-span-1 row-span-1">
      <img src="/new.png" alt="Project 1" className="w-full h-full object-cover rounded" />
    </div>
    <div className="col-span-1 md:col-span-2 row-span-2">
      <img src="/clock.jpg" alt="Project 2" className="w-full h-full object-cover rounded" />
    </div>
    <div className="col-span-1 md:col-span-1 row-span-1">
      <img src="/pastoffice3.jpg" alt="Project 3" className="w-full h-full object-cover rounded" />
    </div>
    <div className="col-span-1 md:col-span-1 row-span-1">
      <img src="/nude.jpg" alt="Project 4" className="w-full h-full object-cover rounded" />
    </div>
    <div className="col-span-1 md:col-span-1 row-span-1">
      <img src="/flex.jpg" alt="Project 5" className="w-full h-full object-cover rounded" />
    </div>
    
  </div>
</section>

<section
  className="relative w-full min-h-[550px] bg-cover bg-center bg-no-repeat flex items-center justify-center px-6 md:px-20"
  style={{ backgroundImage: "url('/pastoffice.jpg')" }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/60 z-0" />

  {/* Content on top of overlay */}
  <div className="relative z-10 max-w-2xl text-left text-white">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
      Ready to Design Sustainable,<br /> Standout Spaces?
    </h2>
    <p className="text-sm md:text-base mb-6">
      Collaborate with us to bring your vision to life in a way that’s impactful and eco-friendly.
    </p>

<div className="flex justify-start">
          <a href="https://wa.me/2348121091801" target="_blank" rel="noreferrer"
   className="bg-white text-black px-6 py-2 rounded-full hover:bg-[#013341] flex items-center gap-2">
    <FaWhatsapp className="text-green-500 text-lg" />
    Get Started Today
  </a>
</div>


  </div>
</section>



      {/* Footer */}
      <footer className="bg-black items-center  text-white py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          <div>
            <img src="/footerlogo.png" alt="Logo" className="h-36 mb-4" />
          </div>
          <div>
            <h4 className="font-semibold mb-2">CONTACT US</h4>
            <p>Got any questions, send us a message</p>
 <p className="mt-4">+2348131961358</p>
                        <p className="mt-4">+2348121091801</p> <a href="mailto:royaltyrecyclinghub@gmail.com">
 <p>royaltyrecyclinghub@gmail.com</p></a>
            <div className="flex gap-4 mt-4">
              <a href="https://www.facebook.com/share/1HjT7HANDG/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-white bg-[#00363D] rounded-full p-2 w-8 h-8" />
              </a>
              <a href="https://www.instagram.com/royalty_ecofurnishings?igsh=OGxxbnB3dzc1dTF2" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-white bg-[#00363D] rounded-full p-2 w-8 h-8" />
              </a>
              <a href="https://www.linkedin.com/posts/royalty-recycling-hub_wearelasu-sustainabilityinaction-circulareconomy-activity-7341504216324042752-Exx_?utm_source=share&utm_medium=member_android&rcm=ACoAAB8SayMB8Jk2zk22r9kpOSugsRVCI2b0wmc" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-white bg-[#00363D] rounded-full p-2 w-8 h-8" />
              </a>
               <a href="https://pin.it/5cMbLjOYn" target="_blank" rel="noopener noreferrer">
                <FaPinterest className="text-white bg-[#00363D] rounded-full p-2 w-8 h-8" />
              </a>
               <a href="https://www.snapchat.com/add/eco-furnishings?share_id=hDcqEzn68mc&locale=en-GB" target="_blank" rel="noopener noreferrer">
                <FaSnapchat className="text-white bg-[#00363D] rounded-full p-2 w-8 h-8" />
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
                          <a href="mailto:royaltyrecyclinghub@gmail.com">
  <li>Contact us</li>
</a>
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

export default TradePage;
