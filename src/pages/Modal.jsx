import React from "react";

const ServiceModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white rounded-2xl p-6 w-full max-w-2xl shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Trainings Card */}
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow">
            <img src="/trainings.jpg" alt="Trainings" className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Trainings</h3>
              <p className="text-sm text-gray-600">
                Learn sustainable furniture design and production from industry leaders.
              </p>
            </div>
          </div>

          {/* To the Trade Card */}
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow">
            <img src="/tothetrade.jpg" alt="To the Trade" className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">To the Trade</h3>
              <p className="text-sm text-gray-600">
                Discover tailored solutions, supplies, and more for sustainable furniture practices.
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-6 bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ServiceModal;
