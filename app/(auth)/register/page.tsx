"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Swal from "sweetalert2";

const RegisterPage = () => {
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const username = form.username.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
    const phone = form.phone_number.value.trim();
    const role = form.role.value;

    if (!username || !email || !password) {
      setError("Please fill in all required fields.");
      return;
    }

    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (!emailRegex.test(email)) {
      setError("Email must be in a valid format (e.g., murarijha.mkj@gmail.com).");
      return;
    }

    if (phone && !/^\d{10}$/.test(phone)) {
      setError("Mobile number must be exactly 10 digits.");
      return;
    }
    // http://127.0.0.1:8000/codes/register/
// http://localhost:8000/api/register/
    try {
      const res = await fetch("http://127.0.0.1:8000/codes/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password, phone_number: phone, role }),
      });
      const data = await res.json();

      
     if (res.ok) {
      Swal.fire({
        title: "Success!",
        text: data.message || "Registered successfully!",
        icon: "success",
        confirmButtonColor: "#4F46E5", // Indigo button
      });
      form.reset();
    } else {
      Swal.fire({
        title: "Error!",
        text: data.error || "Something went wrong.",
        icon: "error",
        confirmButtonColor: "#EF4444", // Red button
      });
    }
  } catch (err) {
    Swal.fire({
      title: "Server Error",
      text: "Please try again later.",
      icon: "error",
      confirmButtonColor: "#EF4444",
    });
  }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen  p-4">
      {/* Image Card */}
      <Card className="flex-1 h-[600px] md:h-[500px] relative shadow-xl">
        <div className="absolute inset-0">
          <Image
            src="https://media.istockphoto.com/id/2162167863/photo/businessman-in-the-logging-in-using-a-secure-web-page.webp?a=1&b=1&s=612x612&w=0&k=20&c=HRzYadg-IvMfrBUpDqP9TcJsF0e3Im1LNWPh4iRQp1o="
            alt="Register Background"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </Card>

      {/* Form Card */}
      <Card className="flex-1 h-[500px] shadow-xl flex flex-col">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Register</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col justify-center">
          {error && (
            <div className="mb-4 text-sm text-red-600 bg-red-50 p-3 rounded">{error}</div>
          )}
          {success && (
            <div className="mb-4 text-sm text-green-600 bg-green-50 p-3 rounded">{success}</div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Username*"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              id="email"
              name="email"
              type="email"
              // defaultValue="murarijha.mkj@gmail.com"
              placeholder="Email*"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              required
            />
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password*"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              id="phone_number"
              name="phone_number"
              type="text"
              placeholder="Mobile Number"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              maxLength={10}
            />
            <select
              id="role"
              name="role"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Register
            </button>
          </form>

          <p className="mt-4 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Sign in
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterPage;
