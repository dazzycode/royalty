import React, { useState, useEffect, } from 'react';
import { FaLinkedin, FaPinterest, FaShoppingCart, FaSnapchat } from 'react-icons/fa';
import { FiChevronDown, FiChevronUp, FiMenu, FiX  } from 'react-icons/fi';
import PopupModal from './PopupModal';
import ServiceModal from './Modal';
import { useNavigate, Link } from 'react-router-dom';

import {
  FaFacebook,
  FaInstagram
} from "react-icons/fa6";

const BlogPage = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showTraining, setShowTraining] = useState(false);
  const [showTrade, setShowTrade] = useState(false);
  const [showModal, setShowModal] = useState(false);
 const [expandedPostId, setExpandedPostId] = useState(null);

  const toggleReadMore = (id) => {
    setExpandedPostId((prevId) => (prevId === id ? null : id));
  };

  useEffect(() => {
    setShowModal(true); // Show popup modal on page load
  }, []);
const navigate = useNavigate();

  const toggleDropdown = () => setShowDropdown(!showDropdown);
const blogPosts = [
  {
    id: 1,
    title: "Designing for a Greener Future: The Role of Interior Designers in Sustainable Furniture Design",
    image: "/explore1.png",
    date: "Nov 10, 2024",
details: (
      <div>
        <h3 className="text-lg font-semibold mb-2">
          Designing for a Greener Future: The Role of Interior Designers in Sustainable Furniture Design
        </h3>
        <p className="mb-2">
          As interior designers, we have the power to shape the spaces where people live, work, and interact...
        </p>

        <h4 className="font-semibold mb-1">Why Sustainable Furniture Design Matters</h4>
        <p className="mb-2">The furniture industry has a significant impact on the environment...</p>
        <ul className="list-disc pl-5 text-sm mb-2">
          <li>Conserving natural resources</li>
          <li>Reducing greenhouse gas emissions</li>
          <li>Minimizing waste and promoting recycling</li>
          <li>Creating healthier indoor environments</li>
        </ul>

        <h4 className="font-semibold mb-1">How Designers Can Help</h4>
        <ul className="list-disc pl-5 text-sm mb-2">
          <li><strong>Specify eco-friendly materials:</strong> Choose materials that are sustainable...</li>
          <li><strong>Design for longevity:</strong> Create timeless and durable designs...</li>
          <li><strong>Select sustainable furniture:</strong> Choose low-impact, recyclable pieces...</li>
          <li><strong>Educate clients:</strong> Promote environmental awareness...</li>
          <li><strong>Incorporate sustainable practices:</strong> Use digital tools, reduce waste...</li>
        </ul>

        <h4 className="font-semibold mb-1">Best Practices</h4>
        <ul className="list-disc pl-5 text-sm mb-2">
          <li>Using reclaimed or recycled materials</li>
          <li>Choosing local and sustainably sourced furniture</li>
          <li>Designing for recyclability and modularity</li>
        </ul>

        <p className="text-sm">Join now and show your skills!</p>
      </div>
    ),
  },

  {
    id: 3,
    title: "The Role of Businesses in Sustainable Waste Management",
    image: "/explore1.png",
    date: "Nov 6, 2024",
      details: "We’re excited to launch the upcoming tournament with new rewards and formats..."

  },
];
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    setShowModal(true); // Show popup modal on page load
  }, []);




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
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12 font-sans text-gray-800">
      {/* Main Blog Content */}
      <div className="lg:col-span-2">
        <p className="text-xs text-[#013341] font-semibold uppercase mb-2">
          Featured Story
        </p>
        <h1 className="text-2xl md:text-4xl mt-10 font-bold mb-4 text-black leading-snug">
         The Power of Sustainable<br></br> Recycling: How Royalty<br></br> Recycling Hub is Leading the Change
        </h1>
        <p className="text-sm text-gray-500 mb-6">Nov 6, 2024</p>

        <img
          src="/blog.png"
          alt="featured"
          className="w-full h-auto rounded-md object-cover mb-6"
        />

        <h3 className="text-xl font-semibold mb-2">
          Introducing Sustainable Waste Solutions
        </h3>
        <p className="text-sm leading-relaxed  text-justify text-gray-700 mb-4">
        At Royalty Recycling Hub, we are passionate about creating beautiful, functional pieces that not only enhance your space but also contribute to a healthier planet. Our objective is to redefine luxury through sustainable design, using reclaimed materials to craft unique, eco-friendly furnishings.
 </p>
  <h3 className="text-xl font-semibold mb-2">
