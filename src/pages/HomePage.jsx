import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaShoppingCart, FaLinkedin, FaPinterest, FaSnapchat } from 'react-icons/fa';
import { FiChevronDown, FiChevronUp, FiMenu, FiX  } from 'react-icons/fi';
import ServiceModal from './Modal';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../index.css";
import PopupModal from './PopupModal';

import {
  FaFacebook,
  FaInstagram,
} from "react-icons/fa6";
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

const HomePage = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showTraining, setShowTraining] = useState(false);
  const [showTrade, setShowTrade] = useState(false);
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);


  const handleLinkClick = (e, setModalState, route) => {
    e.stopPropagation();
    setShowDropdown(false);
    setModalState(true);
    navigate(route);
  };
 
const faqs = [
  {
    question: "What materials do you use for your furniture?",
    answer:
      "We use sustainably sourced wood, recycled metal, and eco-friendly fabrics for all our furniture.",
  },
  {
    question: "Is your furniture durable?",
    answer:
      "Absolutely! Our products go through rigorous testing and are designed to last for many years.",
  },
  {
    question: "Do you offer custom furniture designs?",
    answer:
      "Yes, we specialize in custom orders. Share your ideas with us and we’ll make it happen.",
  },
  {
    question: "How do I place an order?",
    answer:
      "You can order directly through our website or reach out via our contact form or WhatsApp.",
  },
  {
    question: "Do you offer delivery and installation?",
    answer:
      "Yes, we offer both delivery and optional professional installation within select areas.",
  },
  {
    question: "Are reusable pads environmentally friendly?",
    answer:
      "Yes, they are made from biodegradable materials and reduce landfill waste significantly.",
  },
  {
    question: "Can I return or exchange an item?",
    answer:
      "Returns and exchanges are accepted within 14 days, provided the item is unused and in original packaging.",
  },
];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true); // show modal on page load
  }, []);
  
const testimonials = [
    {
     name: "DELE ADERONKE",
      quote:
        "I was blown away by the quality and craftsmanship of my new eco-friendly dining set, knowing it was made from recycled materials is just the cherry on top.",
      rating: 5,
    },
    {
      name: "DELE ADERONKE",
      quote:
        "I was blown away by the quality and craftsmanship of my new eco-friendly dining set, knowing it was made from recycled materials is just the cherry on top.",
      rating: 5,
    },
   {
     name: "DELE ADERONKE",
      quote:
        "I was blown away by the quality and craftsmanship of my new eco-friendly dining set, knowing it was made from recycled materials is just the cherry on top.",
      rating: 5,
    }, 
  ];
  
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <div>

      <PopupModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
    
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
      <section className="relative pt-20">
        <img
          src="/homeimg.png"
          alt="hero"
          className="w-full h-[150%] md:h-[90vh] object-cover"
        />
        <div className="absolute top-0 md:pt-40 left-0 w-full h-full flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Sustainable Luxury, <br /> Crafted for You
          </h1>
          <p className="max-w-xl text-lg mb-6">Eco-furniture that blends style, comfort, and sustainability. Experience home furnishings with a purpose.
          </p>
         <Link to ="/shop"><button className="bg-white text-black px-6 py-2 rounded-full hover:bg-[#013341]">
            Shop Now
          </button></Link>
        </div>

        {/* Floating Icons */}
        <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
         <a href="https://wa.me/2348121091801" target="_blank" rel="noreferrer">
  <FaWhatsapp className="text-green-500 text-5xl bg-green-800 rounded-full shadow-lg p-2" />
