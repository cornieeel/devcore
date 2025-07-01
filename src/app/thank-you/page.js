// pages/thank-you.js
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-extrabold mb-4">Vǎ mulțumim de incredere!</h1>
      <p className="text-xl mb-8 text-gray-400">
        Comanda ta a fost plasatǎ cu succes. Revenim pe e-mail cu detalii despre colaborarea noastrǎ.
      </p>
      <Link href="/" className="bg-[#a6dc11] text-black py-3 px-8 text-xl font-semibold rounded-2xl">
        Înapoi acasǎ
      </Link>
    </div>
  );
}
