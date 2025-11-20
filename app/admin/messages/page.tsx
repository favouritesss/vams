'use client'

import React, { useEffect, useState } from "react";

interface Message {
  id: string;      // or number — depending on your JSON file
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    fetch("/messages.json")
      .then(res => res.json())
      .then((data: Message[]) => setMessages(data));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Received Messages</h1>

      {messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <div className="space-y-4">
          {messages.map(msg => (
            <div key={msg.id} className="border p-4 rounded-lg bg-card">
              <h2 className="font-bold text-lg">{msg.subject}</h2>
              <p><b>Name:</b> {msg.name}</p>
              <p><b>Email:</b> {msg.email}</p>
              <p className="mt-2">{msg.message}</p>
              <p className="text-xs text-muted-foreground mt-3">{msg.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
