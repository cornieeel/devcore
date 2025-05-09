"use client"; // This makes the component a Client Component
import Image from 'next/image';
import { useEffect, useState } from "react";
import Link from 'next/link';

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
              Home
            </a>
            <a
              href="#services"
              className="mx-4 text-xl font-semibold text-gray-200 hover:text-[#a6dc11] transition-colors duration-300"
            >
              Servicii
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
            Gaseste-i pe cei mai buni!
          </h2>
          <p className="text-2xl mb-8 text-gray-400">
            Conecteaza-te cu cei mai populari pentru ati promova produsul!
          </p>
          <button
            className="bg-[#a6dc11] px-8 py-4 text-xl font-bold text-black rounded-2xl shadow-lg shadow-green-800 cursor-pointer hover:bg-[#8dc509] transition duration-300"
            onClick={(e) => {
              e.preventDefault();
              const target = document.getElementById("target-section");
              const offset = 50;
              const bodyRect = document.body.getBoundingClientRect().top;
              const elementRect = target.getBoundingClientRect().top;
              const elementPosition = elementRect - bodyRect;
              const offsetPosition = elementPosition - offset;

              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
              });
            }}
          >
            Incepe
          </button>
        </div>
      </section>

      {/* Target Section */}
      <section
        id="target-section"
        className="py-20 bg-black/90 text-white w-full flex flex-col lg:flex-row justify-center items-center"
      >
        <div className="w-full lg:w-4/10 max-w-screen-xl mx-auto px-6 text-center lg:text-left mb-10 lg:mb-0">
          <Image
            src="/Imagini/charles-etoroma-95UF6LXe-Lo-unsplash.jpg"
            alt="Promoters"
            width={500}
            height={300}
            className="rounded-2xl shadow-lg shadow-[#800080] transition-transform duration-300 hover:scale-105 w-full"
          />
        </div>
        <div className="w-full lg:w-9/12 max-w-screen-xl mx-auto px-6">
          <h3 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-[#a6dc11] to-[#044e89] text-transparent bg-clip-text drop-shadow-lg bg-opacity-90">
            Cine suntem noi?
          </h3>
          <p className="text-xl mb-8">
            Suntem podul dintre branduri și influenceri – locul unde ideile prind viață și produsele cresc. Cu noi, ai parte de colaborări rapide și ușoare, plus statistici clare pentru a urmări impactul fiecărei campanii.
          </p>
          <p className="text-xl mb-8">Promovează mai simplu. Crește mai rapid.</p>
          <p className="text-sm mb-8">Conecteaza-te direct catre profilul tau</p>

          <Link href="/login">
            <button className="bg-[#a6dc11] px-8 py-4 text-xl font-bold text-black rounded-2xl shadow-lg shadow-green-800 cursor-pointer hover:bg-[#8dc509] transition duration-300">
              Login
            </button>
          </Link>
        </div>
      </section>

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