</a>

         <Link to="/cart"><FaShoppingCart className="text-gray-800 text-5xl bg-white rounded-full shadow-lg p-2 cursor-pointer" /></Link>
        </div>
      </section>
  <div className="relative w-full h-16 bg-white">
       <img
        src="/ribbon.png"
        alt="Ribbon"
        className="absolute top-0 h-full animate-slide"
        style={{ minWidth: '100%' }} // 
      />
    </div>
      {/* Why Choose Us */}
      <section className="py-16 px-6 md:px-20 bg-[#f9f9f9] text-center">
        <div className="md:flex justify-center items-center gap-5">
            <section className="max-w-3xl  px-6">

      <h2 className="text-4xl md:text-left font-bold text-[#000000] text-center mb-8">Why choose Us?</h2>

      <div className="space-y-6">
        {/* Item 1 */}
        <div className="flex items-start gap-4">
          <img src="/icon1.png" alt="Sustainably Sourced" className="w-10 h-10" />
          <div className='text-justify'> 
            <h3 className="font-bold text-1xl text-[#013341]">SUSTAINABLY SOURCED MATERIALS</h3>
            <p className="text-xs md:text-sm  text-justify text-[#666666]">
              Made from reclaimed wood, bamboo, and upcycled materials.
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex items-start gap-4">
          <img src="/icon2.png" alt="Premium Craftsmanship" className="w-10 h-10" />
          <div className='text-justify'> 
            <h3 className="font-bold text-1xl text-[#013341] ">PREMIUM CRAFTSMANSHIP</h3>
            <p className="text-xs text-justify md:text-sm text-[#666666] ">
              Designed for durability and comfort without compromising on aesthetics.
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex items-start gap-4">
          <img src="/icon3.png" alt="Affordable Luxury" className="w-10 h-10" />
          <div className='text-justify'> 
            <h3 className="font-bold  text-1xl text-[#013341]">AFFORDABLE LUXURY</h3>
            <p className="text-xs md:text-sm text-justify text-[#666666] ">
              High-end designs at prices that don't cost the Earth.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
    <Link to="/explore">  <div className="mt-8 text-sm font-semibold text-[#004E5B]  text-left cursor-pointer">
        EXPLORE OUR DESIGNS
      </div></Link>
    </section>

          <img
            src="/img1.png"
            alt="Why Choose Us"
            className="mt-16 md:mt-0 w-full md:w-1/3 rounded shadow-md"
          />
        </div>
      </section>

      {/* Signature Pieces */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-1xl md:text-2xl text-[#013341] font-bold mb-6 ">
         Our Service
        </h2>
        <h2 className="text-2xl md:text-4xl text-[#013341]  font-Raleway font-bold mb-6 ">
         Transform Your Space <br></br> With Our Signature Pieces
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
  {/* HOME */}
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <Link to="/home">
      <img
        src="/home.png"
        alt="Home"
        className="w-full h-100 object-cover hover:scale-105 transition-transform duration-300"
      />
    </Link>
  </div>

  {/* OFFICE */}
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <Link to="/office">
      <img
        src="/office.png"
        alt="Office"
        className="w-full h-100 object-cover hover:scale-105 transition-transform duration-300"
      />
    </Link>
  </div>

  {/* LANDSCAPE */}
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <Link to="/landscape">
      <img
        src="/landscape.png"
        alt="Landscape"
        className="w-full h-100 object-cover hover:scale-105 transition-transform duration-300"
      />
    </Link>
  </div>

  {/* RESTAURANT */}
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <Link to="/restaurant">
      <img
        src="/restaurant.png"
        alt="Restaurant"
        className="w-full h-100 object-cover hover:scale-105 transition-transform duration-300"
      />    </Link>
  </div>
</div>
  {/* Call to Action */}
     <Link to="/shop"> <div className="mt-8 text-1xl font-semibold text-[#013341]  text-center cursor-pointer">
        SHOP NOW
      </div></Link>
      </section>

     {/* mission Section */}
<section className="py-16 px-6 md:px-20 bg-[#f1f1f1]">
  <div className="flex flex-col md:flex-row items-stretch gap-10">
    {/* Left Column - Image */}
    <div className="w-full md:w-1/2">
      <img
        src="/mission.png"
        alt="Home Style"
        className="w-full h-full object-cover rounded shadow-lg"
      />
    </div>

    {/* Right Column - Text */}
    <div className="w-full md:w-1/2 flex flex-col justify-center">
      <h2 className="text-sm  md:text-1xl text-[#013341]  font-bold mb-3">OUR MISSION</h2>
      <h2 className="text-2xl md:text-4xl text-[#013341] font-bold mb-3 leading-snug">
        Creating different home <br />
        furniture experiences with <br />
        sustainable products
      </h2>
      <p className="text-sm text-[#3F5A5A] text-justify mt-4">
        Our mission is to craft innovative, eco-friendly furniture that not only
        enhances your home but also supports a healthier, more sustainable
        world. Each piece carries a purpose — blending style, comfort, and
        environmental responsibility into every design.
      </p>
    </div>
  </div>
</section>

    <div className="bg-[#013341] text-white flex flex-col items-center px-4 py-12">
      {/* Testimonial Quote */}
<div className="max-w-xl mx-auto flex flex-col md:flex-row items-center gap-6 text-left">
  {/* Avatar Image - Left */}
  <div className="flex-shrink-0">
    <img
      src="/jane.png"
      alt="Testimonial Avatar"
      className="w-48 h-48rounded-full"
    />
  </div>

  {/* Text Content - Right */}
  <div className="max-w-2xl">
    <p className="text-3xl font-semibold leading-snug mb-2">
      “I never knew <br></br>sustainable furniture<br></br> could be this stunning!<br></br> My living space has<br></br> been transformed.”
    </p>
    <p className="mt-1 text-sm">– JANE A</p>
  </div>
</div>
<div className="flex flex-col md:flex-row justify-center items-center mt-12 gap-6 px-4">
  {/* BEFORE Label */}
  <div className="flex-shrink-0">
    <p className="md:rotate-[-90deg] tracking-[0.5em] text-xl md:text-2xl font-bold text-gray-400 mb-4 md:mb-0">
      BEFORE
    </p>
  </div>

  {/* Images */}
  <div className="flex flex-col md:flex-row">
    <img
      src="/before.png"
      alt="Before"
      className="w-full md:w-64 h-60 object-cover rounded-t md:rounded-l md:rounded-tr-none shadow-lg"
    />
    <img
      src="/after.png"
      alt="After"
      className="w-full md:w-64 h-60 object-cover rounded-b md:rounded-r md:rounded-bl-none shadow-lg"
    />
  </div>

  {/* AFTER Label */}
  <div className="flex-shrink-0">
    <p className="md:rotate-[-90deg] tracking-[0.5em] text-xl md:text-2xl font-bold text-gray-400 mt-4 md:mt-0">
      AFTER
    </p>
  </div>
</div>

     
</div>
      {/* Secon Testimonial Quote */}


    <div className="bg-white text-white px-4 py-12">
    <div className="relative max-w-7xl mx-auto">
          <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="text-center py-8 px-4">
              <p className="text-sm  md:text-xl max-w-4xl mx-auto text-[#373737]">“{t.quote}”</p>
              <p className="text-2xl md:text-3xl font-bold mb-4 text-black mt-4">{t.name}</p>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Arrows */}
        <div className="swiper-button-prev flex items-center justify-center !w-12 !h-12 rounded-full bg-[#00363D] shadow-md cursor-pointer">
          <FiChevronLeft className="text-white" style={{ fontSize: "8px" }}/>
        </div>
        <div className="swiper-button-next flex items-center justify-center !w-12 !h-12 rounded-full bg-[#00363D] shadow-md cursor-pointer">
          <FiChevronRight className="text-white"style={{ fontSize: "8px" }} />
        </div>
      </Swiper>
    </div></div>

      {/* Subscribe Section */} 
      <div className="bg-black w-full mt-12 py-10 px-4 text-white text-center">
        <h3 className="text-2xl md:text-3xl  font-semibold mb-2">STAY INSPIRED. LIVE SUSTAINABLY</h3>
        <p className="text-1xl  md:text-2xl text-[#7B7B7B] mb-4">Get exclusive deals, sustainability tips,<br></br> and early access to new collections. </p>
        <form className="flex flex-col gap-4 max-w-md mx-auto w-full">
  <input
    type="email"
    placeholder="Enter your email"
    className="px-4 py-2 bg-[#282828] text-white border border-white rounded-full text-black w-full"
  />
  <div className="flex justify-center">
    <button className="bg-black border border-white text-white font-semibold px-6 py-2 rounded-full">
      SUBSCRIBE
    </button>
  </div>
</form>
 </div>
    <div className="bg-gray-100 py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#00363D] mb-10">
        Frequently asked <br /> Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-xl p-4 shadow">
            <button
              onClick={() => toggle(index)}
              className="flex justify-between items-center w-full"
            >
              <span className="text-left text-1xl  md:text-2xl text-black font-semibold">{faq.question}</span>
             <div
  className={`flex items-center justify-center !w-10 !h-10 rounded-full bg-[#00000033]  shadow-md transition-transform duration-300 ${
    openIndex === index ? "rotate-180" : ""
  }`}
>
  <FiChevronDown
    className="text-[#00363D] "
    style={{ fontSize: "10px" }}
  />
</div>

            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-40 mt-2" : "max-h-0"
              }`}
            >
              <p className="text-sm text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <footer className="bg-black mx-auto text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Logo */}
        <div>
          <img src="/footerlogo.png" alt="Logo" className="h-36 mb-4" />
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-2">CONTACT US</h4>
          <p>Got any questions, send us a message</p>
          <p className="mt-4">07061714506</p>
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

export default HomePage;