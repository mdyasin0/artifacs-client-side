import { Player } from "@lottiefiles/react-lottie-player";
import { useContext, useEffect, useState } from "react";
import { BiSolidLike } from "react-icons/bi";
import { useParams } from "react-router";
import { Authcontext } from "../Provider/Authprovider";
import { toast } from "react-toastify";

const Home_Details = () => {
  const { user } = useContext(Authcontext);
  const { id } = useParams();
  const [artifact, setArtifact] = useState(null);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    fetch(`https://artifacts-three-zeta.vercel.app/artifacts/${id}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setArtifact(data);
        setLiked(data?.liked_by?.includes(user?.email));
        setLikeCount(data?.liked_by?.length || 0);
      });
  }, [id, user?.email]);

  const handleLikeToggle = () => {
    if (!user) {
      toast.warn("Please login first to like this artifact.");
      return;
    }

    fetch(
      `https://artifacts-three-zeta.vercel.app/artifacts/like/${artifact._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email: user.email }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0 || data.matchedCount > 0) {
          if (liked) {
            setLiked(false);
            setLikeCount((prev) => prev - 1);
          } else {
            setLiked(true);
            setLikeCount((prev) => prev + 1);
          }
        }
      });
  };

  if (!artifact) {
    return (
      <p className="text-center flex h-screen justify-center items-center mt-10">
        <span className="loading loading-spinner text-primary"></span>
      </p>
    );
  }

  return (
    <div className="bg-[#faf4ec] max-w-6xl mx-auto my-10 p-6 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Image Section */}
        <div className="flex-shrink-0 md:w-1/3 w-full">
          <img
            className="w-full h-auto object-cover rounded-lg shadow-lg"
            src={artifact.image}
            alt={artifact.title}
          />
        </div>

        {/* Details Section */}
        <div className="md:w-2/3 w-full flex flex-col gap-3 text-gray-800">
          <p>
            <strong>Name:</strong> {artifact.title}
          </p>
          <p>
            <strong>Origin:</strong> {artifact.origin}
          </p>
          <p>
            <strong>Time Period:</strong> {artifact.timePeriod}
          </p>
          <p>
            <strong>Material:</strong> {artifact.material}
          </p>

          <div className="flex flex-wrap gap-4">
            <p>
              <strong>Height:</strong> {artifact.dimensions.height}
            </p>
            <p>
              <strong>Width:</strong> {artifact.dimensions.width}
            </p>
            <p>
              <strong>Weight:</strong> {artifact.dimensions.weight}
            </p>
          </div>

          <p>
            <strong>Condition:</strong> {artifact.condition}
          </p>
          <p>
            <strong>Current Location:</strong> {artifact.currentLocation}
          </p>
          <p>
            <strong>Estimated Value:</strong> {artifact.estimatedValue}
          </p>
          <p>
            <strong>Historical Significance:</strong>{" "}
            {artifact.historicalSignificance}
          </p>
          <p>
            <strong>Historical Context:</strong> {artifact.historicalContext}
          </p>
          <p>
            <strong>Description:</strong> {artifact.description}
          </p>
          <p>
            <strong>Discovered By:</strong> {artifact.discoveredBy}
          </p>
          <p>
            <strong>Date of Discovery:</strong> {artifact.dateOfDiscovery}
          </p>
          <p>
            <strong>Preservation Status:</strong> {artifact.preservationStatus}
          </p>

          {/* Like Button */}
          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={handleLikeToggle}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors duration-300
                ${
                  liked
                    ? "bg-red-500 text-white hover:bg-red-600"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
            >
              <BiSolidLike size={20} /> {liked ? "Dislike" : "Like"}
            </button>
            <span className="text-lg font-semibold">{likeCount} Likes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_Details;
