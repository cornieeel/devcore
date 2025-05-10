"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuthStatus = () => {
      const isLoggedIn = localStorage.getItem("isAuthenticated") === "true";
      setIsAuthenticated(isLoggedIn);
    };

    // Check auth status when the component mounts
    checkAuthStatus();

    // Listen for storage changes (e.g., when logging in or out)
    const handleStorageChange = () => checkAuthStatus();
    window.addEventListener("storage", handleStorageChange);

    // Handle scroll effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    router.push("/");
  };

  return (
    <header
      className={`py-4 px-6 w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-opacity-90 bg-[#222222]" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-5xl font-extrabold tracking-wide text-[#a6dc11] cursor-pointer">
            Dev Core
          </h1>
        </Link>

        <nav>
          <Link href="/" className="mx-4 text-xl font-semibold text-gray-200 hover:text-[#a6dc11] transition-colors duration-300">
            Home
          </Link>
          <Link href="/what-we-offer" className="mx-4 text-xl font-semibold text-gray-200 hover:text-[#a6dc11] transition-colors duration-300">
            What We Offer
          </Link>
          <Link href="/#contact" className="mx-4 text-xl font-semibold text-gray-200 hover:text-[#a6dc11] transition-colors duration-300">
            Contact
          </Link>

          {isAuthenticated ? (
            <>
              <Link href="/dashboard" className="mx-4 text-xl font-semibold text-gray-200 hover:text-[#a6dc11] transition-colors duration-300">
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="text-xl font-semibold text-gray-200 hover:text-red-500 transition-colors duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className="mx-4 text-xl font-semibold text-gray-200 hover:text-[#a6dc11] transition-colors duration-300">
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
