
import React from 'react';
import { Link } from 'react-router-dom';

const PopupModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
  <div
  className="
    fixed inset-0 
    bg-black bg-opacity-50 
    flex justify-center items-start 
    z-50 
    p-4 my-20
    overflow-x-hidden
  "
>
  <div
    className="
      relative 
      bg-white 
      shadow-lg 
      grid grid-cols-1 md:grid-cols-[280px_1fr] 
      gap-6 
      rounded-lg 
      w-full 
      mx-auto 
      p-6 
      max-h-[95vh] 
      overflow-y-auto

      sm:max-w-full 
      md:max-w-2xl 
      lg:max-w-4xl 
      md:mt-20
    "
    style={{ minHeight: '300px' }}
  >
    {/* Close Button */}
    <button
      className="absolute top-4 right-4 bg-black rounded-full p-2 hover:bg-gray-300 shadow-md"
      onClick={onClose}
      aria-label="Close modal"
    >
      <svg
        className="w-5 h-5 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    {/* Image Section */}
    <div className="flex justify-center items-center">
      <img
        src="/man.jpg"
        alt="EcoSofa"
        className="w-full h-auto max-w-[260px] rounded-lg object-cover"
      />
    </div>

    {/* Content Section */}
    <div className="flex flex-col justify-between">
      <div>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-black font-Laxenda-Giga mb-4">
          Introducing the <br /> Royalty EcoSofa!
        </h2>
        <h3 className="text-md md:text-lg font-semibold text-black mb-3">
          Sleek. Stylish. Sustainable.
        </h3>
        <p className="text-gray-700 text-sm md:text-base text-justify mb-4">
          Crafted with precision from recycled materials, this statement piece doesn’t just elevate your space — it tells a story of renewal and responsibility.
        </p>
        <p className="text-sm md:text-base mb-4">
          <strong>Features:</strong> Stylish, durable, eco-friendly, and comfortable.
        </p>
      </div>

      {/* CTA Button */}
      <Link to="/shop" className="self-start mt-2">
        <button className="bg-white border border-black rounded-full text-black px-6 py-2 hover:bg-[#013341] hover:text-white transition">
          SHOP YOURS NOW
        </button>
      </Link>
    </div>
  </div>
</div>

  );
};

export default PopupModal;
