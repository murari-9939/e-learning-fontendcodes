"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart2 } from "lucide-react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const COLORS = ["#3b82f6", "#e5e7eb"]; // Blue = completed, Gray = remaining

// Pie chart data (example: completed vs remaining tasks)
const progressData = [
  { name: "Completed", value: 65 },
  { name: "Remaining", value: 35 },
];

// Weekly activity data (hours spent per day)
const weeklyActivity = [
  { day: "Mon", hours: 1 },
  { day: "Tue", hours: 2 },
  { day: "Wed", hours: 2.5 },
  { day: "Thu", hours: 1 },
  { day: "Fri", hours: 3 },
  { day: "Sat", hours: 4 },
  { day: "Sun", hours: 0.5 },
];

export default function WeeklyActivity() {
  return (
    <Card className="hover:shadow-lg transition p-0 max-w-[400px]">
      {/* Card Header */}
      <CardHeader className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <BarChart2 className="w-5 h-5 text-sky-500" />
          <h3 className="text-lg font-semibold">Weekly Activity</h3>
        </div>
        <Button variant="ghost" size="sm">
          Details
        </Button>
      </CardHeader>

      {/* Card Content */}
      <CardContent className="p-4">
        <div className="flex gap-4 items-center">
          {/* Pie Chart */}
          <div className="w-28 h-28">
            <ResponsiveContainer width="100%" height={110}>
              <PieChart>
                <Pie
                  data={progressData}
                  dataKey="value"
                  innerRadius={36}
                  outerRadius={50}
                  paddingAngle={2}
                  cornerRadius={5}
                >
                  {progressData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={index === 0 ? COLORS[0] : COLORS[1]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart */}
          <div className="flex-1">
            <div className="text-2xl font-bold">65% Complete</div>
            <div className="text-sm text-gray-500">
              Keep going — track your daily learning hours.
            </div>

            <div className="mt-4">
              <ResponsiveContainer width="100%" height={60}>
                <BarChart data={weeklyActivity}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="day" />
                  <YAxis hide />
                  <Bar
                    dataKey="hours"
                    fill="#3b82f6"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
