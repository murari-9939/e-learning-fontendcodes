// import ProtectedPage from "@/app/(Auth_check)/ProtectedPage";
// export default function UserDashboard() {
//   return (
//     <ProtectedPage allowedRoles={['User']}>
//       <h1 className="text-2xl font-bold">Welcome User Dashboard</h1>
//       {/* Your dashboard content */}
//     </ProtectedPage>
//   );
// }
"use client"
import ProtectedPage from "../(Auth_check)/ProtectedPage";
import Assignment from "./components/Assignment";
import Attendance from "./components/Attendance";
import MyMessages from "./components/MyMessages";


// import { useEffect, useState } from "react";

// export default function UserDashboard() {
//   const [employee, setEmployee] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
// // useEffect(() => {
// //   fetch("http://localhost:8000/codes/employees/", {
// //     method: "GET",
// //     headers: {
// //       "Content-Type": "application/json",
// //     },
// //     credentials: "include", // ✅ sends the JWT cookie
// //   })
// //     .then(res => res.json())
// //     .then(data => console.log(data))
// //     .catch(err => console.error(err));
// // }, []);
 

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h1 className="text-2xl font-bold">Welcome User Dashboard</h1>
//       {employee && (
//         <div>
//           <p>Username: {employee.username}</p>
//           <p>Email: {employee.email}</p>
//           <p>Phone: {employee.phone_number}</p>
//           <p>Role: {employee.role}</p>
//         </div>
//       )}
//     </div>
//   );
// }
// import ProtectedPage from "@/app/(Auth_check)/ProtectedPage";
// import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Users, BookOpen, BarChart } from "lucide-react";

// export default function UserDashboardPage() {
//   return (
//     <ProtectedPage allowedRoles={['User']}>
//       <div className="space-y-6">
//         <h1 className="text-3xl font-bold text-gray-800">Welcome to Your Dashboard</h1>
//         <p className="text-gray-600">Check your courses, progress, and activity here.</p>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

//           <Card className="hover:scale-105 transition-transform duration-300">
//             <CardHeader className="flex items-center space-x-3">
//               <Users className="w-6 h-6 text-blue-500" />
//               <h3 className="text-lg font-semibold">Profile</h3>
//             </CardHeader>
//             <CardContent>Update your personal info and account settings.</CardContent>
//             <CardFooter>
//               <Button variant="outline" size="sm">Go to Profile</Button>
//             </CardFooter>
//           </Card>

//           <Card className="hover:scale-105 transition-transform duration-300">
//             <CardHeader className="flex items-center space-x-3">
//               <BookOpen className="w-6 h-6 text-green-500" />
//               <h3 className="text-lg font-semibold">My Courses</h3>
//             </CardHeader>
//             <CardContent>View enrolled courses and start learning.</CardContent>
//             <CardFooter>
//               <Button variant="outline" size="sm">View Courses</Button>
//             </CardFooter>
//           </Card>

//           <Card className="hover:scale-105 transition-transform duration-300">
//             <CardHeader className="flex items-center space-x-3">
//               <BarChart className="w-6 h-6 text-purple-500" />
//               <h3 className="text-lg font-semibold">Progress</h3>
//             </CardHeader>
//             <CardContent>Track your learning progress and stats.</CardContent>
//             <CardFooter>
//               <Button variant="outline" size="sm">View Progress</Button>
//             </CardFooter>
//           </Card>

//         </div>
//       </div>
//     </ProtectedPage>
//   );
// }

import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, BarChart, Bell, Award, MessageSquare, Book, Clock, User, Calendar, ClipboardList, BellRing, Eye } from "lucide-react";
import Announcement from "./components/Announcement";
import HappeningNow from "./components/HappeningNow";
import MyEvents from "./components/MyEvents";
import ELearning from "./components/ELearning";
import ImageSlider from "./components/ImageSlider";
import { useState } from "react";
import MyProgress from "./components/MyProgress";
import WeeklyActivity from "./components/WeeklyActivity";
import MyBlog from "./components/MyBlog";


