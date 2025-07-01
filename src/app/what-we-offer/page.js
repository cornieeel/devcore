"use client"; // Ensure we're using client-side rendering

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Using next/navigation for Next.js 13+
import Link from "next/link";

export default function WhatWeOfferPage() {
  const [expandedService, setExpandedService] = useState(null); // Track which card is expanded
  const [isClient, setIsClient] = useState(false); // Track if we are in the client-side

  const router = useRouter(); // Always call this hook first, even if not immediately needed

  useEffect(() => {
    setIsClient(true); // Set to true once the component mounts on the client
  }, []);

  const services = [
    {
      title: "Pachet Promovare Online",
      description:
        "Crește vizibilitatea brandului tău cu pachetul nostru de promovare online personalizat. Te conectăm cu influenceri din Moldova pe platformele TikTok și Instagram pentru a ajunge eficient la publicul tău țintă.",
      moreInfo:
        "Echipa noastră va crea și va gestiona campaniile de influencer, asigurându-se că brandul tău este remarcat de persoanele potrivite. Ne ocupăm de tot, de la selectarea influencerilor până la gestionarea campaniilor, astfel încât tu să te poți concentra pe ceea ce contează cu adevărat – creșterea afacerii tale.",
      price: "200 lei",
      link: "/contact",
    },
    {
      title: "Pachet Website Personalizat",
      description:
        "Dacă afacerea ta nu are încă un site web, noi te ajutăm să creezi unul profesionist, care să reflecte valorile brandului tău. Oferim soluții personalizate pentru fiecare tip de afacere.",
      moreInfo:
        "Echipa noastră va crea un website funcțional, ușor de navigat și optimizat pentru a atrage clienți. Indiferent dacă ai nevoie de un site de prezentare sau un magazin online, noi îți oferim soluția completă, de la design până la implementare.",
      price: "300 lei",
      link: "/contact",
    },
    {
      title: "Consultanță Business și Marketing",
      description:
        "Te ajutăm să-ți dezvolți afacerea prin servicii complete de marketing și crearea unui website personalizat. Vom construi strategii de marketing eficiente și vom crea un site care să îți reflecte brandul.",
      moreInfo:
        "Echipa noastră se va ocupa de tot: de la marketing online, promovare pe rețelele sociale și colaborări cu influenceri, până la crearea unui website optimizat care să atragă clienți și să îți crească vânzările.",
      price: "400 lei",
      link: "/contact",
    },
  ];

  // Simulate user login status (replace with actual logic later)
  const isLoggedIn = true; // Set this to `true` to simulate a logged-in user, or keep `false` for non-logged-in users

  // Function to handle Buy Now button click
  const handleBuyClick = (serviceTitle) => {
    if (!isLoggedIn) {
      router.push("/login"); // Redirect to login if not logged in
    } else {
      // Correct way to pass query parameters in the URL
      router.push(`/checkout?service=${encodeURIComponent(serviceTitle)}`);
    }
  };

  const toggleExpand = (index) => {
    setExpandedService(expandedService === index ? null : index); // Toggle expansion for clicked card
  };

  return (
    <div className="bg-black text-white py-24 px-6">
      {/* Header Section */}
      <header className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-[#a6dc11] mb-6">
          Ce vǎ oferim?
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Suntem partenerii ideali pentru creșterea afacerii tale. Ne ocupăm de tot ce înseamnă marketing – de la strategii creative și campanii digitale la optimizare SEO și social media – pentru a-ți aduce clienți și a-ți crește prezența online.
        </p>
      </header>

      {/* Services Section */}
      <section className="w-full px-14 mb-20">
        <div
          className="grid gap-10 mx-auto"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-[#1f1f1f] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between ${
                expandedService === index ? "h-auto" : "h-[300px]"
              }`} // Only the clicked card expands
            >
              <div className="flex flex-row">
              <p>{service.svg}</p>
              <h3 className="text-3xl font-semibold text-[#a6dc11] mb-4">
                {service.title}
              </h3>
              </div>
              {/* Show description always */}
              <p className="text-gray-400 mb-4">{service.description}</p>

              {/* Conditionally show more information when expanded */}
              {expandedService === index && (
                <>
                  <p className="text-gray-400 mb-4">{service.moreInfo}</p>
                  {/* Price Display */}
                  <div className="text-2xl font-semibold text-[#a6dc11] mb-4">
                    Preț: {service.price}
                  </div>
                </>
              )}

              <button
                className="text-[#a6dc11] font-semibold hover:underline mb-4"
                onClick={() => toggleExpand(index)}
              >
                {expandedService === index ? "Ascunde" : "Aflǎ mai mult"}
              </button>

              {expandedService === index && (
                <button
                  className="bg-[#a6dc11] text-black py-3 px-8 text-xl font-semibold rounded-2xl hover:bg-[#8bcb29] transition-colors"
                  onClick={() => handleBuyClick(service.title)} // Pass service title
                >
                  Cumpǎrǎ acum
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center py-16 bg-gradient-to-r from-[#a6dc11] to-[#044e89] text-white mt-52 min-h-[10vh]">
        <h2 className="text-4xl font-extrabold mb-6">
          Mai ai întrebǎri?
        </h2>
        <p className="text-lg mb-8">
          Nu ezita sǎ ne contactezi în orice timp, vom reveni cu un rǎspuns pe e-mail.
        </p>
        <Link href="/contact" className="bg-black text-[#a6dc11] py-3 px-8 text-xl font-semibold rounded-2xl hover:bg-[#222222] transition-colors">
          Contacteazǎ-ne
        </Link>
      </section>
    </div>
  );
}
