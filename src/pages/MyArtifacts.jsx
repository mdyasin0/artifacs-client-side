import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../Provider/Authprovider";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom"; 
import { BiSolidLike } from "react-icons/bi";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const MyArtifacts = () => {
  const { user } = useContext(Authcontext);
  const [likedata, setlikedata] = useState([]);
  const [showAll, setShowAll] = useState(false);
useEffect(() => {
    document.title = "My Artifacts | Legacy Vault";
  }, []);
  // delete oparetion
  const deletehandale = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this deletion!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/delete/${id}`, {
          method: "DELETE",
          credentials:'include'
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              Swal.fire("Deleted!", "Artifact has been deleted.", "success");

              const updatedData = likedata.filter((item) => item._id !== id);
              setlikedata(updatedData);
            } else {
              Swal.fire("Error", data.message, "error");
            }
          })
          .catch((err) => {
            Swal.fire("Error", "Failed to delete artifact", "error");
          toast.error(err);
          });
      }
    });
  };

  useEffect(() => {
    fetch("http://localhost:3000/artifacts",{
      credentials:'include'
    })
      .then((res) => res.json())
      .then((data) => {
        if (user?.email) {
          const likedArtifacts = data.filter((artifact) =>
            artifact.email.includes(user.email)
          );
          setlikedata(likedArtifacts);
        }
      });
  }, [user]);

  return (
    <>
      <h1 className="text-center mt-10 font-bold text-4xl mb-10 text-[#2f2e2e]">
        My Artifacts
      </h1>
      {likedata.length === 0 ? (
        <div>
          <p className="text-center text-gray-600 text-lg mb-10">
            You haven't added any artifacts yet.
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
            {(showAll ? likedata : likedata.slice(0, 6)).map((artifact) => (
              <div
                key={artifact._id}
                className="bg-[#faf4ec] border border-[#ddd] rounded-lg p-6 flex flex-col shadow-md hover:shadow-lg transition duration-300"
              >
                <img
                  className="max-w-56 mx-auto mb-4 rounded-lg border border-[#ddd]"
                  src={artifact.image}
                  alt={artifact.title}
                />
                <h2 className="text-[#3a3a3a] text-xl font-bold mb-2 text-center">
                  {artifact.title}
                </h2>
                <p className="text-[#2f2e2e] text-sm mb-4">
                  <strong className="font-semibold">Description:</strong>{" "}
                  {artifact.description}
                </p>

                <div>
                  <div className="flex justify-between items-center mt-auto pt-3 border-t border-[#ddd]">
                    <Link
                      to={`/details/${artifact._id}`}
                      className="text-sm font-bold bg-[#8b5e3c] text-[#f5f5f5] py-1 px-3 rounded-lg hover:bg-[#a97442] transition duration-300"
                    >
                      View Details
                    </Link>
                    <div className="flex items-center gap-1 text-[#3a3a3a] font-semibold">
                      <BiSolidLike /> {artifact.liked_by.length}
                    </div>
                  </div>
                  <div className="flex  mt-5 justify-between">
                    <Link
                      to={`/update/${artifact._id}`}
                      className="bg-[#8b5e3c] text-[#f5f5f5] py-1 text-sm px-3 rounded-lg hover:bg-[#a97442] transition duration-300 font-semibold"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => deletehandale(artifact._id)}
                      className="bg-[#8b5e3c] text-[#f5f5f5] py-1 px-3 text-sm rounded-lg hover:bg-[#a97442] transition duration-300 font-semibold"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mb-20">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-[#8b5e3c] hover:bg-[#a97442] text-[#f5f5f5] font-bold py-2 px-6 rounded-lg transition duration-300"
            >
              {showAll ? "Show Less" : "Show All"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MyArtifacts;
