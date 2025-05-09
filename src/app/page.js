"use client"; // This makes the component a Client Component
import Image from 'next/image'
import { useEffect, useState } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header Section (Fixed) */}
      <header
        className={`py-4 px-6 w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-opacity-90 bg-[#222222]" : "bg-transparent"
        }`}
      >
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <h1 className="text-5xl font-extrabold tracking-wide text-[#a6dc11]">
            Dev Core
          </h1>

          <nav>
            <a
              href="#about"
              className="mx-4 text-xl font-semibold text-gray-200 hover:text-[#a6dc11] transition-colors duration-300"
            >
              Acasa
            </a>
            <a
              href="#services"
              className="mx-4 text-xl font-semibold text-gray-200 hover:text-[#a6dc11] transition-colors duration-300"
            >
              Directory
            </a>
            <a
              href="#contact"
              className="mx-4 text-xl font-semibold text-gray-200 hover:text-[#a6dc11] transition-colors duration-300"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main Section - Full Page */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center pt-24 bg-black">
        <div>
          <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#a6dc11] to-[#044e89] text-transparent bg-clip-text drop-shadow-lg">
            Find the Best Promoters
          </h2>
          <p className="text-2xl mb-8 text-gray-400">
            Connecting promoters with businesses looking for top-tier marketing experts.
          </p>
          <button
            className="bg-[#a6dc11] px-8 py-4 text-xl font-bold text-black rounded-2xl shadow-lg shadow-green-800 hover:bg-[#8dc509] transition duration-300"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("target-section").scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            Get Started
          </button>
        </div>
      </section>

{/* Second and Third Section (Improved Aesthetic) */} <section id="target-section" className="py-20 bg-black/80 text-white w-full">
 <div className="max-w-screen-xl mx-auto px-6 text-center"> 
  <h3 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-[#a6dc11] to-[#044e89] text-transparent bg-clip-text drop-shadow-lg bg-opacity-90">Who We Are</h3> 
  <p className="text-xl mb-8">Your bridge to the best promoters in the business.</p> <Image src="/Imagini/charles-etoroma-95UF6LXe-Lo-unsplash.jpg" alt="Promoters" width={600} height={400} className="rounded-2xl shadow-lg shadow-[#800080]" /> 
  </div> </section>

      {/* Footer Section */}
      <footer className="py-6">
        <div className="max-w-screen-xl mx-auto px-6 text-center text-sm text-gray-300">
          <p>&copy; 2025 Promoter Connect. All Rights Reserved.</p>
          <div className="mt-4">
            <a href="#privacy" className="text-[#a6dc11] hover:underline mx-2">
              Privacy Policy
            </a>
            <a href="#terms" className="text-[#a6dc11] hover:underline mx-2">
              Terms & Conditions
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
