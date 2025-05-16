// src/app/dashboard/page.js
"use client";  // Make sure you're using "use client" at the top if you're using React hooks

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isAuthenticated") === "true";
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      // Simulate user data, replace with your actual logic
      setUserData({
        username: "JohnDoe", // Example user data
        email: "johndoe@example.com",
        fullName: "John Doe",
      });
    }
  }, [router]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      <h2 className="text-4xl font-bold text-center text-[#a6dc11]">Welcome, {userData.fullName}</h2>
      <div className="dashboard-details text-center mt-8">
        <p><strong>Username:</strong> {userData.username}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        {/* Display other user details or actions */}
      </div>
    </div>
  );
};

export default Dashboard;
