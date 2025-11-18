// "use client";

// import React, { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Typography } from "@mui/material";
// import { CalendarCheck, Eye, XCircle } from "lucide-react";

// interface AttendanceRecord {
//   id: number;
//   date: string;
//   status: "Present" | "Absent" | "Late";
//   remarks?: string;
// }

// const attendanceData: AttendanceRecord[] = [
//   { id: 1, date: "2025-08-20T08:00:00Z", status: "Present" },
//   { id: 2, date: "2025-08-21T08:00:00Z", status: "Absent", remarks: "Sick leave" },
//   { id: 3, date: "2025-08-22T08:00:00Z", status: "Late", remarks: "Traffic delay" },
//   { id: 4, date: "2025-08-23T08:00:00Z", status: "Present" },
// ];

// export default function Attendance() {
//   const [expandedId, setExpandedId] = useState<number | null>(null);
//   const toggleExpand = (id: number) => setExpandedId(expandedId === id ? null : id);

//   return (
//     <div className="container mx-auto p-4 flex flex-col items-center">
//        <Card className="bg-white shadow-lg p-4 relative border-0 w-full max-w-[400px] h-[500px]">
      
//       {/* <Card className="bg-white shadow-lg p-4 relative border-0  w-full w-[400px] h-[500px]"> */}
//         <div className="absolute -top-5 left-4 bg-green-600 px-3 py-1 rounded-full shadow-md flex items-center space-x-2">
//           <CalendarCheck size={20} className="text-white" />
//           <span className="text-white text-sm font-semibold">Attendance</span>
//         </div>

//         <button className="absolute -top-5 right-4 bg-yellow-400 hover:bg-yellow-600 text-white px-3 py-1 rounded-full shadow-md flex items-center space-x-2 text-sm transition-colors duration-300">
//           <Eye size={20} className="text-white" />
//           <span>View</span>
//         </button>

//         <CardContent className="overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 mt-4">
//           {attendanceData.map((record) => (
//             <div key={record.id} className="p-4 border-b">
//               <div className="flex justify-between items-center">
//                 <Typography variant="body1" className="font-bold">
//                   {new Date(record.date).toLocaleDateString()}
//                 </Typography>
//                 <div className="flex items-center space-x-2">
//                   {record.status === "Present" ? (
//                     <CalendarCheck className="text-green-500" />
//                   ) : record.status === "Absent" ? (
//                     <XCircle className="text-red-500" />
//                   ) : (
//                     <XCircle className="text-yellow-500" />
//                   )}
//                   <Typography
//                     variant="body2"
//                     className={`font-semibold ${
//                       record.status === "Present"
//                         ? "text-green-600"
//                         : record.status === "Absent"
//                         ? "text-red-600"
//                         : "text-yellow-600"
//                     }`}
//                   >
//                     {record.status}
//                   </Typography>
//                 </div>
//               </div>

//               {expandedId === record.id && record.remarks && (
//                 <Typography variant="body2" className="mt-2 text-gray-700">
//                   {record.remarks}
//                 </Typography>
//               )}

//               {record.remarks && (
//                 <Button
//                   variant="ghost"
//                   className="mt-2 text-blue-600 hover:underline w-full sm:w-auto"
//                   onClick={() => toggleExpand(record.id)}
//                 >
//                   {expandedId === record.id ? "Show Less" : "View Remarks"}
//                 </Button>
//               )}
//             </div>
//           ))}
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
import { CalendarCheck, Eye, XCircle } from "lucide-react";

interface AttendanceRecord {
  id: number;
  date: string;
  status: "Present" | "Absent" | "Late";
  remarks?: string;
}

const attendanceData: AttendanceRecord[] = [
  { id: 1, date: "2025-08-20T08:00:00Z", status: "Present" },
  { id: 2, date: "2025-08-21T08:00:00Z", status: "Absent", remarks: "Sick leave" },
  { id: 3, date: "2025-08-22T08:00:00Z", status: "Late", remarks: "Traffic delay" },
  { id: 4, date: "2025-08-23T08:00:00Z", status: "Present" },
];

export default function Attendance() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const toggleExpand = (id: number) => setExpandedId(expandedId === id ? null : id);

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <Card className="bg-white shadow-lg p-4 relative border-0 w-full max-w-[400px] h-[500px]">
        {/* Floating label */}
        <div className="absolute -top-5 left-4 bg-green-600 px-3 py-1 rounded-full shadow-md flex items-center space-x-2">
          <CalendarCheck size={20} className="text-white" />
          <span className="text-white text-sm font-semibold">Attendance</span>
        </div>

        {/* View Button */}
        <button className="absolute -top-5 right-4 bg-yellow-400 hover:bg-yellow-600 text-white px-3 py-1 rounded-full shadow-md flex items-center space-x-2 text-sm transition-colors duration-300">
          <Eye size={20} className="text-white" />
          <span>View</span>
        </button>

        {/* Scrollable content */}
        <CardContent className="overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 mt-4">
          {attendanceData.map((record) => (
            <div key={record.id} className="p-4 border-b">
              <div className="flex justify-between items-center">
                <Typography variant="h6" className="font-bold">
                  {new Date(record.date).toLocaleDateString()}
                </Typography>
                <div className="flex items-center space-x-2">
                  {record.status === "Present" ? (
                    <CalendarCheck className="text-green-500" />
                  ) : record.status === "Absent" ? (
                    <XCircle className="text-red-500" />
                  ) : (
                    <XCircle className="text-yellow-500" />
                  )}
                  <Typography
                    variant="body2"
                    className={`font-semibold ${
                      record.status === "Present"
                        ? "text-green-600"
                        : record.status === "Absent"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {record.status}
                  </Typography>
                </div>
              </div>

              {expandedId === record.id && record.remarks && (
                <Typography variant="body2" className="mt-2 text-gray-700">
                  {record.remarks}
                </Typography>
              )}

              {record.remarks && (
                <Button
                  variant="ghost"
                  className="mt-2 text-blue-600 hover:underline w-full sm:w-auto"
                  onClick={() => toggleExpand(record.id)}
                >
                  {expandedId === record.id ? "Show Less" : "View Remarks"}
                </Button>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
