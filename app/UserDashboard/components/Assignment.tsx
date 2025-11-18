"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Typography } from "@mui/material";
import { Calendar, CheckCircle, Eye, XCircle } from "lucide-react";

interface Assignment {
  id: number;
  title: string;
  dueDate: string;
  status: "Pending" | "Submitted" | "Late";
  description: string;
}

const assignmentsData: Assignment[] = [
  {
    id: 1,
    title: "React Fundamentals",
    dueDate: "2025-09-01T23:59:00Z",
    status: "Pending",
    description: "Complete exercises on React state and props.",
  },
  {
    id: 2,
    title: "TypeScript Basics",
    dueDate: "2025-08-25T23:59:00Z",
    status: "Submitted",
    description: "Build a small project using TypeScript interfaces and types.",
  },
  {
    id: 3,
    title: "Tailwind CSS Layout",
    dueDate: "2025-08-30T23:59:00Z",
    status: "Late",
    description: "Create responsive layouts with Tailwind CSS grid and flexbox.",
  },
  {
    id: 4,
    title: "JavaScript Async Patterns",
    dueDate: "2025-09-05T23:59:00Z",
    status: "Pending",
    description: "Implement async/await patterns and error handling.",
  },
];

export default function AssignmentList() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
            <Card className="bg-white shadow-lg p-4 relative border-0  max-w-[400px] h-[500px]">
      
      {/* <Card className="bg-white shadow-lg p-4 relative border-0 w-[400px] h-[500px]"> */}
        {/* Header */}
        <div className="absolute -top-5 left-4 bg-blue-800 px-3 py-1 rounded-full shadow-md flex items-center space-x-2">
          <Calendar size={20} className="text-green-600" />
          <span className="text-white text-sm font-semibold">Assignments</span>
        </div>

        <button className="absolute -top-5 right-4 bg-yellow-400 hover:bg-yellow-600 text-white px-3 py-1 rounded-full shadow-md flex items-center space-x-2 text-sm transition-colors duration-300">
          <Eye size={20} className="text-white" />
          <span>View</span>
        </button>

        <CardContent className="overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 mt-4">
          {assignmentsData.map((assignment) => (
            <div key={assignment.id} className="p-4 border-b">
              {/* Title and Due Date */}
              <div className="flex justify-between items-center">
                <Typography variant="h6" className="font-bold">
                  {assignment.title}
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                  Due: {new Date(assignment.dueDate).toLocaleDateString()}
                </Typography>
              </div>

              {/* Status */}
              <div className="flex items-center space-x-2 mt-1">
                {assignment.status === "Submitted" ? (
                  <CheckCircle className="text-green-500" />
                ) : assignment.status === "Late" ? (
                  <XCircle className="text-red-500" />
                ) : (
                  <Calendar className="text-yellow-500" />
                )}
                <Typography
                  variant="body2"
                  className={`font-semibold ${
                    assignment.status === "Submitted"
                      ? "text-green-600"
                      : assignment.status === "Late"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }`}
                >
                  {assignment.status}
                </Typography>
              </div>

              {/* Description */}
              {expandedId === assignment.id && (
                <Typography variant="body2" className="mt-2 text-gray-700">
                  {assignment.description}
                </Typography>
              )}

              <Button
                variant="ghost"
                className="mt-2 text-blue-600 hover:underline w-full sm:w-auto"
                onClick={() => toggleExpand(assignment.id)}
              >
                {expandedId === assignment.id ? "Show Less" : "Read More"}
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
