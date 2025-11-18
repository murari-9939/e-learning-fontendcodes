"use client";
import React, { useState } from "react";
import Loader from "@/app/(multiusemenu)/components/Loader";
import { Button } from "@/components/ui/button";

export default function TestLoaderPage() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-2xl font-bold">Loader Test Page</h1>

      <Button onClick={() => setLoading(true)}>Show Loader</Button>
      <Button onClick={() => setLoading(false)}>Hide Loader</Button>

      {loading && <Loader />}
    </div>
  );
}
