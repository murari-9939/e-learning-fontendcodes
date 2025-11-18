"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/app/sharednavbar/Footer";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (!email || !emailRegex.test(email)) {
      setError("Please enter a valid email (e.g., murarijha.mkj@gmail.com).");
      return;
    }

    // TODO: Replace with actual API call
    alert(`Password reset link will be sent to: ${email}`);
    setSuccess("Password reset link sent successfully!");
    setEmail("");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col md:flex-row flex-1 justify-center items-center p-4 gap-0">
        {/* Left Card: Image */}
        <Card className="flex-1 h-[500px] relative shadow-xl overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://media.istockphoto.com/id/2162167863/photo/businessman-in-the-logging-in-using-a-secure-web-page.webp?a=1&b=1&s=612x612&w=0&k=20&c=HRzYadg-IvMfrBUpDqP9TcJsF0e3Im1LNWPh4iRQp1o="
              alt="Forgot Password Background"
              fill
              className="object-cover"
            />
          </div>
        </Card>

        {/* Right Card: Forgot Password Form */}
        <Card className="flex-1 h-[500px] shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Forgot Password</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col justify-center h-full">
            {error && (
              <div className="mb-4 text-sm text-red-600 bg-red-50 p-3 rounded">{error}</div>
            )}
            {success && (
              <div className="mb-4 text-sm text-green-600 bg-green-50 p-3 rounded">{success}</div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
              >
                Send Reset Link
              </button>
            </form>

            <p className="mt-4 text-sm text-center text-gray-600">
              Remembered your password?{" "}
              <a href="/login" className="text-blue-600 hover:underline">
                Sign in
              </a>
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ForgotPasswordPage;
