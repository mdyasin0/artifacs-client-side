import React, { useEffect, useState } from "react";
import axios from "axios";

const ArtifactQuiz = () => {
  const [artifacts, setArtifacts] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [total, setTotal] = useState(0);

  const questionFields = [
    { field: "timePeriod", label: "Time Period" },
    { field: "material", label: "Material" },
    { field: "origin", label: "Origin" },
    { field: "condition", label: "Condition" },
    { field: "currentLocation", label: "Current Location" },
    { field: "description", label: "Description" },
    { field: "discoveredBy", label: "Discovered By" },
    { field: "dateOfDiscovery", label: "Date of Discovery" },
    { field: "historicalContext", label: "Historical Context" },
  ];

  // Fetch data from backend
  useEffect(() => {
    axios
      .get("https://artifacts-chi-lovat.vercel.app/artifacts")
      .then((res) => setArtifacts(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Generate a random question
  const generateRandomQuestion = () => {
    if (artifacts.length === 0) return;

    const randomArtifact = artifacts[Math.floor(Math.random() * artifacts.length)];
    const randomField = questionFields[Math.floor(Math.random() * questionFields.length)];
    const correctAnswer = randomArtifact[randomField.field] || "Unknown";

    // Create multiple choice options
    let options = [correctAnswer];
    while (options.length < 4) {
      const randomOptionArtifact = artifacts[Math.floor(Math.random() * artifacts.length)];
      const randomOption = randomOptionArtifact[randomField.field] || "Unknown";
      if (!options.includes(randomOption)) options.push(randomOption);
    }

    // Shuffle options
    options = options.sort(() => Math.random() - 0.5);

    setCurrentQuestion({
      artifact: randomArtifact,
      questionText: `What is the ${randomField.label} of "${randomArtifact.title}"?`,
      correctAnswer,
      options,
    });
  };

  // Handle answer selection
  const handleAnswer = (answer) => {
    setTotal((prev) => prev + 1);

    if (answer.trim().toLowerCase() === currentQuestion.correctAnswer.trim().toLowerCase()) {
      setScore((prev) => prev + 1);
    } else {
      setWrong((prev) => prev + 1);
    }

    // Load next question
    setTimeout(() => generateRandomQuestion(), 500);
  };

  // Restart quiz
  const restartQuiz = () => {
    setScore(0);
    setWrong(0);
    setTotal(0);
    setCurrentQuestion(null);
  };

  return (
    <div className="max-w-2xl mx-auto my-20 p-6 bg-gradient-to-b from-indigo-100 to-white rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6 text-indigo-600">
        🏺 Artifact Quiz
      </h2>

      <div className="flex justify-between mb-4 text-lg font-medium text-gray-700">
        <p>Total: {total}</p>
        <p className="text-green-600">Correct: {score}</p>
        <p className="text-red-500">Wrong: {wrong}</p>
      </div>

      {!currentQuestion && (
        <div className="text-center">
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg text-lg transition duration-300"
            onClick={generateRandomQuestion}
          >
            🚀 Start Quiz
          </button>
        </div>
      )}

      {currentQuestion && (
        <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
          <p className="mb-4 text-xl font-semibold text-gray-800">
            {currentQuestion.questionText}
          </p>
          <div className="grid grid-cols-1 gap-3">
            {currentQuestion.options.map((opt, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(opt)}
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-4 py-2 rounded-lg transition duration-300"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {(total > 0 || currentQuestion) && (
        <div className="text-center mt-6">
          <button
            onClick={restartQuiz}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition duration-300"
          >
            🔁 Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default ArtifactQuiz;
