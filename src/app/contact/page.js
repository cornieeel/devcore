"use client";
import { useState } from "react";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mesaj trimis!"); // Înlocuiește cu logica ta de trimitere a formularului
  };

  return (
    <div className="bg-black text-white py-24 px-6">
      <header className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-[#a6dc11] mb-6">Contactează-ne</h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Ai întrebări? Ne-ar face plăcere să te auzim! Completează formularul de mai jos și te vom contacta cât de curând posibil.
        </p>
      </header>

      {/* Secțiunea Formular Contact */}
      <section className="max-w-2xl mx-auto bg-[#1f1f1f] p-10 rounded-3xl shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-semibold text-[#a6dc11] mb-2">
              Adresa ta de email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-6 py-4 bg-[#333333] text-white rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#a6dc11]"
              placeholder="Introdu adresa ta de email"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-lg font-semibold text-[#a6dc11] mb-2">
              Mesajul tău
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="px-6 py-4 bg-[#333333] text-white rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#a6dc11]"
              placeholder="Scrie mesajul aici"
              rows="8"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-[#a6dc11] text-black text-lg font-semibold rounded-xl hover:bg-[#044e89] transition-all duration-300"
          >
            Trimite Mesajul
          </button>
        </form>
      </section>
    </div>
  );
}