export default function UserDashboardPage() {
  const [notification] = useState({
    count: 2,
    latestMessage: "Your assignment deadline is tomorrow!"
  });
  return (
    <ProtectedPage allowedRoles={['User']}>


<div className="flex flex-col md:flex-row w-full gap-4 px-4 py-4 pr-19">
  {/* Right Column: Other Cards */}
  <div className="flex-1 min-w-0">
    <Card className="bg-white shadow-lg w-full p-6 relative">
      
      {/* Floating label for Courses & Progress */}
      <div className="absolute -top-5 left-4 bg-purple-600 px-3 py-1 rounded-full shadow-md flex items-center space-x-2 z-10">
        <BookOpen size={20} className="text-white" />
        <span className="text-white text-sm font-semibold">Learning Dashboard</span>
      </div>

      <CardContent>
        {/* Scrollable container */}
        <div className="overflow-x-auto overflow-y-auto max-h-[500px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 p-2">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            
            {/* Courses Enrolled Card */}
            <Card className="hover:scale-105 transition-transform duration-300">
              <CardHeader className="flex items-center gap-3">
                <BookOpen className="text-blue-500 w-6 h-6" />
                <h3 className="text-lg font-semibold">Courses Enrolled</h3>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-gray-500">Active courses you are enrolled in</p>
              </CardContent>
            </Card>

            {/* Profile Card */}
            <Card className="hover:scale-105 transition-transform duration-300">
              <CardHeader className="flex items-center gap-3">
                <User className="text-blue-500 w-6 h-6" />
                <h3 className="text-lg font-semibold">Profile</h3>
              </CardHeader>
              <CardContent>
                Update your personal info and account settings.
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">Go to Profile</Button>
              </CardFooter>
            </Card>

            {/* My Courses Card */}
            <Card className="hover:scale-105 transition-transform duration-300">
              <CardHeader className="flex items-center gap-3">
                <BookOpen className="text-green-500 w-6 h-6" />
                <h3 className="text-lg font-semibold">My Courses</h3>
              </CardHeader>
              <CardContent>View enrolled courses and start learning.</CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">View Courses</Button>
              </CardFooter>
            </Card>

            {/* Progress Card */}
            <Card className="hover:scale-105 transition-transform duration-300">
              <CardHeader className="flex items-center gap-3">
                <Clock className="text-purple-500 w-6 h-6" />
                <h3 className="text-lg font-semibold">Progress</h3>
              </CardHeader>
              <CardContent>Track your learning progress and stats.</CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">View Progress</Button>
              </CardFooter>
            </Card>

            {/* Notifications */}
            <Card className="hover:scale-105 transition-transform duration-300">
              <CardHeader className="flex items-center gap-3">
                <Bell className="text-yellow-500 w-6 h-6" />
                <h3 className="text-lg font-semibold">Notifications</h3>
              </CardHeader>
              <CardContent>Stay updated with course alerts and reminders.</CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">View All</Button>
              </CardFooter>
            </Card>

            {/* Certificates */}
            <Card className="hover:scale-105 transition-transform duration-300">
              <CardHeader className="flex items-center gap-3">
                <Award className="text-orange-500 w-6 h-6" />
                <h3 className="text-lg font-semibold">Certificates</h3>
              </CardHeader>
              <CardContent>View and download your earned certificates.</CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">View Certificates</Button>
              </CardFooter>
            </Card>

            {/* Messages */}
            <Card className="hover:scale-105 transition-transform duration-300">
              <CardHeader className="flex items-center gap-3">
                <MessageSquare className="text-indigo-500 w-6 h-6" />
                <h3 className="text-lg font-semibold">Messages</h3>
              </CardHeader>
              <CardContent>Check your messages from mentors and classmates.</CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">Open Messages</Button>
              </CardFooter>
            </Card>

            {/* Calendar */}
            <Card className="hover:scale-105 transition-transform duration-300">
              <CardHeader className="flex items-center gap-3">
                <Calendar className="text-teal-500 w-6 h-6" />
                <h3 className="text-lg font-semibold">Calendar</h3>
              </CardHeader>
              <CardContent>View your schedule and important events.</CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">Open Calendar</Button>
              </CardFooter>
            </Card>

          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</div>



















<div className="flex flex-col md:flex-row  w-full  pr-12">
  <div className="flex-[2] min-w-0">
    <ELearning />
  </div>
  <div className="flex-1 min-w-1">
     <MyEvents />
  </div>
 
</div>



<div className="flex flex-col md:flex-row  w-full  pr-12">
  <div className="flex-1 min-w-0">
    <Attendance /> 
  </div>
  <div className="flex-1 min-w-0">
    <Assignment />
  </div>
  <div className="flex-1 min-w-0">
     <MyMessages />
  </div>
</div>





      <Announcement />
  
 
   
    </ProtectedPage>
  );
}




