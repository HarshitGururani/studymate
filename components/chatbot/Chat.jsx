"use client";
import { SendIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Chat = ({ subject }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hey, I am Kevin, your AI assistant!", sender: "bot" },
  ]);
  const chatEndRef = useRef(null);
  const [loading, setLoading] = useState(false);

  // ✅ Load previous chat from sessionStorage
  useEffect(() => {
    const chatHistory = sessionStorage.getItem("chatMessages");
    if (chatHistory) {
      setMessages(JSON.parse(chatHistory));
    }
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    setMessages((prev) => {
      const updatedMessages = [...prev, { text: message, sender: "you" }];
      sessionStorage.setItem("chatMessages", JSON.stringify(updatedMessages));
      return updatedMessages;
    });
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, subject }),
      });

      const data = await res.json();
      if (data.text) {
        setMessages((prev) => {
          const updatedMessages = [...prev, { text: data.text, sender: "bot" }];
          sessionStorage.setItem(
            "chatMessages",
            JSON.stringify(updatedMessages)
          );
          return updatedMessages;
        });
      }
    } catch (error) {
      console.error("Chat Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full h-[34rem] bg-purple-300 text-white font-bold text-lg rounded-lg shadow-lg">
      <div className="m-auto p-4 w-24 rounded-l-md rounded-r-md rounded-t-none bg-black mb-1" />

      {/* Chat messages container */}
      <div className="flex-1 space-y-2 overflow-y-auto mb-3 pr-2 p-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex flex-col ${
              msg.sender === "you" ? "items-end" : "items-start"
            }`}
          >
            <p
              className={`text-xs font-semibold mb-1 ${
                msg.sender === "you" ? "text-white" : "text-black"
              }`}
            >
              {msg.sender === "you" ? "You" : "Kevin"}
            </p>
            <div
              className={`p-2 rounded-md max-w-[80%] ${
                msg.sender === "you"
                  ? "bg-purple-950 text-white"
                  : "bg-gray-100 text-black"
              }`}
            >
              <p className="text-sm leading-relaxed">{msg.text}</p>
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex flex-col items-start">
            <p className="text-xs font-semibold text-black mb-1">Kevin</p>
            <div className="p-2 rounded-md max-w-[80%] bg-gray-100 text-black">
              <p className="text-sm animate-pulse">...</p>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Chat input */}
      <div className="flex gap-1 p-4">
        <Input
          type="text"
          className="w-full text-black border border-black rounded-lg"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <Button
          onClick={sendMessage}
          className="bg-white text-slate-600 hover:text-white rounded-sm"
        >
          <SendIcon />
        </Button>
      </div>
    </div>
  );
};

export default Chat;
