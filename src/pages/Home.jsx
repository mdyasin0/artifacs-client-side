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

const Home = () => {
  const [artifact, setArtifact] = useState(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    document.title = "Home | Legacy Vault";
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/artifacts")
      .then((res) => res.json())
      .then((data) => {
        const sortedData = data.sort(
          (a, b) => b.liked_by.length - a.liked_by.length
        );
        setArtifact(sortedData);
      })
      .catch((error) => console.log("Error fetching data:", error));
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

  const slideVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div>
      {/* Hero Slider */}
      <section className="pt-20 pb-20">
        <Swiper
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            EffectFade,
            Autoplay,
          ]}
          spaceBetween={50}
          effect="fade"
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {[
            {
              title: "Sultanganj Buddha!",
              desc: "This life-sized bronze statue of Buddha exemplifies ancient Indian metal casting techniques and Buddhist art.",
              img: "https://i.ibb.co/BV5nnH8Y/The-Sultanganj-Buddha.jpg",
              alt: "Sultanganj Buddha",
            },
            {
              title: "Terracotta Army Soldier!",
              desc: "These life-sized statues were buried with China's first emperor to protect him in the afterlife.",
              img: "https://i.ibb.co/WNMdxqNP/51714-Terracota-Army.jpg",
              alt: "Terracotta Army Soldier",
            },
            {
              title: "Rosetta Stone!",
              desc: "The Rosetta Stone is a granodiorite stele inscribed with a decree issued in Memphis, Egypt, in three scripts: Greek, Demotic, and Hieroglyphic.",
              img: "https://i.ibb.co/39h8cp5r/Rosetta-Stone.jpg",
              alt: "Rosetta Stone",
            },
            {
              title: "Mona Lisa!",
              desc: "Portrait by Leonardo da Vinci, believed to depict Lisa Gherardini, wife of Florentine merchant Francesco del Giocondo.",
              img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
              alt: "Mona Lisa",
            },
          ].map((slide, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="hero h-[600px] sm:h-[700px] md:h-[800px] xl:h-[600px]"
                style={{ backgroundColor: "#faf4ec" }}
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1, delay: index * 0.3 }}
              >
                <div className="hero-content flex flex-col lg:flex-row-reverse bg-[rgba(255,255,255,0.85)] rounded-xl shadow-lg p-6 max-w-7xl mx-auto w-full h-full overflow-hidden">
                  <img
                    src={slide.img}
                    alt={slide.alt}
                    className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-2xl border border-[#ddd] mx-auto mb-6 lg:mb-0 object-contain h-full"
                  />
                  <div className="text-start px-2 sm:px-6 lg:px-12 flex flex-col justify-center h-full">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2f2e2e] mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-[#7a6a53]">
                      {slide.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Featured Artifacts Title */}
      <motion.h1
        className="text-center font-bold text-3xl sm:text-4xl md:text-5xl mb-10 text-[#2f2e2e]"
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
            <p className="text-sm sm:text-base mb-4">
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
        to='/AllArtifacts'
          onClick={() => setShowAll(!showAll)}
          className="bg-[#8b5e3c] hover:bg-[#a97442] text-white font-bold py-2 px-6 rounded-lg transition duration-300"
          whileTap={{ scale: 0.95 }}
        >
          {showAll ? "Show Less" : "Show All"}
        </Link>
      </div>

      {/* Timeline Section */}
      <HistoricalTimeline />

      {/* Artifact Care Tips Section */}
      <motion.section
        className="bg-indigo-50 p-6 sm:p-10 rounded-lg shadow-md max-w-4xl mx-auto mb-16"
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
