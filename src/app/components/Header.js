"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setHasMounted(true);

    const checkAuthStatus = () => {
      const isLoggedIn = localStorage.getItem("isAuthenticated") === "true";
      setIsAuthenticated(isLoggedIn);
    };

    checkAuthStatus();

    const handleStorageChange = () => checkAuthStatus();
    window.addEventListener("storage", handleStorageChange);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  if (!hasMounted) {
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    router.push("/");
    window.location.reload(); // Force a full page reload
  };

  return (
    <header
      className={`py-2 px-4 w-full fixed top-0 left-0 z-50 transition-all duration-300 backdrop-blur-sm shadow-md ${
        isScrolled ? "bg-opacity-90 bg-[#222222]" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between">
        <Link href="/">
          <h1
            className={`text-4xl md:text-4xl font-extrabold tracking-wide cursor-pointer text-[#a6dc11] transition-all duration-500 ${
              isAuthenticated ? "drop-shadow-[0_0_8px_#a6dc11]" : ""
            }`}
          >
            Dev Core
          </h1>
        </Link>

        <nav className="mt-4 md:mt-0 flex flex-wrap items-center">
          <Link href="/" className="mx-2 text-sm md:text-xl font-semibold text-gray-200 hover:text-[#a6dc11] transition-colors duration-300">
            Acasă
          </Link>
          <Link href="/what-we-offer" className="mx-2 text-lg md:text-xl font-semibold text-gray-200 hover:text-[#a6dc11] transition-colors duration-300">
            Oferte
          </Link>
          <Link href="/contact" className="mx-2 text-lg md:text-xl font-semibold text-gray-200 hover:text-[#a6dc11] transition-colors duration-300">
            Contacte
          </Link>

          {/* Dropdown with connected hover */}
          <div className="relative mx-2 group">
            <button
              className="flex items-center text-lg md:text-xl font-semibold text-gray-200 cursor-pointer hover:text-[#a6dc11] transition-colors duration-300 focus:outline-none"
              aria-haspopup="true"
            >
              Profil
              <svg
                className="ml-1 h-4 w-4 text-gray-200 group-hover:rotate-180 transition-transform duration-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              className="absolute right-0 top-full bg-[#222222] rounded-b-lg shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300 z-50 w-40"
              style={{ marginTop: 0, paddingTop: 0 }}
            >
              {isAuthenticated ? (
                <>
                  <Link href="/profil" className="block px-4 py-2 text-gray-200 hover:bg-[#a6dc11] hover:text-black rounded-t-lg">
                    Profil
                  </Link>
                  <Link href="/dashboard" className="block px-4 py-2 text-gray-200 hover:bg-[#a6dc11] hover:text-black">
                    Statistici
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-gray-200 hover:bg-red-600 hover:text-white rounded-b-lg"
                  >
                    Deconectează-te
                  </button>
                </>
              ) : (
                <Link href="/login" className="block px-4 py-2 text-gray-200 hover:bg-[#a6dc11] hover:text-black rounded-lg">
                  Loghează-te
                </Link>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
