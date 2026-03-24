"use client";
import React, { useState, useRef, useEffect } from "react";
import { MapPin, Navigation, Phone, X, Calendar } from "lucide-react";
import { FaWalking } from "react-icons/fa";

const Commonmap: React.FC = () => {
  const [showDirections, setShowDirections] = useState(false);
  const [travelMode, setTravelMode] = useState<"driving" | "walking">("driving");
  const [showBookingForm, setShowBookingForm] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (mapContainerRef.current) {
      observer.observe(mapContainerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const directionsLink =
    travelMode === "driving"
      ? "https://www.google.com/maps/dir/?api=1&destination=12.978456,77.501695&travelmode=driving"
      : "https://www.google.com/maps/dir/?api=1&destination=12.978456,77.501695&travelmode=walking";

  // Handle book now click
  const handleBookNow = () => {
    setShowBookingForm(true);
    document.body.style.overflow = 'hidden';
  };

  // Handle close form
  const handleCloseForm = () => {
    setShowBookingForm(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap");
      `}</style>

      {/* Mobile CTA Buttons - Fixed at bottom for mobile only */}
      <div className="fixed bottom-0 left-0 right-0 z-50 block md:hidden">
        <div className="flex w-full bg-[#1a1a1a] border-t border-gray-800 shadow-lg">
          {/* Call Now Button */}
          <a 
            href="tel:+919514417318"
            className="flex-1 flex items-center justify-center py-4 px-2 text-center transition-colors duration-300 active:bg-[#333333] hover:bg-[#333333]"
          >
            <Phone className="w-5 h-5 text-white mr-2" />
            <span className="text-base font-semibold text-white">Call Now</span>
          </a>
          
          {/* Divider */}
          <div className="w-px bg-gray-800 my-2"></div>
          
          {/* Book Now Button */}
          <button 
            onClick={handleBookNow}
            className="flex-1 flex items-center justify-center py-4 px-2 text-center transition-colors duration-300 active:bg-[#333333] hover:bg-[#333333]"
          >
            <Calendar className="w-5 h-5 text-white mr-2" />
            <span className="text-base font-semibold text-white">Book Now</span>
          </button>
        </div>
      </div>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-md bg-white rounded-lg shadow-xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold text-gray-900">Book Appointment</h3>
              <button
                onClick={handleCloseForm}
                className="text-gray-500 hover:text-gray-700 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Modal Body - Simple Booking Form */}
            <div className="p-4">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your phone number"
                    defaultValue="+91 95144 17318"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
                >
                  Book Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      <div
        className="w-full mx-auto px-3 sm:px-4 py-4 sm:py-6 bg-black"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        {/* Logo - Center aligned */}
        <div className="flex flex-col items-center justify-center mb-4">
          <img
            src="https://ik.imagekit.io/aegfxmf0u/public/ayushhhhh.png"
            alt="Ayush Ortho Logo"
            className="h-16 sm:h-20 md:h-24 object-contain"
          />
        </div>

        {/* Contact Info - Centered with proper spacing */}
        <div className="flex flex-col items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8">
          {/* Phone with clickable link */}
          <a 
            href="tel:+919514417318" 
            className="flex items-center gap-2 hover:opacity-80 transition-opacity group"
          >
            <div className="bg-white/10 p-2 rounded-full group-hover:bg-white/20 transition-colors">
              <Phone className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm text-white md:text-base font-medium">+91 95144 17318</span>
          </a>
          
          {/* Address */}
          <div className="flex items-start gap-2 max-w-2xl">
            <div className="bg-white/10 p-2 rounded-full flex-shrink-0 mt-0.5">
              <MapPin className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm text-white text-center md:text-base leading-relaxed">
              AYUSH ORTHO, C Block, Lakshmi Homes, Mariamman Koil St,
              <br className="hidden sm:block" />
              Vinoba nagar, Saram, Puducherry, Tamil Nadu 605008
            </span>
          </div>
        </div>

        {/* Map Section - Commented out as per original */}
        <div className="w-full">
          {/* Map content commented out */}
        </div>
      </div>

      {/* Directions Panel - Commented out as per original */}

      {/* Footer - Improved alignment with bottom padding for mobile */}
      <footer className="w-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-4 border-t border-gray-200 bg-white pb-24 md:pb-4 max-[470px]:pb-18">
        <div className="mb-3 md:mb-0 text-center md:text-left">
          <p className="text-sm font-medium text-gray-600">
            © {new Date().getFullYear()} Ayush Ortho | All Rights Reserved
          </p>
        </div>
        <div className="text-center md:text-right">
          <a
            href="/privacy-policy"
            className="text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors duration-200 inline-block py-1 px-2"
          >
            Privacy Policy
          </a>
        </div>
      </footer>
    </>
  );
};

export default Commonmap;