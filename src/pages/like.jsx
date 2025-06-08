import { useEffect, useState } from "react";

const ArtifactCard = ({ artifact, user }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(artifact?.liked_by?.length || 0);

  useEffect(() => {
    if (artifact?.liked_by?.includes(user?.email)) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [artifact, user]);

  const handleLikeToggle = () => {
    fetch(`http://localhost:3000/artifacts/like/${artifact._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email: user.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
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

  return (
    <div className="border p-4 rounded shadow-md">
      <h2 className="text-xl font-bold mb-2">{artifact.name}</h2>
      <p>{artifact.description}</p>
      <div className="mt-4 flex items-center gap-4">
        <button
          onClick={handleLikeToggle}
          className={`px-4 py-2 rounded ${
            liked ? "bg-red-500 text-white" : "bg-gray-200 text-black"
          }`}
        >
          {liked ? "Unlike" : "Like"}
        </button>
        <span>{likeCount} Likes</span>
      </div>
    </div>
  );
};

export default ArtifactCard;
