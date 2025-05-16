"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 25);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTarget = () => {
    const target = document.getElementById("target-section");
    window.scrollTo({
      top: target.offsetTop - 65,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Main Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center bg-black mt-[-100px] px-6">
        <div>
          
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#a6dc11] to-[#044e89] text-transparent bg-clip-text drop-shadow-lg">
            Gaseste-i pe cei mai buni!
          </h2>
          <p className="text-lg sm:text-2xl mb-8 text-gray-400 max-w-2xl">
            Conecteaza-te cu cei mai populari pentru a-ți promova produsul și a-ți crește brandul.
          </p>
          <button
            className="bg-[#a6dc11] px-8 sm:px-12 py-3 sm:py-4 text-lg sm:text-2xl font-bold text-black rounded-2xl shadow-lg shadow-green-800 cursor-pointer hover:bg-[#8dc509] transition duration-300"
            onClick={scrollToTarget}
          >
            Incepe
          </button>
          

        </div>
      </section>

      {/* Target Section */}
      <section
        id="target-section"
        className="py-20 bg-black/90 text-white w-full flex flex-col lg:flex-row justify-center items-center gap-10 px-6"
      >
        <div className="w-full lg:w-5/12 max-w-screen-md">
          <Image
            src="/Imagini/melanie-deziel-U33fHryBYBU-unsplash.jpg"
            alt="Promoters"
            width={700}
            height={300}
            className="rounded-2xl shadow-lg shadow-[#800080] transition-transform duration-300 hover:scale-105 w-full"
          />
        </div>
        <div className="w-full lg:w-6/12 max-w-screen-xl text-center lg:text-left">
          <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-[#a6dc11] to-[#044e89] text-transparent bg-clip-text drop-shadow-lg">
            Cine suntem noi?
          </h3>
          <p className="text-base sm:text-lg md:text-xl mb-4">
            Suntem podul dintre branduri și influenceri – locul unde ideile prind viață și produsele cresc. Cu noi, ai parte de colaborări rapide și ușoare, plus statistici clare pentru a urmări impactul fiecărei campanii.
          </p>
          <p className="text-base sm:text-lg md:text-xl mb-8">Promovează mai simplu. Crește mai rapid.</p>
          <Link href="/what-we-offer">
            <button className="bg-[#a6dc11] px-6 sm:px-10 py-3 sm:py-4 text-lg sm:text-2xl font-bold text-black rounded-2xl shadow-lg shadow-green-800 cursor-pointer hover:bg-[#8dc509] transition duration-300">
              Ce va oferim?
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
