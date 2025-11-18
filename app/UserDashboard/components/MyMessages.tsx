"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Typography } from "@mui/material";
import { MessageCircle, Eye, CheckCircle, XCircle } from "lucide-react";

interface Message {
  id: number;
  title: string;
  receivedDate: string;
  status: "Unread" | "Read" | "Important";
  content: string;
}

const messagesData: Message[] = [
  {
    id: 1,
    title: "Welcome to the Portal",
    receivedDate: "2025-08-20T10:00:00Z",
    status: "Unread",
    content: "Hello! Welcome to your student portal. Explore the features.",
  },
  {
    id: 2,
    title: "Exam Schedule",
    receivedDate: "2025-08-22T14:30:00Z",
    status: "Read",
    content: "Your midterm exam schedule has been published. Check it now.",
  },
  {
    id: 3,
    title: "Scholarship Update",
    receivedDate: "2025-08-24T09:00:00Z",
    status: "Important",
    content: "Congratulations! You are shortlisted for the merit-based scholarship.",
  },
   {
    id: 4,
    title: "Exam Schedule",
    receivedDate: "2025-08-22T14:30:00Z",
    status: "Read",
    content: "Your midterm exam schedule has been published. Check it now.",
  },
  {
    id: 5,
    title: "Scholarship Update",
    receivedDate: "2025-08-24T09:00:00Z",
    status: "Important",
    content: "Congratulations! You are shortlisted for the merit-based scholarship.",
  },
];

export default function MyMessages() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => setExpandedId(expandedId === id ? null : id);

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
                  <Card className="bg-white shadow-lg p-4 relative border-0  max-w-[480px] h-[500px]">
      
      {/* <Card className="bg-white shadow-lg p-4 relative border-0 w-[400px] h-[500px]"> */}
        <div className="absolute -top-5 left-4 bg-purple-600 px-3 py-1 rounded-full shadow-md flex items-center space-x-2">
          <MessageCircle size={20} className="text-white" />
          <span className="text-white text-sm font-semibold">My Messages</span>
        </div>

        <button className="absolute -top-5 right-4 bg-yellow-400 hover:bg-yellow-600 text-white px-3 py-1 rounded-full shadow-md flex items-center space-x-2 text-sm transition-colors duration-300">
          <Eye size={20} className="text-white" />
          <span>View</span>
        </button>

        <CardContent className="overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 mt-4">
          {messagesData.map((msg) => (
            <div key={msg.id} className="p-4 border-b">
              <div className="flex justify-between items-center">
                <Typography variant="h6" className="font-bold">{msg.title}</Typography>
                <Typography variant="body2" className="text-gray-600">
                  {new Date(msg.receivedDate).toLocaleDateString()}
                </Typography>
              </div>

              <div className="flex items-center space-x-2 mt-1">
                {msg.status === "Read" ? (
                  <CheckCircle className="text-green-500" />
                ) : msg.status === "Important" ? (
                  <XCircle className="text-red-500" />
                ) : (
                  <MessageCircle className="text-yellow-500" />
                )}
                <Typography
                  variant="body2"
                  className={`font-semibold ${
                    msg.status === "Read"
                      ? "text-green-600"
                      : msg.status === "Important"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }`}
                >
                  {msg.status}
                </Typography>
              </div>

              {expandedId === msg.id && (
                <Typography variant="body2" className="mt-2 text-gray-700">
                  {msg.content}
                </Typography>
              )}

              <Button
                variant="ghost"
                className="mt-2 text-blue-600 hover:underline w-full sm:w-auto"
                onClick={() => toggleExpand(msg.id)}
              >
                {expandedId === msg.id ? "Show Less" : "Read More"}
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
