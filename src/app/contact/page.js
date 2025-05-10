"use client";
import { useState } from "react";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!"); // Replace with actual form handling logic
  };

  return (
    <div className="bg-black text-white py-24 px-6">
      <header className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-[#a6dc11] mb-6">Contact Us</h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Have any questions? Wed love to hear from you! Fill out the form below and well get back to you as soon as possible.
        </p>
      </header>

      {/* Contact Form Section */}
      <section className="max-w-2xl mx-auto bg-[#1f1f1f] p-10 rounded-3xl shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-semibold text-[#a6dc11] mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-6 py-4 bg-[#333333] text-white rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#a6dc11]"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-lg font-semibold text-[#a6dc11] mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="px-6 py-4 bg-[#333333] text-white rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#a6dc11]"
              placeholder="Write your message here"
              rows="8"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-[#a6dc11] text-black text-lg font-semibold rounded-xl hover:bg-[#044e89] transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
