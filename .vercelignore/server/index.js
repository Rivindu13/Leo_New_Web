import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = process.env.GEMINI_API_KEY;

// Validate API key on startup
if (!API_KEY) {
  console.error("❌ ERROR: GEMINI_API_KEY is not set in .env file!");
}

app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  if (!message || !message.trim()) {
    return res.status(400).json({ reply: "Please provide a message." });
  }

  try {
    console.log("📨 Incoming message:", message);

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `
You are a chatbot for Leo Club of University of Sri Jayewardenepura.

About:
- Founded in 2019
- Over 60 projects
- 100+ members
- Focus on leadership and community service

Answer clearly and friendly. Keep responses concise (2-3 sentences max).

User: ${message}
                  `,
                },
              ],
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error(`❌ Gemini API Error (${response.status}):`, errorData);
      return res.status(response.status).json({ 
        reply: `API Error: ${response.status}. Please try again.` 
      });
    }

    const data = await response.json();

    console.log("✅ Gemini Response:", JSON.stringify(data, null, 2));

    // Extract the text response
    const reply =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn't generate a response. Please try again.";

    res.json({ reply });

  } catch (err) {
    console.error("❌ Server Error:", err.message);
    res.status(500).json({ reply: `Server error: ${err.message}` });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});