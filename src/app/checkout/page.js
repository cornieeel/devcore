"use client"; // Ensure we're using client-side rendering

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CheckoutPage() {
  const [service, setService] = useState("Pachet Promovare Online"); // Example service
  const router = useRouter();

  const price = 200; // Example price in lei
  const tva = (price * 19) / 100; // 19% TVA (tax)
  const total = price + tva;

  // Handle Payment and Redirect to Thank You Page
  const handlePayment = () => {
    // Simulate payment success
    alert("Payment processed successfully!");

    // Redirect to Thank You Page
    router.push("/thank-you");
  };

  return (
    <div className="bg-black text-white py-24 px-6">
      <header className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-[#a6dc11] mb-6">Coș</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Completeazǎ-ți alegerea serviciului {service}. Introdu datele bancare pentru a face achitarea.
        </p>
      </header>

      {/* Checkout Content */}
      <section className="flex flex-col lg:flex-row gap-0 justify-between items-stretch border-2 border-[#a6dc11] rounded-lg">
        {/* Left Side: Billing Information */}
        <div className="lg:w-1/2 bg-[#1f1f1f] p-8 flex flex-col justify-between">
          <h3 className="text-3xl font-semibold text-[#a6dc11] mb-4">Date personale și bancare</h3>
          <form className="space-y-6">
            <div>
              <label className="text-gray-400" htmlFor="name">Nume/Prenume</label>
              <input
                id="name"
                type="text"
                className="w-full p-3 mt-2 bg-[#333] text-white rounded-lg"
                placeholder="Nume/Prenume"
                required
              />
            </div>
            <div>
              <label className="text-gray-400" htmlFor="email">Adresǎ e-mail</label>
              <input
                id="email"
                type="email"
                className="w-full p-3 mt-2 bg-[#333] text-white rounded-lg"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <label className="text-gray-400" htmlFor="address">Date personale și bancare</label>
              <input
                id="address"
                type="text"
                className="w-full p-3 mt-2 bg-[#333] text-white rounded-lg"
                placeholder="Adresǎ"
                required
              />
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="text-gray-400" htmlFor="city">Oraș</label>
                <input
                  id="city"
                  type="text"
                  className="w-full p-3 mt-2 bg-[#333] text-white rounded-lg"
                  placeholder="Oraș"
                  required
                />
              </div>
              <div className="w-1/2">
                <label className="text-gray-400" htmlFor="zip">Cod poștǎ</label>
                <input
                  id="zip"
                  type="text"
                  className="w-full p-3 mt-2 bg-[#333] text-white rounded-lg"
                  placeholder="Cod poștal"
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-gray-400" htmlFor="country">Țarǎ</label>
              <input
                id="country"
                type="text"
                className="w-full p-3 mt-2 bg-[#333] text-white rounded-lg"
                placeholder="Țarǎ"
                required
              />
            </div>

            {/* Credit Card Information */}
            <div>
              <label className="text-gray-400" htmlFor="cardNumber">Numǎr card</label>
              <input
                id="cardNumber"
                type="text"
                className="w-full p-3 mt-2 bg-[#333] text-white rounded-lg"
                placeholder="Numǎr card"
                required
              />
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="text-gray-400" htmlFor="expiration">Datǎ expirare</label>
                <input
                  id="expiration"
                  type="text"
                  className="w-full p-3 mt-2 bg-[#333] text-white rounded-lg"
                  placeholder="LL/AA"
                  required
                />
              </div>
              <div className="w-1/2">
                <label className="text-gray-400" htmlFor="cvv">CVV</label>
                <input
                  id="cvv"
                  type="text"
                  className="w-full p-3 mt-2 bg-[#333] text-white rounded-lg"
                  placeholder="CVV"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handlePayment} //  Trigger the payment and redirect
              className="w-full bg-[#a6dc11] text-black py-3 px-8 text-xl font-semibold rounded-2xl hover:bg-[#8bcb29] transition-colors mt-6"
            >
              Completeazǎ achitarea
            </button>
          </form>
        </div>

        {/* Right Side: Order Summary */}
        <div className="lg:w-1/2 bg-[#1f1f1f] p-8 border-l-2 border-[#a6dc11] flex flex-col justify-between">
          <h3 className="text-3xl font-semibold text-[#a6dc11] flex justify-center mt-45 font-bold text-6xl mb-4">Produs ales</h3>

          <div className="text-gray-400 mb-6">
            <h4 className="text-2xl font-semibold text-[#a6dc11] mb-4">{service}</h4>

            {/* Price */}
            <div className="mb-2 flex justify-between">
              <span className="font-medium">Preț</span>
              <span>{price} lei</span>
            </div>

            {/* TVA */}
            <div className="mb-2 flex justify-between">
              <span className="font-medium">TVA (19%)</span>
              <span>{tva.toFixed(2)} lei</span>
            </div>

            {/* Total */}
            <div className="mb-4 flex justify-between border-t-2 pt-4 border-[#333]">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">{total.toFixed(2)} lei</span>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              className="bg-[#a6dc11] text-black py-3 px-8 text-xl font-semibold rounded-2xl hover:bg-[#8bcb29] transition-colors"
              onClick={handlePayment} // Trigger the payment and redirect
            >
              Confirmǎ tranzacția
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
