// "use client";

// import React, { useEffect, useState } from "react";
// import {
//   Card,
//   CardHeader,
//   CardContent,
//   CardFooter,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Avatar } from "@/components/ui/avatar";
// import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
// import { Bell, BookOpen, User, Clock, Calendar, Award, MessageSquare, BarChart2, MoreHorizontal, CheckCircle, XCircle, Eye } from "lucide-react";
// import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

// // ---------- Mock Data & Helpers ----------
// const mockNotifications = {
//   count: 2,
//   latest: [
//     { id: 1, title: "Assignment deadline tomorrow", time: "2h ago" },
//     { id: 2, title: "New course: Advanced React", time: "1d ago" },
//   ],
// };

// const progressData = [
//   { name: "Completed", value: 65 },
//   { name: "Remaining", value: 35 },
// ];

// const weeklyActivity = [
//   { day: "Mon", hours: 1 },
//   { day: "Tue", hours: 2 },
//   { day: "Wed", hours: 2.5 },
//   { day: "Thu", hours: 1 },
//   { day: "Fri", hours: 3 },
//   { day: "Sat", hours: 4 },
//   { day: "Sun", hours: 0.5 },
// ];

// const COLORS = ["#60A5FA", "#F87171", "#34D399", "#FBBF24"];

// interface Assignment {
//   id: number;
//   title: string;
//   dueDate: string;
//   status: "Pending" | "Submitted" | "Late";
//   description: string;
// }

// const assignmentsData: Assignment[] = [
//   {
//     id: 1,
//     title: "React Fundamentals",
//     dueDate: "2025-09-01T23:59:00Z",
//     status: "Pending",
//     description: "Complete exercises on React state and props.",
//   },
//   {
//     id: 2,
//     title: "TypeScript Basics",
//     dueDate: "2025-08-25T23:59:00Z",
//     status: "Submitted",
//     description: "Build a small project using TypeScript interfaces and types.",
//   },
//   {
//     id: 3,
//     title: "Tailwind CSS Layout",
//     dueDate: "2025-08-30T23:59:00Z",
//     status: "Late",
//     description: "Create responsive layouts with Tailwind CSS grid and flexbox.",
//   },
//   {
//     id: 4,
//     title: "JavaScript Async Patterns",
//     dueDate: "2025-09-05T23:59:00Z",
//     status: "Pending",
//     description: "Implement async/await patterns and error handling.",
//   },
// ];

// // ---------- Components ----------
// function Topbar({ notificationCount }: { notificationCount: number }) {
//   return (
//     <div className="w-full flex items-center justify-between mb-6">
//       <div>
//         <h1 className="text-2xl md:text-3xl font-bold">Welcome back 👋</h1>
//         <p className="text-sm text-gray-600">Here’s your learning overview for today.</p>
//       </div>

//       <div className="flex items-center gap-4">
//         <div className="relative">
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
//                 <Bell className="w-6 h-6 text-gray-700" />
//                 {notificationCount > 0 && (
//                   <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">{notificationCount}</span>
//                 )}
//               </button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent className="w-64">
//               <div className="p-2">
//                 <strong className="block">Notifications</strong>
//                 <p className="text-xs text-gray-500">You have {notificationCount} new</p>
//               </div>
//               <div className="divide-y">
//                 {mockNotifications.latest.map((n) => (
//                   <DropdownMenuItem key={n.id} className="flex flex-col items-start">
//                     <span className="text-sm">{n.title}</span>
//                     <span className="text-xs text-gray-400">{n.time}</span>
//                   </DropdownMenuItem>
//                 ))}
//               </div>
//               <div className="p-2">
//                 <Button variant="ghost" className="w-full">View All</Button>
//               </div>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>

//         <div className="flex items-center gap-3">
//           <span className="hidden md:block text-sm text-gray-600">Murari Jha</span>
//           <Avatar>
//             <img src="/avatar.png" alt="avatar" />
//           </Avatar>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Sidebar() {
//   return (
//     <aside className="w-full md:w-72 bg-white rounded-lg p-4 shadow-sm sticky top-6 h-[calc(100vh-48px)]">
//       <div className="mb-4">
//         <h3 className="text-lg font-semibold mb-1">Overview</h3>
//         <p className="text-sm text-gray-500">Quick links & actions</p>
//       </div>

