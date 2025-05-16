"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate authentication process for demo
    if (!isLogin) {
      // Set authentication status in localStorage on successful sign-up
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("user", JSON.stringify({ fullName, username, email }));

      setShowSuccessPopup(true);
      setTimeout(() => {
        setShowSuccessPopup(false);
        router.push("/dashboard");
        setTimeout(() => window.location.reload(), 100);
      }, 2000);
    } else {
      // Set authentication status in localStorage on successful login
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("user", JSON.stringify({ username, email }));

      setShowSuccessPopup(true);
      setTimeout(() => {
        setShowSuccessPopup(false);
        router.push("/dashboard");
        setTimeout(() => window.location.reload(), 100);
      }, 2000);
    }
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setUsername("");
    setPassword("");
    setEmail("");
    setFullName("");
    setConfirmPassword("");
    setAgreeToTerms(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-24 px-4 bg-black text-white text-center overflow-hidden mt-[-125px]">
      <h2 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-[#a6dc11] to-[#044e89] text-transparent bg-clip-text drop-shadow-lg">
        {isLogin ? "Logheazǎ-te" : "Înregistreazǎ-te"}
      </h2>
      <p className="text-xl mb-10 text-gray-400">
        {isLogin ? "Bine ai revenit! Introdu-ți datele." : "Alǎturǎ-te astǎzi! Creazǎ-ți un cont."}
      </p>

      <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-md w-full transition-all duration-500">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {isLogin ? (
            <>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="p-4 rounded-2xl w-full bg-black/70 text-white border-2 border-[#a6dc11] focus:outline-none focus:ring-2 focus:ring-[#a6dc11] transition duration-300 placeholder-gray-400"
              />
              <input
                type="password"
                placeholder="Parolǎ"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-4 rounded-2xl w-full bg-black/70 text-white border-2 border-[#a6dc11] focus:outline-none focus:ring-2 focus:ring-[#a6dc11] transition duration-300 placeholder-gray-400"
              />
            </>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nume Prenume"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="p-4 rounded-2xl w-full bg-black/70 text-white border-2 border-[#a6dc11] focus:outline-none focus:ring-2 focus:ring-[#a6dc11] transition duration-300 placeholder-gray-400"
                />
                <input
                  type="text"
                  placeholder="Nume utilizator"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="p-4 rounded-2xl w-full bg-black/70 text-white border-2 border-[#a6dc11] focus:outline-none focus:ring-2 focus:ring-[#a6dc11] transition duration-300 placeholder-gray-400"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-4 rounded-2xl w-full bg-black/70 text-white border-2 border-[#a6dc11] focus:outline-none focus:ring-2 focus:ring-[#a6dc11] transition duration-300 placeholder-gray-400"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="password"
                  placeholder="Parolǎ"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-4 rounded-2xl w-full bg-black/70 text-white border-2 border-[#a6dc11] focus:outline-none focus:ring-2 focus:ring-[#a6dc11] transition duration-300 placeholder-gray-400"
                />
                <input
                  type="password"
                  placeholder="Confirmǎ parola"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="p-4 rounded-2xl w-full bg-black/70 text-white border-2 border-[#a6dc11] focus:outline-none focus:ring-2 focus:ring-[#a6dc11] transition duration-300 placeholder-gray-400"
                />
              </div>
            </>
          )}
          <button
            type="submit"
            className="bg-[#a6dc11] px-8 py-4 text-xl font-bold text-black rounded-2xl shadow-lg shadow-green-800 hover:bg-[#8dc509] transition duration-300 w-full"
          >
            {isLogin ? "Logheazǎ-te" : "Înregistreazǎ-te"}
          </button>
        </form>

        <p className="mt-6 text-gray-400">
          {isLogin ? "Nu ai un cont?" : "Ai deja un cont?"}{" "}
          <span
            onClick={toggleAuthMode}
            className="text-[#a6dc11] font-semibold cursor-pointer hover:underline"
          >
            {isLogin ? "Înregistreazǎ-te" : "Logheazǎ-te"}
          </span>
        </p>
      </div>

      {showSuccessPopup && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-[#222222] text-[#a6dc11] p-3 rounded-lg shadow-lg z-50 opacity-100 translate-y-0 transition-all duration-500">
          <p className="text-sm font-semibold">Autentificare reuşitǎ!</p>
        </div>
      )}
    </div>
  );
}
