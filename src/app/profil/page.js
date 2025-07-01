"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Profil = () => {
  const [userData, setUserData] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isAuthenticated") === "true";
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      // Înlocuiește cu logica ta reală de preluare user
      setUserData({
        username: "JohnDoe",
        email: "johndoe@example.com",
        fullName: "John Doe",
        avatar:
          "https://i.pravatar.cc/150?img=12", // avatar exemplu
        bio: "Dezvoltator frontend pasionat de React și TailwindCSS.",
        location: "New York, SUA",
        joined: "Ianuarie 2023",
        recentActivity: [
          "A postat un proiect nou",
          "A actualizat poza de profil",
          "A intrat în grupul Developerilor",
        ],
      });
    }
  }, [router]);

  if (!userData) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-400">
        Se încarcă profilul...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#121212] text-gray-300 p-6 md:p-12 flex flex-col md:flex-row max-w-7xl mx-auto gap-8">
      {/* Bara laterală */}
      <aside className="w-full md:w-1/4 bg-[#1f1f1f] rounded-lg p-6 shadow-lg sticky top-16 h-fit">
        <div className="flex flex-col items-center text-center">
          <img
            src={userData.avatar}
            alt={`Avatarul lui ${userData.fullName}`}
            className="rounded-full w-28 h-28 mb-4 border-4 border-[#a6dc11]"
          />
          <h2 className="text-2xl font-bold mb-1">{userData.fullName}</h2>
          <p className="text-sm text-gray-400 mb-4">{userData.bio}</p>
          <p className="text-sm flex items-center gap-2 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-[#a6dc11]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11c0 1.657-1.343 3-3 3S6 12.657 6 11s1.343-3 3-3 3 1.343 3 3z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21c4.418 0 8-3.582 8-8v-1c0-4.418-3.582-8-8-8s-8 3.582-8 8v1c0 4.418 3.582 8 8 8z"
              />
            </svg>
            {userData.location}
          </p>
          <p className="text-xs mt-2 text-gray-500">Membru din {userData.joined}</p>
        </div>
        <nav className="mt-8 space-y-2">
          <button
            onClick={() => setActiveTab("overview")}
            className={`w-full text-left px-4 py-2 rounded-md font-semibold transition-colors ${
              activeTab === "overview"
                ? "bg-[#a6dc11] text-black"
                : "hover:bg-[#333] hover:text-[#a6dc11]"
            }`}
          >
            Prezentare generală
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={`w-full text-left px-4 py-2 rounded-md font-semibold transition-colors ${
              activeTab === "settings"
                ? "bg-[#a6dc11] text-black"
                : "hover:bg-[#333] hover:text-[#a6dc11]"
            }`}
          >
            Setări
          </button>
          <button
            onClick={() => setActiveTab("activity")}
            className={`w-full text-left px-4 py-2 rounded-md font-semibold transition-colors ${
              activeTab === "activity"
                ? "bg-[#a6dc11] text-black"
                : "hover:bg-[#333] hover:text-[#a6dc11]"
            }`}
          >
            Activitate recentă
          </button>
        </nav>
      </aside>

      {/* Conținut principal */}
      <main className="flex-1 bg-[#1f1f1f] rounded-lg p-8 shadow-lg min-h-[400px]">
        {activeTab === "overview" && (
          <>
            <h1 className="text-3xl font-bold mb-6 text-[#a6dc11]">Prezentare generală profil</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Informații cont</h3>
                <p>
                  <strong>Username:</strong> {userData.username}
                </p>
                <p>
                  <strong>Email:</strong> {userData.email}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Despre</h3>
                <p>{userData.bio}</p>
              </div>
            </div>
          </>
        )}

        {activeTab === "settings" && (
          <>
            <h1 className="text-3xl font-bold mb-6 text-[#a6dc11]">Setări</h1>
            <form className="space-y-6 max-w-lg">
              <div>
                <label className="block mb-1 font-semibold" htmlFor="fullName">
                  Nume complet
                </label>
                <input
                  type="text"
                  id="fullName"
                  defaultValue={userData.fullName}
                  className="w-full px-4 py-2 rounded bg-[#333] text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a6dc11]"
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  defaultValue={userData.email}
                  className="w-full px-4 py-2 rounded bg-[#333] text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a6dc11]"
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold" htmlFor="bio">
                  Despre mine
                </label>
                <textarea
                  id="bio"
                  defaultValue={userData.bio}
                  rows={4}
                  className="w-full px-4 py-2 rounded bg-[#333] text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a6dc11]"
                />
              </div>
              <button
                type="submit"
                className="bg-[#a6dc11] hover:bg-[#94c20a] text-black font-bold py-2 px-6 rounded transition-colors"
              >
                Salvează modificările
              </button>
            </form>
          </>
        )}

        {activeTab === "activity" && (
          <>
            <h1 className="text-3xl font-bold mb-6 text-[#a6dc11]">Activitate recentă</h1>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              {userData.recentActivity.map((activity, i) => (
                <li key={i}>{activity}</li>
              ))}
            </ul>
          </>
        )}
      </main>
    </div>
  );
};

export default Profil;
