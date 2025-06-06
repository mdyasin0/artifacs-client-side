import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../Provider/Authprovider";
import { useParams } from "react-router";
import Swal from "sweetalert2";

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

const Update = () => {
  const { user } = useContext(Authcontext);
  const { id } = useParams();

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
    adderName: user?.displayName || "",
  });

  useEffect(() => {
    fetch(`http://localhost:3000/update/${id}`,{
      credentials:'include'
    })
      .then((res) => res.json())
      .then((data) => {
        setFormData({
          title: data.title || "",
          image: data.image || "",
          timePeriod: data.timePeriod || "",
          origin: data.origin || "",
          material: data.material || "",
          dimensions: data.dimensions || "",
          height: data.height || "",
          width: data.width || "",
          weight: data.weight || "",
          condition: data.condition || "",
          currentLocation: data.currentLocation || "",
          estimatedValue: data.estimatedValue || "",
          historicalSignificance: data.historicalSignificance || "",
          description: data.description || "",
          discoveredBy: data.discoveredBy || "",
          dateOfDiscovery: data.dateOfDiscovery || "",
          preservationStatus: data.preservationStatus || "",
          artifactType: data.artifactType || "",
          historicalContext: data.historicalContext || "",
          liked_by: data.liked_by || [],
          email: user?.email || "",
          adderName: user?.displayName || "",
        });
      });
  }, [id, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:3000/update/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
       credentials:'include',
      body: JSON.stringify(formData),
    });

    const result = await res.json();

    if (result.success) {
      Swal.fire({
        icon: "success",
        title: "Updated!",
        text: "Artifact updated successfully.",
        timer: 2000,
        showConfirmButton: false,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Failed!",
        text: result.message || "Failed to update.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#faf4ec] p-6 font-sans">
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto bg-[#e8dfd1] p-8 rounded-lg shadow-md border border-[#ddd]"
      >
        <h2 className="text-3xl font-semibold mb-6 text-[#3b2f2f]">
          Update your profile
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
            required
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
            required
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
            required
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
            required
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
            required
            onChange={handleChange}
            placeholder="e.g. 10x20x5 cm"
            className="mt-1 block w-full rounded border border-[#ddd] bg-[#faf4ec] px-3 py-2 text-[#3b2f2f]"
          />
        </label>

        {/* Height, Width, Weight */}
        <div className="flex gap-4 mb-4">
          <label className="flex-1">
            <span className="text-[#3a3a3a] font-medium">Height</span>
            <input
              type="text"
              name="height"
              value={formData.height}
              required
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
              required
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
              required
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
            required
            onChange={handleChange}
            placeholder="Condition"
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
            required
            onChange={handleChange}
            placeholder="Current location"
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
            required
            onChange={handleChange}
            placeholder="Estimated value"
            className="mt-1 block w-full rounded border border-[#ddd] bg-[#faf4ec] px-3 py-2 text-[#3b2f2f]"
          />
        </label>

        {/* Historical Significance */}
        <label className="block mb-4">
          <span className="text-[#3a3a3a] font-medium">
            Historical Significance
          </span>
          <textarea
            name="historicalSignificance"
            value={formData.historicalSignificance}
            required
            onChange={handleChange}
            placeholder="Describe historical significance"
            className="mt-1 block w-full rounded border border-[#ddd] bg-[#faf4ec] px-3 py-2 text-[#3b2f2f]"
          />
        </label>

        {/* Description */}
        <label className="block mb-4">
          <span className="text-[#3a3a3a] font-medium">Description</span>
          <textarea
            name="description"
            value={formData.description}
            required
            onChange={handleChange}
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
            required
            onChange={handleChange}
            placeholder="Name of discoverer"
            className="mt-1 block w-full rounded border border-[#ddd] bg-[#faf4ec] px-3 py-2 text-[#3b2f2f]"
          />
        </label>

        {/* Date Of Discovery */}
        <label className="block mb-4">
          <span className="text-[#3a3a3a] font-medium">Date Of Discovery</span>
          <input
            type="date"
            name="dateOfDiscovery"
            value={formData.dateOfDiscovery}
            required
            onChange={handleChange}
            className="mt-1 block w-full rounded border border-[#ddd] bg-[#faf4ec] px-3 py-2 text-[#3b2f2f]"
          />
        </label>

        {/* Preservation Status */}
        <label className="block mb-4">
          <span className="text-[#3a3a3a] font-medium">
            Preservation Status
          </span>
          <input
            type="text"
            name="preservationStatus"
            value={formData.preservationStatus}
            required
            onChange={handleChange}
            placeholder="Preservation status"
            className="mt-1 block w-full rounded border border-[#ddd] bg-[#faf4ec] px-3 py-2 text-[#3b2f2f]"
          />
        </label>

        {/* Artifact Type (Select) */}
        <label className="block mb-6">
          <span className="text-[#3a3a3a] font-medium">Artifact Type</span>
          <select
            name="artifactType"
            value={formData.artifactType}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded border border-[#ddd] bg-[#faf4ec] px-3 py-2 text-[#3b2f2f]"
          >
            <option value="">Select Type</option>
            {artifactTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        {/* Historical Context */}
        <label className="block mb-6">
          <span className="text-[#3a3a3a] font-medium">Historical Context</span>
          <textarea
            name="historicalContext"
            value={formData.historicalContext}
            onChange={handleChange}
            placeholder="Historical context"
            className="mt-1 block w-full rounded border border-[#ddd] bg-[#faf4ec] px-3 py-2 text-[#3b2f2f]"
          />
        </label>

        {/* User Name (Read Only) */}
        <label className="block mb-4">
          <span className="text-[#3a3a3a] font-medium">User Name</span>
          <input
            type="text"
            name="adderName"
            value={formData.adderName}
            readOnly
            className="mt-1 block w-full rounded border border-[#ddd] bg-gray-200 px-3 py-2 text-[#3b2f2f] cursor-not-allowed"
          />
        </label>

        {/* Email (Read Only) */}
        <label className="block mb-6">
          <span className="text-[#3a3a3a] font-medium">Adder email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            readOnly
            className="mt-1 block w-full rounded border border-[#ddd] bg-gray-200 px-3 py-2 text-[#3b2f2f] cursor-not-allowed"
          />
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-[#d4af37] text-white font-semibold rounded hover:bg-[#b38f0d] transition"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