//       <nav className="space-y-2">
//         <a className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 cursor-pointer"><BookOpen /> Courses</a>
//         <a className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 cursor-pointer"><Clock /> Progress</a>
//         <a className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 cursor-pointer"><Calendar /> Calendar</a>
//         <a className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 cursor-pointer"><MessageSquare /> Messages</a>
//       </nav>

//       <div className="mt-6">
//         <h4 className="text-sm font-medium">Goals</h4>
//         <div className="mt-2 text-sm text-gray-600">Complete 3 lessons this week</div>
//         <div className="w-full bg-gray-100 h-2 rounded-full mt-2">
//           <div className="h-2 rounded-full bg-blue-500" style={{ width: "40%" }} />
//         </div>
//       </div>
//     </aside>
//   );
// }

// function ProgressCard() {
//   return (
//     <Card className="hover:shadow-lg transition p-0">
//       <CardHeader className="flex items-center justify-between p-4">
//         <div className="flex items-center gap-3">
//           <BarChart2 className="w-5 h-5 text-sky-500" />
//           <h3 className="text-lg font-semibold">Learning Progress</h3>
//         </div>
//         <Button variant="ghost" size="sm">Details</Button>
//       </CardHeader>

//       <CardContent className="p-4">
//         <div className="flex gap-4 items-center">
//           <div className="w-28 h-28">
//             <ResponsiveContainer width="100%" height={110}>
//               <PieChart>
//                 <Pie data={progressData} dataKey="value" innerRadius={36} outerRadius={50} paddingAngle={2}>
//                   {progressData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={index === 0 ? COLORS[0] : COLORS[1]} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//               </PieChart>
//             </ResponsiveContainer>
//           </div>

//           <div className="flex-1">
//             <div className="text-2xl font-bold">65% Complete</div>
//             <div className="text-sm text-gray-500">Keep going — you are doing great!</div>

//             <div className="mt-4">
//               <ResponsiveContainer width="100%" height={60}>
//                 <BarChart data={weeklyActivity}>
//                   <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                   <XAxis dataKey="day" />
//                   <YAxis hide />
//                   <Bar dataKey="hours" />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//         </div>
//       </CardContent>

//       <CardFooter className="p-4">
//         <div className="flex items-center justify-between w-full">
//           <div className="text-sm text-gray-600">This week: 14.0 hrs</div>
//           <Button variant="ghost" size="sm">View Analytics</Button>
//         </div>
//       </CardFooter>
//     </Card>
//   );
// }

// function NotificationCard({ notification }: { notification: typeof mockNotifications }) {
//   return (
//     <Card className="hover:shadow-lg transition">
//       <CardHeader className="flex items-center justify-between p-4">
//         <div className="flex items-center gap-3">
//           <Bell className="text-yellow-500 w-5 h-5" />
//           <h3 className="text-lg font-semibold">Notifications</h3>
//         </div>
//         {notification.count > 0 && (
//           <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">{notification.count}</span>
//         )}
//       </CardHeader>

//       <CardContent className="p-4">
//         <ul className="space-y-2">
//           {notification.latest.map((n) => (
//             <li key={n.id} className="flex items-start justify-between">
//               <div>
//                 <div className="text-sm font-medium">{n.title}</div>
//                 <div className="text-xs text-gray-400">{n.time}</div>
//               </div>
//               <div className="text-xs text-gray-400">•</div>
//             </li>
//           ))}
//         </ul>
//       </CardContent>

//       <CardFooter className="p-4">
//         <Button variant="outline" size="sm">View All</Button>
//       </CardFooter>
//     </Card>
//   );
// }

// function AssignmentListClient() {
//   const [expandedId, setExpandedId] = useState<number | null>(null);

//   const toggleExpand = (id: number) => {
//     setExpandedId(expandedId === id ? null : id);
//   };

//   return (
//     <Card className="bg-white shadow-lg p-4 h-full">
//       <div className="relative">
//         <div className="absolute -top-5 left-4 bg-blue-800 px-3 py-1 rounded-full shadow-md flex items-center space-x-2 text-white">
//           <Calendar size={16} className="text-white" />
//           <span className="text-sm font-semibold">Assignments</span>
//         </div>

//         <button className="absolute -top-5 right-4 bg-yellow-400 hover:bg-yellow-600 text-white px-3 py-1 rounded-full shadow-md flex items-center space-x-2 text-sm transition-colors duration-300">
//           <Eye size={16} className="text-white" />
//           <span>View</span>
//         </button>
//       </div>

