import React, { useState } from "react";

const GeminiAI = () => {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = "AIzaSyBJdZSxghEhK0RHpIs-4Y3FpTmw27LeBKY";

  const askGemini = async () => {
    setLoading(true);
    setResponse("");

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [{ text: "Explain how AI works" }],
              },
            ],
          }),
        }
      );

      const data = await res.json();

      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      setResponse(text || "No response from Gemini.");
    } catch (error) {
      console.error("Error:", error);
      setResponse("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-xl text-center">
      <h2 className="text-2xl font-bold mb-4 text-purple-700">🔮 Ask Gemini AI</h2>
      <button
        onClick={askGemini}
        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
        disabled={loading}
      >
        {loading ? "Thinking..." : "Ask: How AI Works"}
      </button>
      <div className="mt-6 text-gray-800 text-left whitespace-pre-line">
        {response && (
          <>
            <h3 className="font-bold text-purple-600 mb-2">💡 Response:</h3>
            <p>{response}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default GeminiAI;
