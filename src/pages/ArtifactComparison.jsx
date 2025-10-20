import React, { useEffect, useState, useContext } from "react";
import { toast } from "react-toastify";
import { Authcontext } from "../Provider/Authprovider";
import "react-toastify/dist/ReactToastify.css";

const ArtifactComparison = () => {
  const { user } = useContext(Authcontext);

  const [artifacts, setArtifacts] = useState([]);
  const [artifact1Id, setArtifact1Id] = useState("");
  const [artifact2Id, setArtifact2Id] = useState("");
  const [artifact1, setArtifact1] = useState(null);
  const [artifact2, setArtifact2] = useState(null);

  // 🔹 Notes
  const [notes, setNotes] = useState([]);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [selectedNote, setSelectedNote] = useState(null);

  //  Fetch all artifacts
  useEffect(() => {
    fetch("http://localhost:3000/artifacts")
      .then((res) => res.json())
      .then((data) => setArtifacts(data))
      .catch(() => toast.error("Failed to load artifacts!"));
  }, []);

  //  Fetch selected artifacts
  useEffect(() => {
    if (artifact1Id) {
      fetch(`http://localhost:3000/artifacts/${artifact1Id}`)
        .then((res) => res.json())
        .then((data) => setArtifact1(data));
    }
    if (artifact2Id) {
      fetch(`http://localhost:3000/artifacts/${artifact2Id}`)
        .then((res) => res.json())
        .then((data) => setArtifact2(data));
    }
  }, [artifact1Id, artifact2Id]);

  //  Fetch Notes
  useEffect(() => {
    if (user?.email) {
      fetch("http://localhost:3000/notes", { credentials: "include" })
        .then((res) => res.json())
        .then((data) => setNotes(data))
        .catch(() => toast.error("Failed to load notes!"));
    }
  }, [user]);

  //  Save Note
  const handleSaveNote = async () => {
    if (!user?.email) return toast.error("Please login first!");
    if (!noteTitle || !noteContent) return toast.error("All fields required!");

    const newNote = { email: user.email, title: noteTitle, content: noteContent };

    const res = await fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(newNote),
    });

    if (res.ok) {
      toast.success("Note saved!");
      setNoteTitle("");
      setNoteContent("");
      const updatedNotes = await fetch("http://localhost:3000/notes", {
        credentials: "include",
      }).then((res) => res.json());
      setNotes(updatedNotes);
    } else toast.error("Failed to save note!");
  };

  //  Delete Note
  const handleDeleteNote = async (id) => {
    const res = await fetch(`http://localhost:3000/notes/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
    if (res.ok) {
      toast.success("Note deleted!");
      setNotes(notes.filter((n) => n._id !== id));
      setSelectedNote(null);
    }
  };

  //  Update Note
  const handleUpdateNote = async () => {
    if (!selectedNote) return;
    const res = await fetch(`http://localhost:3000/notes/${selectedNote._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email: user.email,
        title: selectedNote.title,
        content: selectedNote.content,
      }),
    });
    if (res.ok) {
      toast.success("Note updated!");
      setSelectedNote(null);
      const updated = await fetch("http://localhost:3000/notes", {
        credentials: "include",
      }).then((res) => res.json());
      setNotes(updated);
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-b from-gray-50 to-gray-200">
      <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-800">
       Artifact Comparison 
      </h1>

      {/* Artifact Selection */}
      <div className="flex flex-col md:flex-row gap-4 mb-10 justify-center">
        {[1, 2].map((n) => (
          <select
            key={n}
            className="border border-gray-300 p-3 rounded-lg w-full md:w-1/3 text-lg bg-white shadow-md focus:ring-2 focus:ring-indigo-400"
            value={n === 1 ? artifact1Id : artifact2Id}
            onChange={(e) =>
              n === 1 ? setArtifact1Id(e.target.value) : setArtifact2Id(e.target.value)
            }
          >
            <option value="">Select Artifact {n}</option>
            {artifacts.map((a) => (
              <option key={a._id} value={a._id}>
                {a.title}
              </option>
            ))}
          </select>
        ))}
      </div>

      {/* 🔹 Comparison Section */}
      {artifact1 && artifact2 && (
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[artifact1, artifact2].map((artifact, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-5 border border-gray-200 hover:shadow-2xl transition"
            >
              <img
                src={artifact.image}
                alt={artifact.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold text-indigo-700 mb-2">{artifact.title}</h2>
              <p className="text-gray-700 mb-1">
                <span className="font-semibold">Time Period:</span> {artifact.timePeriod}
              </p>
              <p className="text-gray-700 mb-1">
                <span className="font-semibold">Origin:</span> {artifact.origin}
              </p>
              <p className="text-gray-700 mb-1">
                <span className="font-semibold">Material:</span> {artifact.material}
              </p>
              <p className="text-gray-700 mb-1">
                <span className="font-semibold">Dimensions:</span>{" "}
                {artifact.dimensions?.height}, {artifact.dimensions?.width}, {artifact.dimensions?.weight}
              </p>
              <p className="text-gray-700 mb-1">
                <span className="font-semibold">Condition:</span> {artifact.condition}
              </p>
              <p className="text-gray-700 mb-1">
                <span className="font-semibold">Location:</span> {artifact.currentLocation}
              </p>
              <p className="text-gray-700 mb-1">
                <span className="font-semibold">Value:</span> {artifact.estimatedValue}
              </p>
              <p className="text-gray-600 mt-2 italic">
                {artifact.historicalSignificance}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* 📝 Notes Section */}
      <div className="max-w-3xl mx-auto mb-12 bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold mb-4">📝 Notebook</h2>
        <input
          type="text"
          placeholder="Note title"
          className="border p-2 w-full mb-3 rounded"
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
        />
        <textarea
          placeholder="Write your note..."
          className="border p-2 w-full h-32 mb-3 rounded"
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
        />
        <button
          onClick={handleSaveNote}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Save Note
        </button>

        {/* Notes Dropdown */}
        <div className="mt-6">
          <select
            onChange={(e) => {
              const selected = notes.find((n) => n._id === e.target.value);
              setSelectedNote(selected);
            }}
            className="border p-2 w-full rounded"
          >
            <option value="">📂 View Saved Notes</option>
            {notes.map((n) => (
              <option key={n._id} value={n._id}>
                {n.title} ({n.date ? new Date(n.date).toLocaleDateString() : "No Date"})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Note Modal */}
      {selectedNote && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h3 className="text-xl font-bold mb-2">🧾 {selectedNote.title}</h3>
            <textarea
              value={selectedNote.content}
              onChange={(e) =>
                setSelectedNote({ ...selectedNote, content: e.target.value })
              }
              className="border p-2 w-full h-40 rounded mb-3"
            />
            <div className="flex justify-between">
              <button
                onClick={handleUpdateNote}
                className="bg-green-600 text-white px-3 py-1 rounded"
              >
                Update
              </button>
              <button
                onClick={() => handleDeleteNote(selectedNote._id)}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
              <button
                onClick={() => setSelectedNote(null)}
                className="bg-gray-500 text-white px-3 py-1 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtifactComparison;
