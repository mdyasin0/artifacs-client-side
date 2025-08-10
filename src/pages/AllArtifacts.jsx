import  { useEffect, useState } from "react";
import "swiper/swiper-bundle.css";
import { BiSolidLike } from "react-icons/bi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ArtifactCard = () => {
  const [artifact, setArtifact] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    document.title = "All Artifacts | Legacy Vault";
  }, []);

  useEffect(() => {
    fetch("https://artifacts-three-zeta.vercel.app/artifacts")
      .then((res) => res.json())
      .then((data) => {
        setArtifact(data);
      })
      .catch((error) => toast.error("Error fetching data:", error));
  }, []);

  if (!artifact) {
    return (
      <p className="text-center flex h-screen justify-center items-center mt-10">
        <span className="loading loading-spinner text-[#8b5e3c]"></span>
      </p>
    );
  }

  // Filter artifact list by search term (case insensitive)
  let filteredArtifacts = artifact.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  filteredArtifacts.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  return (
    <div>
      {/* Title */}
      <h1 className="text-center dark:text-white font-bold mt-10 text-4xl mb-10 text-[#2f2e2e]">
        All Artifacts
      </h1>

      {/* Search and Sort Controls */}
      <div className="max-w-6xl mx-auto mb-8 px-4 flex flex-col sm:flex-row justify-between gap-4">
        <input
          type="text"
          placeholder="Search by title..."
          className="w-full sm:w-1/2 border dark:text-white border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#8b5e3c]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="w-full sm:w-48 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#8b5e3c]"
        >
          <option value="asc"   className="dark:text-black">Sort: A to Z</option>
          <option value="desc"   className="dark:text-black">Sort: Z to A</option>
        </select>
      </div>

      {/* Cards Grid */}
      <div className="grid mb-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {(showAll ? filteredArtifacts : filteredArtifacts.slice(0, 6)).map(
          (item) => (
            <div
              key={item._id}
              className="bg-[#faf4ec] flex flex-col justify-between border border-[#ddd] p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ minHeight: "400px" }} 
            >
              <img
                className="max-w-full h-48 object-cover rounded-lg mx-auto mb-4"
                src={item.image}
                alt={item.title}
              />
              <h2 className="text-[#3a3a3a] text-2xl font-semibold mb-2">
                {item.title}
              </h2>
              <p className="text-[#7a6a53] flex-grow">
                {item.description.length > 150
                  ? item.description.slice(0, 150) + "..."
                  : item.description}
              </p>
              <div className="flex justify-between items-center mt-5">
                <Link
                  to={`/details/${item._id}`}
                  className="text-sm font-bold bg-[#8b5e3c] py-2 px-4 rounded-lg hover:bg-[#a97442] text-[#f5f5f5] transition-colors duration-300"
                >
                  View Details
                </Link>
                <div className="flex items-center gap-1 text-[#8b5e3c] font-semibold">
                  <BiSolidLike size={20} />
                  <span>{item.liked_by.length}</span>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      {/* Show All / Show Less Button */}
      <div className="text-center mb-20">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-[#8b5e3c] hover:bg-[#a97442] text-[#f5f5f5] font-bold py-2 px-6 rounded-lg transition duration-300"
        >
          {showAll ? "Show Less" : "Show All"}
        </button>
      </div>
    </div>
  );
};

export default ArtifactCard;
