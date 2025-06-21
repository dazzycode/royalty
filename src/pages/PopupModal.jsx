
import React from 'react';
import { Link } from 'react-router-dom';

const PopupModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div
      className="
        fixed inset-0 
        bg-black bg-opacity-50 
        flex justify-center 
        items-start 
        z-50 
        p-4
        py-5
      "
    >
      <div
  className="
    relative 
    bg-white 
    shadow-lg 
    w-full 
    p-6 
    grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6
    overflow-hidden

    /* Mobile styles */
    max-h-[100vh] w-full mx-2 my-20 rounded-lg overflow-y-auto

    /* Desktop styles */
    md:rounded-lg md:max-w-4xl md:h-[70vh] md:mt-20 md:max-h-[calc(100vh-5rem)]
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
            className="w-5 h-5 text-gray-600"
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
            src="/popup.png"
            alt="EcoSofa"
            className="w-full h-auto max-w-[280px] rounded-lg object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-2xl md:text-5xl  font-semibold text-black font-Laxenda Giga mb-4">Introducing the <br></br>Royalty EcoSofa!</h2>
                        <h2 className="text-xl font-semibold text-black font-Laxenda-Giga mb-3"> Sleek. Stylish. Sustainable. </h2>

            <p className="text-gray-700  text-justify mb-4">Crafted with precision from recycled materials, this statement piece doesn’t just elevate your space — it tells a story of renewal and responsibility. With a modern design that blends seamlessly into any home, you’re not just buying furniture — you’re investing in a greener, more beautiful future.
            </p>
            <p className="mb-4">
              <strong>Features:</strong> Stylish, durable, eco-friendly, and comfortable.
            </p>
          </div>

          {/* Call to Action Button */}
        <Link to="/shop" className="self-start">
  <button className="bg-white border border-black rounded-full text-black px-6 py-3 hover:bg-[#013341] transition">
    SHOP YOURS NOW
  </button>
</Link>

        </div>
      </div>
    </div>
  );
};

export default PopupModal;