//       <CardContent className="overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 mt-6">
//         {assignmentsData.map((assignment) => (
//           <div key={assignment.id} className="p-3 border rounded-lg hover:bg-gray-50 transition">
//             <div className="flex justify-between items-center">
//               <div>
//                 <div className="font-bold">{assignment.title}</div>
//                 <div className="text-xs text-gray-500">Due: {new Date(assignment.dueDate).toLocaleDateString()}</div>
//               </div>
//               <div className="flex items-center gap-3">
//                 {assignment.status === "Submitted" ? (
//                   <CheckCircle className="text-green-500" />
//                 ) : assignment.status === "Late" ? (
//                   <XCircle className="text-red-500" />
//                 ) : (
//                   <Calendar className="text-yellow-500" />
//                 )}
//                 <div className={`font-semibold text-sm ${assignment.status === "Submitted" ? "text-green-600" : assignment.status === "Late" ? "text-red-600" : "text-yellow-600"}`}>
//                   {assignment.status}
//                 </div>
//               </div>
//             </div>

//             {expandedId === assignment.id && (
//               <div className="mt-3 text-sm text-gray-700">{assignment.description}</div>
//             )}

//             <div className="mt-3 flex gap-2">
//               <Button variant="ghost" size="sm" onClick={() => toggleExpand(assignment.id)}>
//                 {expandedId === assignment.id ? "Show Less" : "Read More"}
//               </Button>
//               <Button variant="outline" size="sm">Mark Complete</Button>
//             </div>
//           </div>
//         ))}
//       </CardContent>
//     </Card>
//   );
// }

// // ---------- Page Component ----------
// export default function PremiumDashboard() {
//   const [notification] = useState(mockNotifications);
//   const [search, setSearch] = useState("");

//   // example: fetch real data here
//   useEffect(() => {
//     // fetch('/api/dashboard')... then set state
//   }, []);

//   return (
//     <div className="p-6">
//       <Topbar notificationCount={notification.count} />

//       <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
//         {/* Sidebar */}
//         <div className="md:col-span-3">
//           <Sidebar />
//         </div>

//         {/* Main Content */}
//         <div className="md:col-span-9 space-y-6">
//           {/* Search + Quick stats row */}
//           <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
//             <div className="flex items-center gap-3 w-full md:w-auto">
//               <Input placeholder="Search courses, assignments..." value={search} onChange={(e) => setSearch(e.target.value)} />
//             </div>

//             <div className="flex gap-4">
//               <div className="bg-white shadow-sm rounded-lg p-4 flex flex-col items-start">
//                 <div className="text-sm text-gray-500">Courses</div>
//                 <div className="text-xl font-bold">12</div>
//               </div>

//               <div className="bg-white shadow-sm rounded-lg p-4 flex flex-col items-start">
//                 <div className="text-sm text-gray-500">Hours This Week</div>
//                 <div className="text-xl font-bold">14.0</div>
//               </div>

//               <div className="bg-white shadow-sm rounded-lg p-4 flex flex-col items-start">
//                 <div className="text-sm text-gray-500">Certificates</div>
//                 <div className="text-xl font-bold">3</div>
//               </div>
//             </div>
//           </div>

//           {/* Grid: Progress + Notifications + Assignments */}
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             <div className="lg:col-span-2">
//               <ProgressCard />
//             </div>

//             <div className="space-y-6">
//               <NotificationCard notification={notification} />

//               <Card className="hover:shadow-lg transition">
//                 <CardHeader className="p-4 flex items-center justify-between">
//                   <div className="flex items-center gap-3">
//                     <Award className="w-5 h-5 text-orange-500" />
//                     <h3 className="text-lg font-semibold">Certificates</h3>
//                   </div>
//                   <Button variant="ghost" size="sm">Download</Button>
//                 </CardHeader>
//                 <CardContent className="p-4">
//                   <div className="text-sm text-gray-600">You have 3 certificates available to download.</div>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>

//           {/* Assignments + Cards grid */}
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             <div className="lg:col-span-2">
//               <AssignmentListClient />
//             </div>

