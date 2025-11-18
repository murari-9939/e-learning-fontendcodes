
"use client"
import { Spinner } from "@/components/ui/spinner";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-30">
      <div className="bg-white  p-8 rounded-2xl  flex flex-col items-center gap-4 animate-fade-in">
        <Spinner className="w-20 h-20 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Loading, please wait...
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-300 text-center">
          This may take a few seconds.
        </p>
      </div>
    </div>
  );
}


