"use client";
import Link from "next/link";

export default function WhatWeOfferPage() {
  const services = [
    {
      title: "Custom Software Development",
      description:
        "Tailored solutions for your unique business needs. Our development team builds software that solves your problems and boosts efficiency.",
      link: "/contact",
    },
    {
      title: "Digital Marketing",
      description:
        "Drive traffic and sales with our result-driven digital marketing services. From SEO to social media management, we’ll help you grow your online presence.",
      link: "/contact",
    },
    {
      title: "IT Consulting",
      description:
        "Our experts offer strategic IT consulting to help your business streamline processes, reduce costs, and implement the latest tech solutions for optimal performance.",
      link: "/contact",
    },
    {
      title: "Cloud Solutions",
      description:
        "Scalable and secure cloud infrastructure tailored to your business. We offer cloud solutions that enhance productivity while keeping your data safe and accessible.",
      link: "/contact",
    },
    {
      title: "Data Analytics & Reporting",
      description:
        "Make informed decisions with actionable insights. Our data analytics services provide you with detailed reports and forecasts for better business strategy.",
      link: "/contact",
    },
    {
      title: "E-Commerce Solutions",
      description:
        "Enhance your online store with a custom-built e-commerce platform. We provide end-to-end solutions for launching and scaling your online business.",
      link: "/contact",
    },
  ];

  return (
    <div className="bg-black text-white py-24 px-6">
      {/* Header Section */}
      <header className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-[#a6dc11] mb-6">
          What We Offer
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Discover how our services can elevate your business to the next level.
          Whether you’re looking for cutting-edge technology, expert solutions,
          or creative strategies, we’ve got you covered.
        </p>
      </header>

      {/* Services Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-24">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card bg-[#1f1f1f] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-3xl font-semibold text-[#a6dc11] mb-4">
              {service.title}
            </h3>
            <p className="text-gray-400 mb-4">{service.description}</p>
            <Link href={service.link} className="text-[#a6dc11] font-semibold hover:underline">
              Learn More
            </Link>
          </div>
        ))}
      </section>

      {/* Call to Action Section */}
      <section className="text-center py-16 bg-gradient-to-r from-[#a6dc11] to-[#044e89] text-white">
        <h2 className="text-4xl font-extrabold mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-lg mb-8">
          Let’s work together to create a solution that takes your business to the next level.
        </p>
        <Link href="/contact" className="bg-black text-[#a6dc11] py-3 px-8 text-xl font-semibold rounded-2xl hover:bg-[#222222] transition-colors">
          Contact Us Today
        </Link>
      </section>
    </div>
  );
}