//             <div className="space-y-4">
//               <Card className="hover:shadow-lg transition p-4">
//                 <CardHeader className="flex items-center justify-between p-0">
//                   <div className="flex items-center gap-3">
//                     <MessageSquare className="w-5 h-5 text-indigo-500" />
//                     <h3 className="text-lg font-semibold">Messages</h3>
//                   </div>
//                   <Button variant="ghost" size="sm">Open</Button>
//                 </CardHeader>
//                 <CardContent className="p-4">
//                   <div className="text-sm text-gray-600">No unread messages.</div>
//                 </CardContent>
//               </Card>

//               <Card className="hover:shadow-lg transition p-4">
//                 <CardHeader className="flex items-center justify-between p-0">
//                   <div className="flex items-center gap-3">
//                     <Calendar className="w-5 h-5 text-teal-500" />
//                     <h3 className="text-lg font-semibold">Calendar</h3>
//                   </div>
//                   <Button variant="ghost" size="sm">View</Button>
//                 </CardHeader>
//                 <CardContent className="p-4">
//                   <div className="text-sm text-gray-600">No events today.</div>
//                 </CardContent>
//               </Card>

//               <Card className="hover:shadow-lg transition p-4">
//                 <CardHeader className="flex items-center justify-between p-0">
//                   <div className="flex items-center gap-3">
//                     <BookOpen className="w-5 h-5 text-sky-500" />
//                     <h3 className="text-lg font-semibold">My Courses</h3>
//                   </div>
//                   <Button variant="ghost" size="sm">View</Button>
//                 </CardHeader>
//                 <CardContent className="p-4">
//                   <div className="text-sm text-gray-600">3 active courses this month.</div>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>

//           {/* Footer small */}
//           <div className="text-center text-sm text-gray-500">Made with ❤️ — Interactive Premium Dashboard</div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, User, Clock, Bell, Award, MessageSquare, Calendar } from "lucide-react";

interface DashboardCard {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  buttonText: string;
  variant?: "outline" | "filled";
}

const cards: DashboardCard[] = [
  {
    id: 1,
    title: "Courses Enrolled",
    description: "Active courses you are enrolled in",
    icon: <BookOpen className="text-blue-500 w-6 h-6" />,
    buttonText: "View Courses",
  },
  {
    id: 2,
    title: "Profile",
    description: "Update your personal info and account settings.",
    icon: <User className="text-blue-500 w-6 h-6" />,
    buttonText: "Go to Profile",
  },
  {
    id: 3,
    title: "My Courses",
    description: "View enrolled courses and start learning.",
    icon: <BookOpen className="text-green-500 w-6 h-6" />,
    buttonText: "View Courses",
  },
  {
    id: 4,
    title: "Progress",
    description: "Track your learning progress and stats.",
    icon: <Clock className="text-purple-500 w-6 h-6" />,
    buttonText: "View Progress",
  },
  {
    id: 5,
    title: "Notifications",
    description: "Stay updated with course alerts and reminders.",
    icon: <Bell className="text-yellow-500 w-6 h-6" />,
    buttonText: "View All",
  },
  {
    id: 6,
    title: "Certificates",
    description: "View and download your earned certificates.",
    icon: <Award className="text-orange-500 w-6 h-6" />,
    buttonText: "View Certificates",
  },
  {
    id: 7,
    title: "Messages",
    description: "Check your messages from mentors and classmates.",
    icon: <MessageSquare className="text-indigo-500 w-6 h-6" />,
    buttonText: "Open Messages",
  },
  {
    id: 8,
    title: "Calendar",
    description: "View your schedule and important events.",
    icon: <Calendar className="text-teal-500 w-6 h-6" />,
    buttonText: "Open Calendar",
  },
];

export default function DashboardCards() {
  return (
    <div className="flex flex-col md:flex-row w-full gap-4 px-4 py-4">
      {/* Left Column: Optional, for example progress or summary cards */}

      {/* Right Column: Cards Grid */}
      <div className="flex-1 min-w-0">
        <Card className="bg-white shadow-lg w-full p-6">
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {cards.map((card) => (
                <Card
                  key={card.id}
                  className="hover:scale-105 transition-transform duration-300 flex flex-col justify-between"
                >
                  <CardHeader className="flex items-center gap-3">
                    {card.icon}
                    <h3 className="text-lg font-semibold">{card.title}</h3>
                  </CardHeader>
                  <CardContent className="text-sm text-gray-500">{card.description}</CardContent>
                  <CardFooter>
                    <Button variant={card.variant || "outline"} size="sm">
                      {card.buttonText}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
