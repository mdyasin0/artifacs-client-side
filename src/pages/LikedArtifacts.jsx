import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../Provider/Authprovider";
import { Link } from "react-router";
import { BiSolidLike } from "react-icons/bi";
import { Player } from "@lottiefiles/react-lottie-player";

const LikedArtifacts = () => {
  const { user } = useContext(Authcontext);
  const [likedata, setlikedata] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    document.title = "Liked Artifacts | Legacy Vault";
  }, []);

  useEffect(() => {
    fetch("https://artifacts-three-zeta.vercel.app/artifacts")
      .then((res) => res.json())
      .then((data) => {
        if (user?.email) {
          const likedArtifacts = data.filter((artifact) =>
            artifact.liked_by.includes(user.email)
          );
          setlikedata(likedArtifacts);
        }
      });
  }, [user]);

  return (
    <>
      <h1 className="text-center mt-10 font-bold text-4xl mb-10 text-[#2f2e2e]">
        Liked Artifacts
      </h1>
      {likedata.length === 0 ? (
        <div>
          <p className="text-center text-gray-600 text-lg mb-10">
            You haven't liked any artifacts yet.
          </p>
          <Player
            autoplay
            loop
            src="/likeloder.json"
            style={{ height: "300px", width: "300px" }}
          ></Player>
        </div>
      ) : (
        <div>
          <div className="grid mb-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {(showAll ? likedata : likedata.slice(0, 6)).map((user) => (
              <div
                key={user._id}
                className="bg-[#faf4ec] border border-[#ddd] rounded-lg p-6 flex flex-col shadow-md hover:shadow-lg transition duration-300"
              >
                <img
                  className="max-w-56 mx-auto mb-4 rounded-lg border border-[#ddd]"
                  src={user.image}
                  alt={user.title}
                />
                <h2 className="text-[#3a3a3a] text-xl font-bold mb-2 text-center">
                  {user.title}
                </h2>
                <p className="text-[#2f2e2e] text-sm mb-4">
                  <strong className="font-semibold">Description:</strong>{" "}
                  {user.description}
                </p>

                <div className="flex justify-between items-center mt-auto pt-3 border-t border-[#ddd]">
                  <Link
                    to={`/details/${user._id}`}
                    className="text-sm font-bold bg-[#8b5e3c] text-[#f5f5f5] py-1 px-4 rounded-lg hover:bg-[#a97442] transition duration-300"
                  >
                    View Details
                  </Link>
                  <div className="flex items-center gap-1 text-[#3a3a3a] font-semibold">
                    <BiSolidLike /> {user.liked_by.length}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mb-20">
            <Link
              onClick={() => setShowAll(!showAll)}
              className="bg-[#8b5e3c] hover:bg-[#a97442] text-[#f5f5f5] font-bold py-2 px-6 rounded-lg transition duration-300"
            >
              {showAll ? "Show Less" : "Show All"}
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default LikedArtifacts;
