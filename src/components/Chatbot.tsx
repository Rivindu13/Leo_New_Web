import React, { useState } from "react";
import "./chatbot.css";

const qaPairs = [
  {
    keywords: ["what is leo", "who are leo", "about leo", "leo?"],
    answer:
      "LEO stands for Leadership, Experience, and Opportunity.\n\nIt is an internationally recognized organization dedicated to social service and skill development.",
  },
  {
    keywords: ["describe your club", "about your club", "your club"],
    answer:
      "The Leo Club of District 306 D7 at the University of Sri Jayewardenepura empowers youth through service and leadership.",
  },
  {
    keywords: ["join", "membership", "register"],
    answer: `Fill the form:<br><br>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLScGjGj-vrZjXrJkcKW9HliRa7vD3n6E2YS9IhsDo6Y5uOrnKA/viewform" target="_blank">Join Now</a>`,
  },
  {
    keywords: ["contact", "email", "facebook"],
    answer: `📧 Email: japuraleos@gmail.com<br>
       📘 Facebook: Leo Club of District 306 D7`,
  },
];

// ✅ Suggested Questions
const suggestedQuestions = [
  "📘 What is Leo?",
  "🏫 Tell me about your club",
  "📝 How can I join?",
  "📞 How do I contact you?",
];

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<any[]>([
    {
      sender: "bot",
      text: "Hi 👋 Ask me about Leo Club, joining, or contact info!",
    },
  ]);
  const [input, setInput] = useState("");

  const appendMessage = (text: string, sender: string) => {
    setMessages((prev) => [...prev, { text, sender }]);
  };

  const getLocalAnswer = (userInput: string) => {
    const lower = userInput.toLowerCase();

    for (const qa of qaPairs) {
      for (const keyword of qa.keywords) {
        if (lower.includes(keyword)) {
          return qa.answer;
        }
      }
    }
    return null;
  };

  // ✅ API Call
  const handleAPICall = async (msg: string) => {
    try {
      const res = await fetch("https://leo-new-web.onrender.com/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: msg }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.reply || `Server error: ${res.status}`);
      }

      const data = await res.json();
      appendMessage(data.reply || "No response from server", "bot");
    } catch (err: any) {
      console.error("Chat Error:", err);
      appendMessage(
        "Sorry, I'm having trouble connecting right now. Try again later.",
        "bot"
      );
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    appendMessage(input, "user");

    const local = getLocalAnswer(input);

    if (local) {
      appendMessage(local, "bot");
      setInput("");
      return;
    }

    await handleAPICall(input);
    setInput("");
  };

  // ✅ Suggestion click
  const handleSuggestionClick = async (question: string) => {
    appendMessage(question, "user");

    const local = getLocalAnswer(question);

    if (local) {
      appendMessage(local, "bot");
      return;
    }

    await handleAPICall(question);
  };

  // ✅ Check if last message is from bot
  const lastMessage = messages[messages.length - 1];
  const showSuggestions = lastMessage?.sender === "bot";

  return (
    <>
      {/* Floating Button */}
      <button
        className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full 
        bg-gradient-to-r from-blue-500 to-indigo-500 
        shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center text-white text-xl"
        onClick={() => setOpen(!open)}
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-[9999] w-[320px] 
        backdrop-blur-xl bg-white/10 border border-white/20 
        rounded-2xl shadow-2xl overflow-hidden animate-fadeIn"
        >
          {/* Header */}
          <div
            className="flex justify-between items-center px-4 py-3 
          bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold"
          >
            <span>J'pura D7 Assistant</span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          {/* Messages */}
          <div className="h-64 overflow-y-auto p-3 space-y-2 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[80%] px-3 py-2 rounded-xl ${
                  msg.sender === "user"
                    ? "ml-auto bg-blue-500 text-white"
                    : "bg-white/20 text-white backdrop-blur-md"
                }`}
                dangerouslySetInnerHTML={{
                  __html: msg.text.replace(/\n/g, "<br>"),
                }}
              />
            ))}
          </div>

          {/* ✅ Suggestions after EVERY bot reply */}
          {showSuggestions && (
            <div className="px-3 pb-2 flex flex-wrap gap-2">
              {suggestedQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleSuggestionClick(q)}
                  className="text-xs px-3 py-1 rounded-full bg-white/20 text-white hover:bg-white/30 transition"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="flex border-t border-white/20">
            <input
              className="flex-1 px-3 py-2 bg-transparent text-white placeholder-white/60 outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
              placeholder="Ask something..."
            />
            <button
              className="px-4 text-blue-300 hover:text-white transition"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;