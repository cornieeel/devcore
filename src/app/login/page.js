"use client"; // This makes the component a Client Component
import { useState } from "react"; 

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with", { username, password });
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center text-center pt-24">
      <h2 className="text-5xl font-extrabold mb-4 text-[#a6dc11]">Login</h2>
      <p className="text-xl mb-8 text-gray-400">Please enter your credentials.</p>

      {/* Glass Effect Login Form */}
      <div className="bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-md w-full">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-4 rounded-2xl w-full bg-transparent text-white border-2 border-[#a6dc11] focus:outline-none focus:ring-2 focus:ring-[#a6dc11] transition duration-300"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-4 rounded-2xl w-full bg-transparent text-white border-2 border-[#a6dc11] focus:outline-none focus:ring-2 focus:ring-[#a6dc11] transition duration-300"
          />
          <button
            type="submit"
            className="bg-[#a6dc11] px-8 py-4 text-xl font-bold text-black rounded-2xl shadow-lg shadow-green-800 hover:bg-[#8dc509] transition duration-300 w-full"
          >
            Login
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="mt-4 text-gray-400">
          Dont have an account?{''}
          <a
            href="/signup"
            className="text-[#a6dc11] font-semibold hover:underline"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
