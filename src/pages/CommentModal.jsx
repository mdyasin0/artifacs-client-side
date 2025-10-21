import { useState } from "react";
import { toast } from "react-toastify";

const CommentModal = ({ artifactId, user, onClose }) => {
  const [activeTab, setActiveTab] = useState("write");
  const [comments, setComments] = useState([]);
  const [myComments, setMyComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const [formData, setFormData] = useState({
    name: user?.displayName || "",
    email: user?.email || "",
    image: user?.photoURL || "",
  });

  //  Load all comments
  const loadComments = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://artifacts-chi-lovat.vercel.app/comments/${artifactId}`);
      const data = await res.json();
      setComments(data);
    } catch {
      toast.error("Failed to load comments");
    } finally {
      setLoading(false);
    }
  };

  // Load logged-in user comments for current artifact
  const loadMyComments = async () => {
    if (!user) return;
    setLoading(true);
    try {
      // first load all coment  by id
      const res = await fetch(`https://artifacts-chi-lovat.vercel.app/comments/${artifactId}`);
      const data = await res.json();

      // then filter login user comments
      const filtered = data.filter((c) => c.email === user.email);
      setMyComments(filtered);
    } catch {
      toast.error("Failed to load your comments");
    } finally {
      setLoading(false);
    }
  };

  //  Add a comment
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!commentText.trim()) {
      toast.warn("Please write something before submitting.");
      return;
    }

    const confirm = window.confirm(
      "⚠️ Please write a good word.\nDon't use bad words — everyone can see your comment.\nWrite in English only."
    );
    if (!confirm) return;

    const newComment = {
      artifactId,
      name: formData.name,
      email: formData.email,
      image:
        formData.image ||
        "https://cdn-icons-png.flaticon.com/512/149/149071.png",
      text: commentText.trim(),
      date: new Date(),
    };

    try {
      const res = await fetch("https://artifacts-chi-lovat.vercel.app/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(newComment),
      });

      if (res.ok) {
        toast.success("Comment added successfully!");
        setCommentText("");
        loadComments();
        setActiveTab("view");
      } else {
        toast.error("Failed to post comment");
      }
    } catch {
      toast.error("Network error");
    }
  };

  //  Delete comment
  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (!confirm) return;

    try {
      const res = await fetch(`https://artifacts-chi-lovat.vercel.app/comments/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }, // Must include this
        body: JSON.stringify({ email: user.email }), // email send
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Comment deleted");
        loadMyComments();
      } else {
        toast.error(data.message);
      }
    } catch {
      toast.error("Network error");
    }
  };

  //  Update comment
  const handleUpdate = async (id) => {
    if (!editingText.trim()) return toast.warn("Cannot be empty");
    try {
      const res = await fetch(`https://artifacts-chi-lovat.vercel.app/comments/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: user.email, text: editingText }), // email add
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Comment updated");
        setEditingCommentId(null);
        loadMyComments();
      } else {
        toast.error(data.message);
      }
    } catch {
      toast.error("Network error");
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-end bg-black bg-opacity-40 z-50">
      <div className="bg-white w-full sm:w-[600px] rounded-t-2xl p-5 shadow-lg animate-slide-up">
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="font-bold text-xl text-[#8b5e3c]">Comments</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 text-xl"
          >
            ✕
          </button>
        </div>

        {/* Tabs */}
        <div className="flex mt-4 gap-3 border-b pb-2">
          <button
            className={`${
              activeTab === "write"
                ? "border-b-2 border-[#8b5e3c] font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("write")}
          >
            Write a Comment
          </button>
          <button
            className={`${
              activeTab === "view"
                ? "border-b-2 border-[#8b5e3c] font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => {
              setActiveTab("view");
              loadComments();
            }}
          >
            View All Comments
          </button>
          {user && (
            <button
              className={`${
                activeTab === "my"
                  ? "border-b-2 border-[#8b5e3c] font-semibold"
                  : "text-gray-500"
              }`}
              onClick={() => {
                setActiveTab("my");

                loadMyComments();
              }}
            >
              My Comments
            </button>
          )}
        </div>

        {/* Write Comment */}
        {activeTab === "write" && (
          <form onSubmit={handleSubmit} className="mt-4 space-y-3">
            {!user && (
              <>
                <input
                  required
                  type="text"
                  placeholder="Your Name"
                  className="w-full border p-2 rounded"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <input
                  required
                  type="email"
                  placeholder="Your Email"
                  className="w-full border p-2 rounded"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <input
                  type="url"
                  placeholder="Profile Image URL (optional)"
                  className="w-full border p-2 rounded"
                  value={formData.image}
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                />
              </>
            )}
            <textarea
              required
              placeholder="Write your comment..."
              className="w-full border p-2 rounded h-24"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            ></textarea>

            <button
              type="submit"
              className="bg-[#8b5e3c] text-white px-5 py-2 rounded hover:bg-[#a97442] transition"
            >
              Comment
            </button>
          </form>
        )}

        {/* View All Comments */}
        {activeTab === "view" && (
          <div className="mt-4 max-h-80 overflow-y-auto">
            {loading ? (
              <p className="text-center py-3 text-gray-500">Loading...</p>
            ) : comments.length === 0 ? (
              <p className="text-center text-gray-500">No comments yet.</p>
            ) : (
              comments.map((c, i) => (
                <div key={i} className="border-b py-3 flex gap-3 items-start">
                  <img
                    src={
                      c.image ||
                      "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    }
                    alt="User"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-sm">{c.name}</h4>
                    <p
                      className="text-gray-700 text-sm whitespace-pre-line"
                      style={{ wordBreak: "break-word" }}
                    >
                      {c.text}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* My Comments */}
        {activeTab === "my" && (
          <div className="mt-4 max-h-80 overflow-y-auto">
            {loading ? (
              <p className="text-center py-3 text-gray-500">Loading...</p>
            ) : myComments.length === 0 ? (
              <p className="text-center text-gray-500">No comments yet.</p>
            ) : (
              myComments.map((c) => (
                <div
                  key={c._id}
                  className="border-b py-3 flex gap-3 items-start justify-between"
                >
                  <div className="flex gap-3">
                    <img
                      src={
                        c.image ||
                        "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      }
                      alt="User"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-sm">{c.name}</h4>
                      {editingCommentId === c._id ? (
                        <div className="flex flex-col gap-2 mt-1 w-full">
                          <textarea
                            value={editingText}
                            onChange={(e) => setEditingText(e.target.value)}
                            className="border p-2 rounded w-full h-20 resize-none"
                          />
                          <div className="flex gap-2">
                            <button
                              className="text-green-600 font-semibold"
                              onClick={() => handleUpdate(c._id)}
                            >
                              Save
                            </button>
                            <button
                              className="text-red-600 font-semibold"
                              onClick={() => setEditingCommentId(null)}
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <p
                          className="text-gray-700 text-sm whitespace-pre-line"
                          style={{ wordBreak: "break-word" }}
                        >
                          {c.text}
                        </p>
                      )}
                    </div>
                  </div>

                  {editingCommentId !== c._id && (
                    <div className="relative">
                      <button
                        onClick={() => {
                          setEditingCommentId(c._id);
                          setEditingText(c.text);
                        }}
                        className="text-gray-500 hover:text-gray-800 font-bold"
                      >
                        ⋮
                      </button>
                    </div>
                  )}

                  {editingCommentId === c._id && (
                    <div className="flex gap-1 mt-1">
                      <button
                        className="text-red-500 text-sm"
                        onClick={() => handleDelete(c._id)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentModal;
