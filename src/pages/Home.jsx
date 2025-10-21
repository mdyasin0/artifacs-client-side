import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper/modules";
import "swiper/swiper-bundle.css";
import { BiSolidLike } from "react-icons/bi";
import { Link } from "react-router";
import HistoricalTimeline from "./Historical_Timeline";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import ArtifactSlider from "./ArtifactSlider";


const Home = () => {
  const [artifact, setArtifact] = useState(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    document.title = "Home | Legacy Vault";
  }, []);

  useEffect(() => {
    fetch("https://artifacts-chi-lovat.vercel.app/artifacts")
      .then((res) => res.json())
      .then((data) => {
        const sortedData = data.sort(
          (a, b) => b.liked_by.length - a.liked_by.length
        );
        setArtifact(sortedData);
      })
      .catch((error) => toast.error("Error fetching data:", error));
  }, []);

  if (!artifact) {
    return (
      <p className="text-center flex h-screen justify-center items-center mt-10">
        <span className="loading loading-spinner text-primary"></span>
      </p>
    );
  }

  // Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
    hover: { scale: 1.05 },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div>
      {/* Hero Slider */}
      <ArtifactSlider/>
     
      

      {/* Featured Artifacts Title */}
      <motion.h1
        className="text-center font-bold dark:text-white  text-3xl sm:text-4xl md:text-5xl mb-10 text-[#2f2e2e]"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Featured Artifacts
      </motion.h1>

      {/* Featured Artifacts Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 sm:px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {(showAll ? artifact : artifact.slice(0, 6)).map((user) => (
          <motion.div
            key={user._id}
            className="bg-[#faf4ec] flex flex-col justify-between border border-[#ddd] p-6 rounded-lg shadow-sm"
            variants={cardVariants}
            whileHover="hover"
            transition={{ duration: 0.3 }}
          >
            <img
              className="w-full h-48 object-cover rounded-lg mb-3"
              src={user.image}
              alt={user.title}
            />
            <h1 className="text-[#3a3a3a] text-xl sm:text-2xl font-bold mb-2">
              {user.title}
            </h1>
            <p className="text-sm sm:text-base dark:text-black mb-4">
              <strong>Description :</strong> {user.description}
            </p>
            <div className="flex justify-between items-center mt-auto">
              <Link
                to={`/details/${user._id}`}
                className="text-sm cursor-pointer font-bold bg-[#8b5e3c] py-1 px-3 rounded-lg hover:bg-[#a97442] transition-colors duration-300"
              >
                View Details
              </Link>
              <div className="flex gap-1 items-center text-lg text-[#8b5e3c] font-semibold">
                <BiSolidLike /> {user.liked_by.length}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Show All / Show Less Button with tap animation */}
      <div className="text-center mb-20 mt-8">
        <Link
          to="/AllArtifacts"
          onClick={() => setShowAll(!showAll)}
          className="bg-[#8b5e3c] hover:bg-[#a97442] text-white font-bold py-2 px-6 rounded-lg transition duration-300"
      
        >
          {showAll ? "Show Less" : "Show All"}
        </Link>
      </div>

      {/* Timeline Section */}
      <HistoricalTimeline />

      {/* Artifact Care Tips Section */}
      <motion.section
        className="bg-indigo-50 p-6 mt-20 sm:p-10 rounded-lg shadow-md max-w-7xl mx-auto mb-16"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-indigo-900">
          Artifact Care Tips
        </h2>
        <ul className="list-disc list-inside space-y-3 text-base sm:text-lg text-indigo-900 px-4 sm:px-6">
          <li>Avoid direct sunlight to prevent fading and damage.</li>
          <li>Maintain 40-60% relative humidity to avoid mold growth.</li>
          <li>Always handle artifacts with gloves to protect from oils.</li>
          <li>Use acid-free materials for storage and display.</li>
          <li>Regularly inspect artifacts for any signs of deterioration.</li>
        </ul>
      </motion.section>
    </div>
  );
};

export default Home;
