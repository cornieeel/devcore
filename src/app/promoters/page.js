"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, XCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


export default function InfluencersPage() {
  const [influencers, setInfluencers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [selectedInfluencer, setSelectedInfluencer] = useState(null);

  useEffect(() => {
    setInfluencers([
      {
        name: "Alex Popescu",
        category: "Fashion",
        followers: 120000,
        profilePic: "/images/alex.jpg",
        recentCollabs: ["Brand A", "Brand B", "Brand C"],
        socialLinks: {
          instagram: "https://instagram.com/alexpopescu",
          youtube: "https://youtube.com/alexpopescu",
        },
        workVideos: [
          "/videos/alex1.mp4",
          "/videos/alex2.mp4"
        ]
      },
      {
        name: "Maria Ionescu",
        category: "Fitness",
        followers: 90000,
        profilePic: "/images/maria.jpg",
        recentCollabs: ["Brand D", "Brand E"],
        socialLinks: {
          instagram: "https://instagram.com/mariaionescu",
          youtube: "https://youtube.com/mariaionescu",
        },
        workVideos: [
          "/videos/maria1.mp4",
          "/videos/maria2.mp4"
        ]
      }
    ]);
  }, []);

  const filteredInfluencers = influencers.filter((influencer) =>
    influencer.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (categoryFilter === "" || influencer.category === categoryFilter)
  );

  return (
    <div className="p-6 space-y-6">
      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search influencers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 p-3 bg-[#222] text-white rounded-xl border border-gray-600"
        />
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="w-full md:w-1/4 p-3 bg-[#222] text-white rounded-xl border border-gray-600"
        >
          <option value="">All Categories</option>
          <option value="Fashion">Fashion</option>
          <option value="Fitness">Fitness</option>
          <option value="Tech">Tech</option>
        </select>
      </div>

      {/* Influencers List */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredInfluencers.map((influencer, index) => (
          <Card key={index} className="bg-[#222] text-white cursor-pointer" onClick={() => setSelectedInfluencer(influencer)}>
            <CardContent>
              <img src={influencer.profilePic} alt={influencer.name} className="w-full h-48 object-cover rounded-2xl mb-4" />
              <h2 className="text-xl font-bold mb-2">{influencer.name}</h2>
              <p className="text-gray-400">{influencer.category} • {influencer.followers.toLocaleString()} Followers</p>
              <p className="text-gray-400 mt-2">Recent Collaborations: {influencer.recentCollabs.join(", ")}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Influencer Modal */}
      <AnimatePresence>
        {selectedInfluencer && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="bg-[#222] text-white rounded-2xl p-6 max-w-2xl w-full relative">
              <button onClick={() => setSelectedInfluencer(null)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
                <XCircle size={30} />
              </button>
              <img src={selectedInfluencer.profilePic} alt={selectedInfluencer.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-center mb-2">{selectedInfluencer.name}</h2>
              <div className="text-center mb-4">
                <a href={selectedInfluencer.socialLinks.instagram} target="_blank" className="text-[#a6dc11] mr-4">Instagram</a>
                <a href={selectedInfluencer.socialLinks.youtube} target="_blank" className="text-[#a6dc11]">YouTube</a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedInfluencer.workVideos.map((video, index) => (
                  <video key={index} src={video} controls className="w-full rounded-xl" />
                ))}
              </div>
              <button className="w-full bg-[#a6dc11] text-black font-bold py-3 rounded-xl mt-6 hover:bg-green-500 transition-colors">
                Contactează
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
