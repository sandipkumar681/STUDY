"use client";
import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

type ChattingMessagesType = string[];

export default function App() {
  const [message, setMessage] = useState("");
  const socketRef = useRef<Socket | null>(null);
  const [chattingMessages, setChattingMessages] =
    useState<ChattingMessagesType>([]);
  const [userSocketId, setUserSocketId] = useState<null | string>(null);
  const [persionalUserId, setPersionalUserId] = useState("");
  const [persionalMessage, setPersionalMessage] = useState("");

  useEffect(() => {
    const socket = io("http://localhost:8000");

    socket.on("connect", () => {
      if (socket.id) {
        console.log("setting socket id");
        setUserSocketId(socket.id);
      }
      console.log("Connected to server:", socket);
    });

    if (socket.id) {
      console.log("setting socket id");
      setUserSocketId(socket.id);
    }

    socketRef.current = socket;

    socket.on("server-message", (message) =>
      setChattingMessages((prev) => [...prev, message])
    );

    socket.on("personal-message", (message) =>
      setChattingMessages((prev) => [...prev, message])
    );

    return () => {
      socket.off("server-message");
      socket.off("personal-message");
      socket.disconnect();
    };
  }, []);

  const handleSendMessageToEveryOne = () => {
    if (message.length <= 0) {
      alert("Must add a message");
      return;
    }
    if (socketRef.current) {
      socketRef.current.emit("user-message", message);
      setMessage("");
    }
  };

  const handleSendMessagePersonally = () => {
    if (persionalMessage.length <= 0 || persionalUserId.length <= 0) {
      alert("Must add a message and person's id");
      return;
    }
    if (socketRef.current) {
      socketRef.current.emit("personal-message", {
        userId: persionalUserId,
        message: persionalMessage,
      });
      setPersionalUserId("");
      setPersionalMessage("");
    }
  };

  return (
    <header className="flex flex-row justify-around min-h-screen">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-3xl">Web Socket Tutorial</h1>
        <h2 className="text-2xl">User id: {userSocketId}</h2>
        <input
          type="text"
          placeholder="Enter your message"
          className="p-3 text-lg rounded-xl mx-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={handleSendMessageToEveryOne}
          className="bg-gray-500 cursor-pointer text-white p-4 rounded-2xl text-xl"
        >
          Send message to EveryOne
        </button>
        <input
          type="text"
          placeholder="Enter Receiver's id"
          className="p-3 text-lg rounded-xl mx-2"
          value={persionalUserId}
          onChange={(e) => setPersionalUserId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your persional mesage"
          className="p-3 text-lg rounded-xl mx-2"
          value={persionalMessage}
          onChange={(e) => setPersionalMessage(e.target.value)}
        />
        <button
          onClick={handleSendMessagePersonally}
          className="bg-gray-500 cursor-pointer text-white p-4 rounded-2xl text-xl"
        >
          Send message Persionally
        </button>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-3xl">All Messages</h1>
        {chattingMessages.length > 0 ? (
          chattingMessages.map((p, index) => <p key={index}>{p}</p>)
        ) : (
          <p className="text-red-500 text-xl">No messages yet!</p>
        )}
      </div>
    </header>
  );
}
