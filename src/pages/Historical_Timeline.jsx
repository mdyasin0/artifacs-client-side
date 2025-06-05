import React, { useEffect, useState } from "react";

const HistoricalTimeline = () => {
  const [timeline, setTimeline] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/historical_timeline")
      .then((res) => res.json())
      .then((data) => setTimeline(data));
  }, []);

  const displayedTimeline = showAll ? timeline : timeline.slice(0, 6);

  return (
    <section className="bg-[#e8dfd1] py-12 px-4 md:px-12">
      <h2 className="text-3xl font-bold text-[#2f2e2e] text-center mb-10">
        Historical Timeline
      </h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {displayedTimeline.map((item) => (
          <div
            key={item._id}
            className="bg-[#faf4ec] border border-[#ddd] p-4 rounded-lg shadow-md"
          >

            
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="text-xl font-semibold text-[#3a3a3a] mt-4 mb-2">
              {item.name}
            </h3>

            <div className="flex justify-between mb-5 items-center ">
                <p><strong>year : </strong>{item.year}</p>
                <p><strong>origin : </strong>{item.origin}</p>
            </div>
            <p className="text-[#7a6a53] mb-4">{item.description}</p>
           
          </div>
        ))}
      </div>

      {timeline.length > 6 && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-[#8b5e3c] hover:bg-[#a97442] text-[#f5f5f5] px-6 py-3 rounded text-lg"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default HistoricalTimeline;
