import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaPinterest, FaShoppingCart, FaSnapchat } from 'react-icons/fa';
import { FiChevronDown, FiChevronUp, FiMenu, FiX  } from 'react-icons/fi';
import { FaFacebook, FaInstagram} from 'react-icons/fa6';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ServiceModal from './Modal';

const ProductDetails = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showTraining, setShowTraining] = useState(false);
  const [showTrade, setShowTrade] = useState(false);
  const [selectedColor, setSelectedColor] = useState('bg-red-500');
  const [showPopup, setShowPopup] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const colors = ['bg-black', 'bg-[#7E9EDB]', 'bg-white'];
  const products = [
    {
      id: 1,
      image: '/pastoffice.jpg',
      title: 'EQUALIZE SOFA',
      description:
        'EQUALIZE SOFA is crafted from sustainable wood and organic lines. This eco-luxe sofa offers a perfect blend of sustainability and comfort. Designed for durability, its plush cushioning and sturdy frame make it an eco-conscious addition to any modern home.',
      material: 'Trees and Wood',
      timeline: '7 TO 14 WORKDAYS',
      price: '₦250,000',
    },
    {
      id: 2,
      image: '/pastoffice2.jpg',
      title: 'NATURENEST SOFA',
      description:
        'This sofa offers nature-inspired relaxation with breathable, eco-friendly fabric. Ideal for serene, minimalistic spaces.',
      material: 'Recycled Fabric',
      timeline: '5 TO 10 WORKDAYS',
      price: '₦850,000',
    },
    {
      id: 3,
      image: '/pastoffice3.jpg',
      title: 'URBANLUXE CHAIR',
      description:
        'Designed for urban sustainability, this piece blends style and ethics — a perfect accent for conscious living.',
      material: 'Upcycled Steel & Cotton',
      timeline: '10 TO 14 WORKDAYS',
      price: '₦690,000',
    },
  ];

  const handleAddToCart = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3500);
  };

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);
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
           
          
      {/* Product Slider */}
      <div className="pt-28">
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 5000 }}
          loop={true}
          navigation={{
            nextEl: '.next-btn',
            prevEl: '.prev-btn',
          }}
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[350px] w-full">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
              </div>
              {/* Custom Pagination + Arrows */}
        <div className="flex justify-between items-center px-6 md:px-20 mt-4">
          <div className="flex gap-2">
            {products.map((_, i) => (
              <div
                key={i}
                className={`w-8 h-[4px] ${i === activeIndex ? 'bg-black' : 'bg-gray-300'}`}
              />
            ))}
          </div>
          <div className="flex gap-3">
            <button ref={prevRef} className="prev-btn w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-100">←</button>
            <button ref={nextRef} className="next-btn w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-100">→</button>
          </div>
        </div>
              <div className="px-6 md:px-20 py-10 bg-white">
                <h2 className="text-lg font-semibold mb-4">{product.title}</h2>
                <p className="text-sm text-gray-700 leading-relaxed max-w-2xl mb-6">{product.description}</p>
                <div className="text-sm space-y-6">
                  <div><p className="font-semibold">PRODUCTION MATERIAL</p><p>{product.material}</p></div>
                  <div>
                    <p className="font-semibold">COLORS AVAILABLE</p>
                    <div className="flex gap-4 mt-2">
                      {colors.map((color, index) => (
                        <div
                          key={index}
                          className={`w-6 h-6 rounded-full border-2 cursor-pointer ${color} ${selectedColor === color ? 'ring-2 ring-black' : ''}`}
                          onClick={() => setSelectedColor(color)}
                        />
                      ))}
                    </div>
                  </div>
                  <div><p className="font-semibold">PRODUCTION TIMELINE</p><p>{product.timeline}</p></div>
                  <div><p className="font-semibold">PRICE</p><p className="text-xl font-bold mt-1">{product.price}</p></div>
                  <button
                    onClick={handleAddToCart}
                    className="mt-4 bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
 </div>

      {/* Footer */}
      <footer className="bg-black text-white py-10 px-4 mt-20 w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          <div><img src="/footerlogo.png" alt="Logo" className="h-36 mb-4" /></div>
          <div>
            <h4 className="font-semibold mb-2">CONTACT US</h4>
            <p>Got any questions? Send us a message</p>
 <p className="mt-4">+2348131961358</p>
                        <p className="mt-4">+2348121091801</p>             <a href="mailto:royaltyrecyclinghub@gmail.com">
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
        <div className="mt-6 text-xs text-center">
          <p>© 2025 Royalty Recycling Hub. All rights reserved.</p>
        </div>
      </footer>

      {/* Modals */}
      <ServiceModal isOpen={showTraining} onClose={() => setShowTraining(false)} />
      <ServiceModal isOpen={showTrade} onClose={() => setShowTrade(false)} />

      {/* Cart Popup */}
      {showPopup && (
        <div className="fixed top-20 right-6 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg z-50">
          ✅ You have successfully added to cart!
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
