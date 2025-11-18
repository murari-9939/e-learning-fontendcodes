"use client";
import React from "react";
import { LoaderProvider } from "../(multiusemenu)/components/LoaderContext";
import ProtectedPage from "../(Auth_check)/ProtectedPage";
import DashboardSidebar from "../UserDashboard/components/DashboardSidebar";
import ELearningNavbar from "../UserDashboard/components/ELearningNavbar";




export default function MyAccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <LoaderProvider>
      <ProtectedPage allowedRoles={["User"]}>
        <ELearningNavbar />
        <DashboardSidebar />
        <main className="pt-16 md:ml-64">
          {children}
        </main>
      </ProtectedPage>
    </LoaderProvider>
  );
}
