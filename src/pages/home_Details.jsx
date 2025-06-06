import { Player } from "@lottiefiles/react-lottie-player";
import { useContext, useEffect, useState } from "react";
import { BiSolidLike } from "react-icons/bi";
import { useParams } from "react-router";
import { Authcontext } from "../Provider/Authprovider";
import { toast } from "react-toastify/unstyled";

const Home_Details = () => {
  const { user } = useContext(Authcontext);
  const { id } = useParams();
  const [artifact, setArtifact] = useState(null);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:3000/artifacts/${id}`)
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

    fetch(`http://localhost:3000/artifacts/like/${artifact._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: user.email })
    })
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
    <div>
      <div
        key={artifact._id}
        className="bg-[#faf4ec] flex gap-5 max-w-6xl mx-auto my-10 border-[#ddd] p-10 rounded-lg"
      >
        <img
          className="max-w-60 rounded-lg mx-auto mb-3"
          src={artifact.image}
          alt=""
        />

        <div>
          <p><strong>Name:</strong> {artifact.title}</p>
          <p><strong>Origin:</strong> {artifact.origin}</p>
          <p><strong>Time Period:</strong> {artifact.timePeriod}</p>
          <p><strong>Material:</strong> {artifact.material}</p>
          <div className="flex item gap-5">
            <p><strong>Height:</strong> {artifact.dimensions.height}</p>
            <p><strong>Width:</strong> {artifact.dimensions.width}</p>
            <p><strong>Weight:</strong> {artifact.dimensions.weight}</p>
          </div>
          <p><strong>Condition:</strong> {artifact.condition}</p>
          <p><strong>Current Location:</strong> {artifact.currentLocation}</p>
          <p><strong>Estimated Value:</strong> {artifact.estimatedValue}</p>
          <p><strong>Historical Significance:</strong> {artifact.historicalSignificance}</p>
          <p><strong>Historical Context:</strong> {artifact.historicalContext}</p>
          <p><strong>Description:</strong> {artifact.description}</p>
          <p><strong>Discovered By:</strong> {artifact.discoveredBy}</p>
          <p><strong>Date of Discovery:</strong> {artifact.dateOfDiscovery}</p>
          <p><strong>Preservation Status:</strong> {artifact.preservationStatus}</p>

          {/* Like Button */}
          <div className="flex items-center gap-3 mt-4">
            <button
              onClick={handleLikeToggle}
              className={`flex items-center cursor-pointer gap-2 px-4 py-2 rounded-full ${
                liked ? "bg-red-500 text-white" : "bg-gray-200 text-black"
              }`}
            >
              <BiSolidLike /> {liked ? "Liked" : "Like"}
            </button>
            <span>{likeCount} Likes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_Details;