The Story Behind Our Materials
        </h3>
        <p className="text-sm text-justify leading-relaxed text-gray-700 mb-4">
         We believe that good design should not come at the expense of the environment. That is why we source reclaimed materials, giving old materials a new life and reducing waste. From reclaimed wood to repurposed tyres, every piece tells a story of transformation and renewal.
</p>
<h3 className="text-xl font-semibold mb-2">
Our Design Philosophy
        </h3>
        <p className="text-sm text-justify leading-relaxed text-gray-700 mb-4">
        Our team of skilled artisans and designers work tirelessly to breathe new life into salvaged materials. Each piece is carefully crafted to showcase a unique furniture experience , while also meeting the highest standards of quality and functionality. </p>
       <h3 className="text-xl font-semibold mb-2">
Benefits of Reclaimed Materials
        </h3>
        <p className="text-sm text-justify leading-relaxed text-gray-700">
         By choosing reclaimed materials, we are not only reducing waste but also: </p>
         <ul>
          <li  className="text-sm text-justify leading-relaxed text-gray-700"> Preserving nature </li>
                             <li className="text-sm text-justify leading-relaxed text-gray-700"> Preserving nature </li>
 <li className="text-sm text-justify leading-relaxed text-gray-700" > Creating unique, one-of-a-kind pieces </li>
                      </ul>
                      <h3 className="text-xl font-semibold mb-2">
Join the Movement
        </h3>
        <p className="text-sm text-justify leading-relaxed text-gray-700 mb-4">
At Royalty Recycling Hub, we invite you to experience the beauty of sustainable luxury. Our eco-friendly furnishings are not just luxurious– they are also a statement about the kind of world we want to create. Join us in our commitment to sustainability, and let's create a better future, one piece of furniture at a time.
</p>
   <h3 className="text-xl font-semibold mb-2">
Explore Our Collection
        </h3>
        <p className="text-sm text-justify leading-relaxed text-gray-700 mb-4">
Discover our latest creations, each one a testament to the power of sustainable design. From statement pieces to functional essentials, our collection showcases the best of eco-friendly furnishings.
</p>
 <h3 className="text-xl font-semibold mb-2">
Let's Get in Touch
        </h3>
        <p className="text-sm text-justify leading-relaxed text-gray-700 mb-4">
Ready to learn more about our sustainable design process or commission a custom piece? Contact us today to start the conversation.
</p>
      </div>

      {/* Sidebar */}
      <div className="lg:col-span-1">
        <h3 className="text-lg font-semibold mb-4">Other stories</h3>

<div className="space-y-6">

    <div>
      {blogPosts.map((post) => (
        <div key={post.id} className="block hover:opacity-80 transition mb-4">
          <div className="flex gap-4">
            <img
              src={post.image}
              alt={post.title}
              className="w-20 h-20 object-cover rounded-md"
            />
            <div>
              <h4 className="text-sm font-medium leading-snug mb-1">
                {post.title}
              </h4>
              <p className="text-xs text-gray-500">{post.date}</p>
            </div>
          </div>

          {/* Show details when expanded */}
          {expandedPostId === post.id && (
            <p className="text-sm text-justify text-gray-300 mt-2">{post.details}</p>
          )}

          <button
            onClick={() => toggleReadMore(post.id)}
            className="text-blue-400 text-xs mt-2 hover:underline"
          >
            {expandedPostId === post.id ? "Show less" : "Read more"}
          </button>
        </div>
      ))}
    </div>
 
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
      <PopupModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default BlogPage;
