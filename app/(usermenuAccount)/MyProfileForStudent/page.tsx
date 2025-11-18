// app/MyProfileForStudent/page.tsx

import DashboardSidebar from "@/app/UserDashboard/components/DashboardSidebar";
import ELearningNavbar from "@/app/UserDashboard/components/ELearningNavbar";

export default function MyProfileForStudent() {
  return (
    <>
      <ELearningNavbar />
      <DashboardSidebar />
      <main className="pt-16 md:ml-64">
        <h1>My Profile</h1>
      </main>
    </>
  );
}

