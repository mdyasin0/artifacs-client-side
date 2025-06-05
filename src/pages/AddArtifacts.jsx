import React, { useContext, useState } from "react";
import { Authcontext } from "../Provider/Authprovider";

const artifactTypes = [
  "Tools",
  "Weapons",
  "Documents",
  "Writings",
  "Jewelry",
  "Pottery",
  "Sculpture",
  "Textiles",
  "Coins",
  "Other",
];

export default function AddArtifactForm() {
  const { user } = useContext(Authcontext);
  // console.log("form check",user);

  const [formData, setFormData] = useState({
    title: "",
    image: "",
    timePeriod: "",
    origin: "",
    material: "",
    dimensions: "",
    height: "",
    width: "",
    weight: "",
    condition: "",
    currentLocation: "",
    estimatedValue: "",
    historicalSignificance: "",
    description: "",
    discoveredBy: "",
    dateOfDiscovery: "",
    preservationStatus: "",
    artifactType: "",
    historicalContext: "",
    liked_by: [],
    email: user?.email || "",
    adderName: user?.displayName|| "",  
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   fetch("http://localhost:3000/addartifacts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formData),
})
  .then((res) => res.json())
  .then((data) => {
    if (data.success) {
      alert("Artifact added successfully");
    } else {
      alert("Error", data.message, "error");
    }
  })
  .catch((error) => {
    console.error("Error submitting form:", error);
    alert("Error", "Failed to submit the form", "error");
  });

    console.log("Submitted data:", formData);
  };

  return (
    <div className="min-h-screen bg-[#faf4ec] p-6 font-sans">
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto bg-[#e8dfd1] p-8 rounded-lg shadow-md border border-[#ddd]"
      >
        <h2 className="text-3xl font-semibold mb-6 text-[#3b2f2f]">
          Add New Artifact
        </h2>

        {/* Title */}
        <label className="block mb-4">
          <span className="text-[#3a3a3a] font-medium">Title</span>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded border border-[#ddd] bg-[#faf4ec] px-3 py-2 text-[#3b2f2f] placeholder-[#7a6a53] focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
          />
        </label>

        {/* Image URL */}
        <label className="block mb-4">
          <span className="text-[#3a3a3a] font-medium">Image URL</span>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            className="mt-1 block w-full rounded border border-[#ddd] bg-[#faf4ec] px-3 py-2 text-[#3b2f2f]"
          />
        </label>

        {/* Time Period */}
        <label className="block mb-4">
          <span className="text-[#3a3a3a] font-medium">Time Period</span>
          <input
            type="text"
            name="timePeriod"
            value={formData.timePeriod}
            onChange={handleChange}
            placeholder="e.g. 1500-1600 AD"
            className="mt-1 block w-full rounded border border-[#ddd] bg-[#faf4ec] px-3 py-2 text-[#3b2f2f]"
          />
        </label>

        {/* Origin */}
        <label className="block mb-4">
          <span className="text-[#3a3a3a] font-medium">Origin</span>
          <input
            type="text"
            name="origin"
            value={formData.origin}
            onChange={handleChange}
            placeholder="Place of origin"
            className="mt-1 block w-full rounded border border-[#ddd] bg-[#faf4ec] px-3 py-2 text-[#3b2f2f]"
          />
        </label>

        {/* Material */}
        <label className="block mb-4">
          <span className="text-[#3a3a3a] font-medium">Material</span>
          <input
            type="text"
            name="material"
            value={formData.material}
            onChange={handleChange}
            placeholder="Material used"
            className="mt-1 block w-full rounded border border-[#ddd] bg-[#faf4ec] px-3 py-2 text-[#3b2f2f]"
          />
        </label>

        {/* Dimensions */}
        <label className="block mb-4">
          <span className="text-[#3a3a3a] font-medium">Dimensions</span>
          <input
            type="text"
            name="dimensions"
            value={formData.dimensions}
            onChange={handleChange}
            placeholder="e.g. 10x20x5 cm"
            className="mt-1 block w-full rounded border border-[#ddd] bg-[#faf4ec] px-3 py-2 text-[#3b2f2f]"
          />
        </label>

        {/* Height, Width, Weight (Grouped) */}
        <div className="flex gap-4 mb-4">
          <label className="flex-1">
            <span className="text-[#3a3a3a] font-medium">Height</span>
            <input
              type="text"
              name="height"
              value={formData.height}
              onChange={handleChange}
              placeholder="Height"
              className="mt-1 block w-full rounded border border-[#ddd] bg-[#faf4ec] px-3 py-2 text-[#3b2f2f]"
            />
          </label>

          <label className="flex-1">
            <span className="text-[#3a3a3a] font-medium">Width</span>
            <input
              type="text"
              name="width"
              value={formData.width}
              onChange={handleChange}
              placeholder="Width"
              className="mt-1 block w-full rounded border border-[#ddd] bg-[#faf4ec] px-3 py-2 text-[#3b2f2f]"
            />
          </label>

          <label className="flex-1">
            <span className="text-[#3a3a3a] font-medium">Weight</span>
            <input
              type="text"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              placeholder="Weight"
              className="mt-1 block w-full rounded border border-[#ddd] bg-[#faf4ec] px-3 py-2 text-[#3b2f2f]"
            />
          </label>
        </div>

        {/* Condition */}
        <label className="block mb-4">
          <span className="text-[#3a3a3a] font-medium">Condition</span>
          <input
            type="text"
            name="condition"
            value={formData.condition}
            onChange={handleChange}
            placeholder="e.g. Good, Fair, Poor"
            className="mt-1 block w-full rounded border border-[#ddd] bg-[#faf4ec] px-3 py-2 text-[#3b2f2f]"
          />
        </label>

        {/* Current Location */}
        <label className="block mb-4">
          <span className="text-[#3a3a3a] font-medium">Current Location</span>
          <input
            type="text"
            name="currentLocation"
            value={formData.currentLocation}
            onChange={handleChange}
            placeholder="Museum or storage place"
            className="mt-1 block w-full rounded border border-[#ddd] bg-[#faf4ec] px-3 py-2 text-[#3b2f2f]"
          />
        </label>

        {/* Estimated Value */}
        <label className="block mb-4">
          <span className="text-[#3a3a3a] font-medium">Estimated Value</span>
          <input
            type="text"
            name="estimatedValue"
            value={formData.estimatedValue}
            onChange={handleChange}
            placeholder="Value in currency"
            className="mt-1 block w-full rounded border border-[#ddd] bg-[#faf4ec] px-3 py-2 text-[#3b2f2f]"
          />
        </label>

        {/* Historical Significance */}
        <label className="block mb-4">
          <span className="text-[#3a3a3a] font-medium">Historical Significance</span>
          <textarea
            name="historicalSignificance"
            value={formData.historicalSignificance}
            onChange={handleChange}
            rows="3"
            placeholder="Significance details"
            className="mt-1 block w-full rounded border border-[#ddd] bg-[#faf4ec] px-3 py-2 text-[#3b2f2f]"
          />
        </label>

        {/* Description */}
        <label className="block mb-4">
          <span className="text-[#3a3a3a] font-medium">Description</span>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            placeholder="Detailed description"
            className="mt-1 block w-full rounded border border-[#ddd] bg-[#faf4ec] px-3 py-2 text-[#3b2f2f]"
          />
        </label>

        {/* Discovered By */}
        <label className="block mb-4">
          <span className="text-[#3a3a3a] font-medium">Discovered By</span>
          <input
            type="text"
            name="discoveredBy"
            value={formData.discoveredBy}
            onChange={handleChange}
            placeholder="Name of discoverer"
            className="mt-1 block w-full rounded border border-[#ddd] bg-[#faf4ec] px-3 py-2 text-[#3b2f2f]"
          />
        </label>

        {/* Date of Discovery */}
        <label className="block mb-4">
          <span className="text-[#3a3a3a] font-medium">Date of Discovery</span>
          <input
            type="date"
            name="dateOfDiscovery"
            value={formData.dateOfDiscovery}
            onChange={handleChange}
            className="mt-1 block w-full rounded border border-[#ddd] bg-[#faf4ec] px-3 py-2 text-[#3b2f2f]"
          />
        </label>

        {/* Preservation Status */}
        <label className="block mb-4">
          <span className="text-[#3a3a3a] font-medium">Preservation Status</span>
          <input
            type="text"
            name="preservationStatus"
            value={formData.preservationStatus}
            onChange={handleChange}
            placeholder="Current preservation condition"
            className="mt-1 block w-full rounded border border-[#ddd] bg-[#faf4ec] px-3 py-2 text-[#3b2f2f]"
          />
        </label>

        {/* Artifact Type */}
        <label className="block mb-4">
          <span className="text-[#3a3a3a] font-medium">Artifact Type</span>
          <select
            name="artifactType"
            value={formData.artifactType}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded border border-[#ddd] bg-[#faf4ec] px-3 py-2 text-[#3b2f2f]"
          >
            <option value="">Select type</option>
            {artifactTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        {/* Historical Context */}
        <label className="block mb-4">
          <span className="text-[#3a3a3a] font-medium">Historical Context</span>
          <textarea
            name="historicalContext"
            value={formData.historicalContext}
            onChange={handleChange}
            rows="3"
            placeholder="Contextual background"
            className="mt-1 block w-full rounded border border-[#ddd] bg-[#faf4ec] px-3 py-2 text-[#3b2f2f]"
          />
        </label>

        {/* Artifact Adder Name & Email (Read-only) */}
        <div className="mb-6">
          <p className="text-[#3a3a3a] font-medium mb-1">
            Artifact Adder Name:
          </p>
          <input
            type="text"
            value={formData.adderName}
            readOnly
            className="w-full rounded border border-[#ddd] bg-[#faf4ec] px-3 py-2 text-[#7a6a53] cursor-not-allowed"
          />
          <p className="text-[#3a3a3a] font-medium mt-3 mb-1">Artifact Adder Email:</p>
          <input
            type="email"
            value={formData.email}
            readOnly
            className="w-full rounded border border-[#ddd] bg-[#faf4ec] px-3 py-2 text-[#7a6a53] cursor-not-allowed"
          />
        </div>

        <button
          type="submit"
          className="bg-[#8b5e3c] hover:bg-[#a97442] text-[#f5f5f5] font-semibold py-3 px-6 rounded transition-colors duration-300"
        >
          Add Artifact
        </button>
      </form>
    </div>
  );
}
