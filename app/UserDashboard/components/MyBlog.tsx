"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Eye, CheckCircle } from "lucide-react";
import { Typography } from "@mui/material";

interface BlogItem {
  id: number;
  title: string;
  author: string;
  date: string;
  category: string;
  description: string;
  isNew?: boolean; // optional property
}

const blogData: BlogItem[] = [
  {
    id: 1,
    title: "Understanding React Hooks",
    author: "John Doe",
    date: "2025-09-01",
    category: "React",
    description:
      "Dive deep into React Hooks including useState, useEffect, useContext, and custom hooks for advanced state management.",
    isNew: true,
  },
  {
    id: 2,
    title: "JavaScript ES2025 Features",
    author: "Jane Smith",
    date: "2025-08-25",
    category: "JavaScript",
    description:
      "Explore the latest ECMAScript 2025 features like optional chaining, nullish coalescing, and new array methods.",
  },
  {
    id: 3,
    title: "Next.js SSR vs SSG",
    author: "Michael Clark",
    date: "2025-08-30",
    category: "Next.js",
    description:
      "Learn the difference between Server-Side Rendering and Static Site Generation in Next.js with examples and best practices.",
  },
  {
    id: 4,
    title: "CSS Grid vs Flexbox",
    author: "Sara Lopez",
    date: "2025-09-05",
    category: "CSS",
    description:
      "A practical guide comparing CSS Grid and Flexbox, showing when to use each layout method effectively.",
  },
];

export default function MyBlog() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) =>
    setExpandedId(expandedId === id ? null : id);

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <Card className="bg-white shadow-lg p-4 relative border-0 w-full max-w-[400px] h-[500px]">

        {/* Floating Label */}
        <div className="absolute -top-5 left-4 bg-indigo-600 px-3 py-1 rounded-full shadow-md flex items-center space-x-2">
          <FileText size={20} className="text-white" />
          <span className="text-white text-sm font-semibold">Latest Blogs</span>
        </div>

        {/* View Button */}
        <button className="absolute -top-5 right-4 bg-yellow-400 hover:bg-yellow-600 text-white px-3 py-1 rounded-full shadow-md flex items-center space-x-2 text-sm transition">
          <Eye size={18} className="text-white" />
          <span>View All</span>
        </button>

        <CardContent className="overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 mt-4">
          {blogData.map((item) => (
            <div key={item.id} className="p-4 border-b">

              {/* Title + New Badge */}
              <div className="flex justify-between items-center gap-2">
                <Typography variant="h6" className="font-bold flex items-center gap-2">
                  {item.title}
                  {item.isNew && (
                    <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                      New
                    </span>
                  )}
                </Typography>
                <CheckCircle className="text-green-500" />
              </div>

              {/* Meta Info */}
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>By {item.author}</span>
                <span>{new Date(item.date).toLocaleDateString()}</span>
              </div>

              <div className="text-sm text-gray-500 mt-1 font-medium">
                Category: {item.category}
              </div>

              {/* Expandable Description */}
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
                {expandedId === item.id ? "Show Less" : "Read More"}
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
