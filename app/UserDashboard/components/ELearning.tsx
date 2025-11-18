"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, BookOpen, User, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CourseItem {
  id: number;
  title: string;
  instructor: string;
  duration: string;
  thumbnail: string;
}

const courseData: CourseItem[] = [
  {
    id: 1,
    title: "Full Stack Development",
    instructor: "John Doe",
    duration: "24 Hours",
    thumbnail: "https://source.unsplash.com/600x400/?coding",
  },
  {
    id: 2,
    title: "AI & Machine Learning",
    instructor: "Dr. Smith",
    duration: "18 Hours",
    thumbnail: "https://source.unsplash.com/600x400/?artificial-intelligence",
  },
  {
    id: 3,
    title: "Cyber Security Essentials",
    instructor: "Michael Clark",
    duration: "15 Hours",
    thumbnail: "https://source.unsplash.com/600x400/?cyber-security",
  },
  {
    id: 4,
    title: "Data Science with Python",
    instructor: "Sara Lopez",
    duration: "22 Hours",
    thumbnail: "https://source.unsplash.com/600x400/?data-science",
  },
  {
    id: 5,
    title: "AI & Machine Learning",
    instructor: "Dr. Smith",
    duration: "18 Hours",
    thumbnail: "https://source.unsplash.com/600x400/?artificial-intelligence",
  },
  {
    id: 6,
    title: "Cyber Security Essentials",
    instructor: "Michael Clark",
    duration: "15 Hours",
    thumbnail: "https://source.unsplash.com/600x400/?cyber-security",
  },
  {
    id: 7,
    title: "Data Science with Python",
    instructor: "Sara Lopez",
    duration: "22 Hours",
    thumbnail: "https://source.unsplash.com/600x400/?data-science",
  },
];

export default function ELearning() {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
        
      {/* Make the card width responsive */}
      <Card className="bg-white shadow-lg p-4 relative border-0 w-full max-w-[2000px] h-[500px]">

        {/* Floating Header */}
        <div className="absolute -top-5 left-4 bg-purple-600 px-3 py-1 rounded-full shadow-md flex items-center space-x-2">
          <BookOpen size={20} className="text-white" />
          <span className="text-white text-sm font-semibold">E-Learning</span>
        </div>

        {/* View Button */}
        <button className="absolute -top-5 right-4 bg-yellow-400 hover:bg-yellow-600 text-white px-3 py-1 rounded-full shadow-md flex items-center space-x-2 text-sm transition">
          <Eye size={20} className="text-white" />
          <span>View</span>
        </button>

        <CardContent className="overflow-y-auto h-full mt-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {courseData.map((course) => (
              <div
                key={course.id}
                className="p-3 bg-white rounded-xl shadow-md hover:shadow-lg transition border"
              >
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-32 object-cover rounded-lg"
                />

                <h3 className="text-sm font-bold mt-2">{course.title}</h3>

                <div className="mt-2 text-xs text-gray-600 space-y-1">
                  <div className="flex items-center space-x-1">
                    <User size={14} />
                    <span>{course.instructor}</span>
                  </div>

                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{course.duration}</span>
                  </div>
                </div>

                <Button className="mt-3 w-full bg-purple-600 hover:bg-purple-700 text-white text-xs py-1">
                  Start
                </Button>
              </div>
            ))}
          </div>

        </CardContent>
      </Card>
    </div>
  );
}
