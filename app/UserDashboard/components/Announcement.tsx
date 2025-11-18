


// "use client";

// import React, { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Typography } from "@mui/material";
// import { Clock, MapPin } from "lucide-react";

// interface EventRecord {
//   id: number;
//   title: string;
//   startTime: string;
//   location: string;
//   category:
//     | "Placement"
//     | "Workshop/Seminar/Master Class"
//     | "Examination"
//     | "Academic"
//     | "Admission"
//     | "Co-curricular/Sports/Cultural"
//     | "Miscellaneous";
//   description?: string;
//   status?: "Ongoing" | "Upcoming" | "Ended";
// }

// const eventsData: EventRecord[] = [
//   {
//     id: 1,
//     title: "Campus Placement Drive",
//     startTime: "2025-09-01T09:00:00Z",
//     location: "Auditorium",
//     category: "Placement",
//     status: "Upcoming",
//     description: "Top companies visiting for campus placements.",
//   },
//   {
//     id: 2,
//     title: "Advanced React Workshop",
//     startTime: "2025-08-25T13:00:00Z",
//     location: "Lab 5",
//     category: "Workshop/Seminar/Master Class",
//     status: "Ongoing",
//     description: "Deep dive into React hooks and context API.",
//   },
//   {
//     id: 3,
//     title: "Midterm Examination",
//     startTime: "2025-09-10T08:00:00Z",
//     location: "Exam Hall 2",
//     category: "Examination",
//     status: "Upcoming",
//     description: "Mid-semester exams start from this date.",
//   },
//   {
//     id: 4,
//     title: "Academic Counseling",
//     startTime: "2025-08-28T10:00:00Z",
//     location: "Room 101",
//     category: "Academic",
//     status: "Upcoming",
//   },
//   {
//     id: 5,
//     title: "Admission Open House",
//     startTime: "2025-08-20T09:00:00Z",
//     location: "Main Hall",
//     category: "Admission",
//     status: "Ended",
//   },
//   {
//     id: 6,
//     title: "Annual Sports Meet",
//     startTime: "2025-09-15T07:00:00Z",
//     location: "Sports Ground",
//     category: "Co-curricular/Sports/Cultural",
//     status: "Upcoming",
//     description: "Compete in various sports and cultural events.",
//   },
//   {
//     id: 7,
//     title: "Guest Lecture on AI",
//     startTime: "2025-09-03T11:00:00Z",
//     location: "Auditorium",
//     category: "Miscellaneous",
//     status: "Upcoming",
//   },
// ];

// const categories = [
//   "All",
//   "Placement",
//   "Workshop/Seminar/Master Class",
//   "Examination",
//   "Academic",
//   "Admission",
//   "Co-curricular/Sports/Cultural",
//   "Miscellaneous",
// ] as const;

// export default function EventTabs() {
//   const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>(
//     "All"
//   );

//   const filteredEvents =
//     selectedCategory === "All"
//       ? eventsData
//       : eventsData.filter((e) => e.category === selectedCategory);

//   return (
//     <div className="container mx-auto p-4 flex flex-col items-center">
//       {/* Tabs */}
//       <div className="flex flex-wrap justify-center gap-3 mb-4">
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300
//               ${
//                 selectedCategory === cat
//                   ? "bg-blue-600 text-white shadow-md"
//                   : "bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white"
//               }`}
//             onClick={() => setSelectedCategory(cat)}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Event list card */}
//       <Card className="bg-gray-50 shadow-md p-4 relative border-0 w-[450px] h-[550px] rounded-lg">
//         <div className="absolute -top-5 left-4 bg-blue-600 px-3 py-1 rounded-full shadow-md flex items-center space-x-2">
//           <Clock size={20} className="text-white" />
//           <span className="text-white text-sm font-semibold italic">{selectedCategory}</span>
//         </div>

//         <CardContent className="overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 mt-4 custom-scrollbar">
//           {filteredEvents.length === 0 ? (
//             <Typography variant="body1" className="text-center text-gray-500 mt-10">
//               No events found for "{selectedCategory}"
//             </Typography>
//           ) : (
//             filteredEvents.map((event) => (
//               <div key={event.id} className="p-4 border-b flex flex-col w-full">
//                 <div className="flex justify-between items-center">
//                   <Typography variant="h6" className="font-semibold italic">
//                     {event.title}
//                   </Typography>
//                   <Typography variant="body2" className="text-gray-600">
//                     {new Date(event.startTime).toLocaleDateString()}{" "}
//                     {new Date(event.startTime).toLocaleTimeString([], {
//                       hour: "2-digit",
//                       minute: "2-digit",
//                     })}
//                   </Typography>
//                 </div>

