"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, BellRing, AlertTriangle, Eye } from "lucide-react";
import { Typography } from "@mui/material";

interface EventItem {
  id: number;
  title: string;
  date: string;
  type: "Event" | "Alert" | "Happening Now";
  description: string;
}

const eventsData: EventItem[] = [
  {
    id: 1,
    title: "Tech Fest 2025",
    date: "2025-09-10T10:00:00Z",
    type: "Event",
    description: "Join the annual Tech Fest featuring robotics, AI workshops & more.",
  },
  {
    id: 2,
    title: "Server Maintenance",
    date: "2025-09-12T09:00:00Z",
    type: "Alert",
    description: "Portal will be down for maintenance from 9 AM to 1 PM.",
  },
  {
    id: 3,
    title: "Live Seminar",
    date: new Date().toISOString(), // Happening Now
    type: "Happening Now",
    description: "Guest speaker session on career development is live.",
  },
  {
    id: 4,
    title: "Sports Meet",
    date: "2025-09-15T07:00:00Z",
    type: "Event",
    description: "Annual sports meet registration is now open.",
  },
];

export default function MyEvents() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) =>
    setExpandedId(expandedId === id ? null : id);

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
 <Card className="bg-white shadow-lg p-4 relative border-0 w-full max-w-[400px] h-[500px]">
        
      {/* <Card className="bg-white shadow-lg p-4 relative border-0 w-[400px] h-[500px]"> */}
        
        {/* Floating label */}
        <div className="absolute -top-5 left-4 bg-purple-600 px-3 py-1 rounded-full shadow-md flex items-center space-x-2">
          <BellRing size={20} className="text-white" />
          <span className="text-white text-sm font-semibold">Events & Alerts</span>
        </div>

        {/* View Button */}
        <button className="absolute -top-5 right-4 bg-yellow-400 hover:bg-yellow-600 text-white px-3 py-1 rounded-full shadow-md flex items-center space-x-2 text-sm transition-colors duration-300">
          <Eye size={20} className="text-white" />
          <span>View</span>
        </button>

        <CardContent className="overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 mt-4">
          {eventsData.map((event) => (
            <div key={event.id} className="p-4 border-b">
              <div className="flex justify-between items-center">
                <Typography variant="h6" className="font-bold">{event.title}</Typography>
                <Typography variant="body2" className="text-gray-600">
                  {new Date(event.date).toLocaleDateString()}
                </Typography>
              </div>

              <div className="flex items-center space-x-2 mt-1">
                {event.type === "Event" ? (
                  <CalendarDays className="text-blue-500" />
                ) : event.type === "Alert" ? (
                  <AlertTriangle className="text-red-500" />
                ) : (
                  <BellRing className="text-green-500 animate-pulse" />
                )}

                <Typography
                  variant="body2"
                  className={`font-semibold ${
                    event.type === "Event"
                      ? "text-blue-600"
                      : event.type === "Alert"
                      ? "text-red-600"
                      : "text-green-600"
                  }`}
                >
                  {event.type}
                </Typography>
              </div>

              {expandedId === event.id && (
                <Typography variant="body2" className="mt-2 text-gray-700">
                  {event.description}
                </Typography>
              )}

              <Button
                variant="ghost"
                className="mt-2 text-blue-600 hover:underline w-full sm:w-auto"
                onClick={() => toggleExpand(event.id)}
              >
                {expandedId === event.id ? "Show Less" : "Read More"}
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
