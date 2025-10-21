import React, { useEffect, useState } from "react";
import axios from "axios";

const ArtifactSlider = () => {
  const [artifacts, setArtifacts] = useState([]);

  useEffect(() => {
    axios
      .get("https://artifacts-chi-lovat.vercel.app/artifacts")
      .then((res) => setArtifacts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="relative w-full mb-20 bg-gradient-to-b from-gray-50 to-white py-10 overflow-hidden">
      

      {/* Gradient overlays for depth effect */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>

      {artifacts.length === 0 ? (
        <div className=" flex justify-center my-10"><span className="loading loading-bars loading-xs"></span>
<span className="loading loading-bars loading-sm"></span>
<span className="loading loading-bars loading-md"></span>
<span className="loading loading-bars loading-lg"></span>
<span className="loading loading-bars loading-xl"></span> </div>
      ) : (
        <div className="overflow-hidden">
          <div
            className="flex animate-scroll gap-6"
            style={{
              width: `${artifacts.length * 320 * 2}px`, // smooth infinite width
            }}
          >
            {[...artifacts, ...artifacts].map((artifact, index) => (
              <div
                key={index}
                className="min-w-[300px] sm:min-w-[280px] md:min-w-[320px] bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-500"
              >
                <img
                  src={artifact.image}
                  alt={artifact.title}
                  className="w-full h-[200px] sm:h-[220px] md:h-[250px] object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-indigo-700 text-lg">
                    {artifact.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{artifact.origin}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtifactSlider;
