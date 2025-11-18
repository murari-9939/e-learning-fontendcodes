"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Radio, Clock } from "lucide-react";
import { Typography } from "@mui/material";

// Single LIVE event structure
interface HappeningNowItem {
  id: number;
  title: string;
  startTime: string;
  endTime: string;
  description: string;
}

// Demo Data (You can replace with API later)
const happeningNowData: HappeningNowItem[] = [
  {
    id: 1,
    title: "Live Virtual Workshop",
    startTime: "2025-09-12T09:00:00Z",
    endTime: "2025-09-12T11:00:00Z",
    description: "A real-time workshop on Full Stack Development is live now.",
  },
  {
    id: 2,
    title: "Counselling Session",
    startTime: "2025-09-12T13:00:00Z",
    endTime: "2025-09-12T14:00:00Z",
    description: "Student counselling session is happening now.",
  },
];

export default function HappeningNow() {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [expandedId, setExpandedId] = useState<number | null>(null);

  // Update time every 30 seconds
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 30000);
    return () => clearInterval(timer);
  }, []);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const isLiveEvent = (start: string, end: string) => {
    const now = currentTime.getTime();
    return now >= new Date(start).getTime() && now <= new Date(end).getTime();
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <Card className="bg-white shadow-lg p-4 relative border-0 w-[400px] h-[500px]">

        {/* Floating badge */}
        <div className="absolute -top-5 left-4 bg-purple-600 px-3 py-1 rounded-full shadow-md flex items-center space-x-2">
          <Radio size={20} className="text-white" />
          <span className="text-white text-sm font-semibold">Happening Now</span>
        </div>

        {/* View Button */}
        <button className="absolute -top-5 right-4 bg-yellow-400 hover:bg-yellow-600 text-white px-3 py-1 rounded-full shadow-md flex items-center space-x-2 text-sm">
          <Eye size={20} className="text-white" />
          <span>View</span>
        </button>

        <CardContent className="overflow-y-auto mt-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          {happeningNowData.map((item) => {
            const live = isLiveEvent(item.startTime, item.endTime);

            return (
              <div
                key={item.id}
                className={`p-4 border-b ${
                  live ? "bg-green-50 border-green-300 rounded-lg" : ""
                }`}
              >
                <div className="flex justify-between items-center">
                  <Typography variant="h6" className="font-bold flex items-center gap-2">
                    {item.title}

                    {live && (
                      <span className="flex items-center gap-1">
                        <span className="h-3 w-3 bg-red-500 rounded-full animate-pulse"></span>
                        <span className="text-red-600 text-sm font-semibold">LIVE</span>
                      </span>
                    )}
                  </Typography>

                  <Typography variant="body2" className="text-gray-600 flex items-center gap-1">
                    <Clock size={16} />
                    {new Date(item.startTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </Typography>
                </div>

                {/* Expandable description */}
                {expandedId === item.id && (
                  <Typography variant="body2" className="mt-2 text-gray-700">
                    {item.description}
                  </Typography>
                )}

                <button
                  className="mt-2 w-full text-blue-600 hover:underline text-sm"
                  onClick={() => toggleExpand(item.id)}
                >
                  {expandedId === item.id ? "Show Less" : "Read More"}
                </button>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}
