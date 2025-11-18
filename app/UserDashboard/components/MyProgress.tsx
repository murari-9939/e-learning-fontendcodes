"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Eye, CheckCircle, Clock, BarChart2 } from "lucide-react";
import { Typography } from "@mui/material";

interface ProgressItem {
  id: number;
  title: string;
  progress: number; // 0–100
  status: "In Progress" | "Completed" | "Pending";
  description: string;
}

const progressData: ProgressItem[] = [
  {
    id: 1,
    title: "React + Next.js Course",
    progress: 75,
    status: "In Progress",
    description:
      "Learn advanced Next.js structure, routing, state management, SSR & performance.",
  },
  {
    id: 2,
    title: "DSA (JavaScript)",
    progress: 40,
    status: "In Progress",
    description:
      "Solve essential DSA patterns including arrays, recursion, and graphs.",
  },
  {
    id: 3,
    title: "UI/UX Fundamentals",
    progress: 100,
    status: "Completed",
    description:
      "Design fundamentals, typography, spacing, modern component architecture.",
  },
  {
    id: 4,
    title: "Python Basics",
    progress: 10,
    status: "Pending",
    description: "Variables, loops, if-else, OOP basics & beginner exercises.",
  },
];

export default function MyProgress() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) =>
    setExpandedId(expandedId === id ? null : id);

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
         <Card className="bg-white shadow-lg p-4 relative border-0 w-full max-w-[2000px] h-[500px]">

        {/* Floating Label */}
        <div className="absolute -top-5 left-4 bg-indigo-600 px-3 py-1 rounded-full shadow-md flex items-center space-x-2">
          <BarChart2 size={20} className="text-white" />
          <span className="text-white text-sm font-semibold">My Progress</span>
        </div>

        {/* View Button */}
        <button className="absolute -top-5 right-4 bg-yellow-400 hover:bg-yellow-600 text-white px-3 py-1 rounded-full shadow-md flex items-center space-x-2 text-sm transition">
          <Eye size={18} className="text-white" />
          <span>View</span>
        </button>

        <CardContent className="overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 mt-4">
          {progressData.map((item) => (
            <div key={item.id} className="p-4 border-b">

              {/* Title + Status */}
              <div className="flex justify-between items-center">
                <Typography variant="h6" className="font-bold">
                  {item.title}
                </Typography>

                {/* Status Icon */}
                {item.status === "Completed" ? (
                  <CheckCircle className="text-green-500" />
                ) : item.status === "In Progress" ? (
                  <Clock className="text-orange-500 animate-pulse" />
                ) : (
                  <Clock className="text-gray-400" />
                )}
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 h-2 rounded-full mt-3">
                <div
                  className={`
                    h-2 rounded-full
                    ${item.progress === 100
                      ? "bg-green-500"
                      : item.progress > 50
                      ? "bg-indigo-500"
                      : "bg-orange-500"}
                  `}
                  style={{ width: `${item.progress}%` }}
                />
              </div>

              <Typography
                variant="body2"
                className="text-gray-700 mt-1 font-medium"
              >
                {item.progress}% completed
              </Typography>

              {/* Expandable Details */}
              {expandedId === item.id && (
                <Typography variant="body2" className="mt-2 text-gray-700">
                  {item.description}
                </Typography>
              )}

              <Button
                variant="ghost"
                className="mt-2 text-blue-600 hover:underline w-full sm:w-auto"
                onClick={() => toggleExpand(item.id)}
              >
                {expandedId === item.id ? "Show Less" : "View Details"}
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}


