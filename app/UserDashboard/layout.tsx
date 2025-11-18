// import React from "react";
// import ProtectedPage from "@/app/(Auth_check)/ProtectedPage";
// import { LoaderProvider } from "@/app/(multiusemenu)/components/LoaderContext";
// import ELearningNavbar from "./components/ELearningNavbar";
// import DashboardSidebar from "./components/DashboardSidebar";
// export default function DashboardLayout({ children }: { children: React.ReactNode }) {
//   return (
    
//      <LoaderProvider>
      
//     <ProtectedPage allowedRoles={['User']}>
//  {/* <ELearningNavbar />
//        <DashboardSidebar /> */}
//        {/* Sidebar + Navbar ALWAYS visible */}

// <div className="relative min-h-screen w-full overflow-hidden">
//   {/* Navbar fixed at top */}
//   <ELearningNavbar className="fixed top-0 left-0 w-full z-50" />

//   {/* Sidebar fixed at left */}
//   <DashboardSidebar className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 z-40" />

//   {/* Main content scrollable */}
//   <main className="ml-64 pt-16 overflow-auto min-h-screen min-w-full">
//     {children}
//   </main>
// </div>





//           {/* <ELearningNavbar /> */}

//           {/* Sidebar must be ABOVE everything */}

//           {/* Page content */}
//            {/* <main className="pt-16 md:ml-64 transition-all duration-300">
//              {children}
//           </main>  */}
//     </ProtectedPage>
//     </LoaderProvider>
//   );
// }
// "use client";
// import React from "react";
// import ELearningNavbar from "./components/ELearningNavbar";
// import DashboardSidebar from "./components/DashboardSidebar";

// export default function DashboardLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="w-full h-screen">
//       {/* Navbar fixed on top */}
//       <div className="fixed top-0 left-0 right-0 z-50">
//         <ELearningNavbar />
//       </div>

//       {/* Sidebar fixed on left, below navbar */}
//       <div className="fixed top-16 left-0 h-[calc(100vh-4rem)] z-40">
//         <DashboardSidebar />
//       </div>

//       {/* Main content area */}
//           <main className="pt-24 md:ml-64 transition-all duration-300">{children}          
//              </main>  
//     </div>
//   );
// }


"use client";
import React from "react";
import ELearningNavbar from "./components/ELearningNavbar";
import DashboardSidebar from "./components/DashboardSidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-screen">
      {/* Navbar fixed on top */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <ELearningNavbar />
      </div>

      {/* Sidebar fixed on left, below navbar */}
      <div className=" z-40">
        <DashboardSidebar />
      </div>

      {/* Main content area */}
          <main className="pt-32 md:ml-64 transition-all duration-300">{children}          
             </main>  
    </div>
  );
}