//                 <div className="flex items-center space-x-2 mt-1 text-gray-600">
//                   <MapPin size={18} />
//                   <Typography variant="body2">{event.location}</Typography>
//                 </div>

//                 {event.description && (
//                   <Typography variant="body2" className="mt-2 text-gray-700 line-clamp-3">
//                     {event.description}
//                   </Typography>
//                 )}
//               </div>
//             ))
//           )}
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Typography } from "@mui/material";
import { Megaphone, Eye } from "lucide-react";

interface Announcement {
  id: number;
  categories: string[];
  title: string;
  date: string;
  description: string;
  link?: string;
}

const announcementsData: Announcement[] = [
  {
    id: 1,
    categories: [
      "Academic",
      "Examination",
      "Workshop/Seminar/Master Class",
      "Admission",
      "Placement",
      "Co-curricular/Sports/Cultural",
      "Miscellaneous",
      "All",
    ],
    title:
      "Registrations are invited to participate in the Internship Drive by LearnFlu (LPU/CDOE/EC/251115/002)",
    date: "2025-11-15T17:18:40Z",
    description:
      "All the eligible LPU Online students are hereby informed that Lovely Professional University is planning to conduct an Internship Drive as per the details given below:\n\n" +
      "Name of the Company: LearnFlu\n" +
      "Company Website: https://learnflu.com/\n" +
      "Job Title: Business Development Executive\n" +
      "Employment Type: 6-Month Internship + Pre-Placement Offer (PPO)\n" +
      "Stipend During Internship: Rs 15,000 – Rs 20,000 per month\n" +
      "Incentives During Internship: Rs 10,000\n" +
      "Pre-Placement Offer (PPO):\n" +
      "Undergraduates: INR 4 LPA – 6 LPA\n" +
      "Postgraduates: INR 5 LPA – 8 LPA\n" +
      "Post-Probation CTC Range: INR 4 LPA – 10 LPA\n" +
      "Job Location: Bengaluru (BTM Layout, Bangalore, Karnataka – 560076)",
    link: "https://learnflu.com/",
  },
];

export default function Announcements() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) =>
    setExpandedId(expandedId === id ? null : id);

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      {announcementsData.map((announcement) => (
       <Card
  key={announcement.id}
  className="bg-white shadow-lg p-4 relative border-0 mr-6 w-full max-w-[1200px] h-[500px]"
>

        
          {/* Floating Label */}
          <div className="absolute -top-5 left-4 bg-purple-600 px-3 py-1 rounded-full shadow-md flex items-center space-x-2">
            <Megaphone size={20} className="text-white" />
            <span className="text-white text-sm font-semibold">
              Announcement
            </span>
          </div>

          {/* View Button */}
          <button className="absolute -top-5 right-4 bg-yellow-400 hover:bg-yellow-600 text-white px-3 py-1 rounded-full shadow-md flex items-center space-x-2 text-sm transition-colors duration-300">
            <Eye size={20} className="text-white" />
            <span>View</span>
          </button>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mt-2">
            {announcement.categories.map((cat, idx) => (
              <span
                key={idx}
                className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Scrollable content */}
          <CardContent className="overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 mt-4">
            <Typography variant="h6" className="font-bold">
              {announcement.title}
            </Typography>
            <Typography
              variant="body2"
              className="text-gray-600 mb-2"
            >
              {new Date(announcement.date).toLocaleString()}
            </Typography>

            {expandedId === announcement.id ? (
              <Typography variant="body2" className="text-gray-700 whitespace-pre-line">
                {announcement.description}
              </Typography>
            ) : (
              <Typography
                variant="body2"
                className="text-gray-700 line-clamp-5 whitespace-pre-line"
              >
                {announcement.description}
              </Typography>
            )}

            <Button
              variant="ghost"
              className="mt-2 text-blue-600 hover:underline w-full sm:w-auto"
              onClick={() => toggleExpand(announcement.id)}
            >
              {expandedId === announcement.id ? "Show Less" : "Read More"}
            </Button>

            {announcement.link && (
              <a
                href={announcement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline block mt-2"
              >
                Visit Company Website
              </a>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

