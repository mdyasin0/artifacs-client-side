import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect, useState } from "react";
import { BiSolidLike } from "react-icons/bi";
import { useParams } from "react-router";

const Home_Details = () => {
  
  const { id } = useParams();
  const [artifact, setArtifact] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:3000/artifacts/${id}`)
      .then((res) => res.json())
      .then((data) => setArtifact(data));
  }, [id]);

  if (!artifact) {
    return <p className="text-center flex h-screen justify-center items-center mt-10">
      <span className="loading loading-spinner text-primary"></span>
    </p>;
  }

  return (
    <div>
      <div key={artifact._id} className="bg-[#faf4ec] flex gap-5 max-w-6xl mx-auto my-10 border-[#ddd] p-10 rounded-lg ">
        <img
          className="max-w-60 rounded-lg mx-auto mb-3 "
          src={artifact.image}
          alt=""
        />

        <div>
          <p><strong>Name : </strong>{artifact.title}</p>

          <p>
            <strong>origin : </strong>
            {artifact.origin}
          </p>
          <p>
            <strong>timePeriod : </strong>
            {artifact.timePeriod}
          </p>
          <p>
            <strong>material : </strong>
            {artifact.material}
          </p>
          <div className="flex item gap-5">
            <p>
              <strong>height : </strong>
              {artifact.dimensions.height}
            </p>
            <p>
              <strong>width : </strong>
              {artifact.dimensions.width}
            </p>
            <p>
              <strong>weight : </strong>
              {artifact.dimensions.weight}
            </p>
          </div>

          <p>
            <strong>condition : </strong>
            {artifact.condition}
          </p>
          <p>
            <strong>current Location : </strong>
            {artifact.currentLocation}
          </p>
          <p>
            <strong>estimated Value : </strong>
            {artifact.estimatedValue}
          </p>
          <p>
            <strong>historical significance : </strong>
            {artifact.historicalSignificance}
          </p>
          <p>
            <strong>description : </strong>
            {artifact.description}
          </p>
          <p>
            <strong>discovered By : </strong>
            {artifact.discoveredBy}
          </p>
          <p>
            <strong>date of discovery : </strong>
            {artifact.dateOfDiscovery}
          </p>
          <p>
            <strong>preservation Status : </strong>
            {artifact.preservationStatus}
          </p>

          <div className=" flex items-center gap-5 text-white bg-amber-500 w-16 p-2 rounded-2xl ">
           <button className="cursor-pointer text-white"> <BiSolidLike /> </button> {artifact.total_like}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_Details;
