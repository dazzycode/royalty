import React, { useState } from "react";
import { FiChevronDown, FiChevronUp, FiMenu, FiX  } from "react-icons/fi";
import { FaLinkedin, FaPinterest, FaShoppingCart, FaSnapchat } from "react-icons/fa";
import { useNavigate, Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram
} from "react-icons/fa6";
import ServiceModal from './Modal';

const initialCart = [
  {
    id: 1,
    title: " Eco Wall clock",
    price: 35000,
    image: "/clock.jpg",
    quantity: 1,
  },
  {
    id: 2,
    title: "Eco Centre Table",
    price: 212000
,
    image: "/nude.jpg",
    quantity: 1,
  },
  {
    id: 3,
    title: " Eco Puff Chair",
    price:  80000,
    image: "/collections.jpg",
    quantity: 1,
  },
];

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState(initialCart);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showTraining, setShowTraining] = useState(false);
  const [showTrade, setShowTrade] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const formatCurrency = (value) =>
    `₦${value.toLocaleString("en-NG", { minimumFractionDigits: 0 })}`;

 
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
    <div className="mx-2 font-sans text-black">
      {/* Navbar */}
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
           
      {/* Back Button */}
      <div className="mt-24"> {/* Push content below navbar */}
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-gray-600 mb-6 hover:underline"
        >
          ← Go Back
        </button>
        <h2 className="text-2xl font-semibold mb-6"> Collections</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-8">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-6 items-start">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-28 h-28 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm mb-4 my-1">{formatCurrency(item.price)}</p>
                
                   <a href="https://wa.me/2348121091801" target="_blank" rel="noreferrer"
                    className="mt-4 px-4 py-1 bg-[#B8AA90] text-black hover:bg-[#004E5B] rounded"
                  >
                    Shop
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="border p-6 rounded-md">
            <h4 className="text-lg font-semibold mb-4">New In</h4>
            <div className="flex justify-between mb-2 text-sm">
              <span>Get updates on latest collections</span>
            </div>
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
              className="bg-black text-white font-semibold py-2 px-4 hover:bg-gray-600 transition"
            >
              Subscribe
            </button>
          </form>
          
          </div>
        </div>
      </div>
   <footer className="bg-black mt-20 w-full text-white py-10 px-4">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
    {/* Logo */}
    <div>
      <img src="/footerlogo.png" alt="Logo" className="h-36 mb-4" />
    </div>

    {/* Contact */}
    <div>
      <h4 className="font-semibold mb-2">CONTACT US</h4>
      <p>Got any questions, send us a message</p>
  <p className="mt-4">+2348131961358</p>
                        <p className="mt-2">+2348121091801</p>
                               <a href="mailto:royaltyrecyclinghub@gmail.com">
 <p>royaltyrecyclinghub@gmail.com</p></a>
      {/* Social icons */}
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

  <div className="mt-6 text-xs text-center md:text-right max-w-7xl mx-auto">
    <p>Royalty Recycling Hub copyright ©2025</p>
  </div>
</footer>


     {/* Modals */}
      <ServiceModal isOpen={showTraining} onClose={() => setShowTraining(false)} />
      <ServiceModal isOpen={showTrade} onClose={() => setShowTrade(false)} />
    </div> 

  );
};

export default Cart;
