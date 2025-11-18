
// // export default LoginPage;
// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Footer from "@/app/sharednavbar/Footer";

// const LoginPage = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setError(null);
//     if (!username.trim() || !password) {
//       setError("Please enter both username and password.");
//       return;
//     }
//     alert(`Logging in:\nusername: ${username}\npassword: ${password}`);
//   };

//   return (
//     // <div className="flex flex-col min-h-screen">
//     <div className="flex flex-col md:flex-row min-h-screen  p-4">

//       {/* Main Content */}
//       <div className="flex-grow flex items-center justify-center bg-gray-100 p-4">
//         {/* Login Card */}
//         <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-xl shadow-xl overflow-hidden">
//           {/* Left: Image */}
//           <div className="relative w-full md:w-1/2 h-64 md:h-auto">
//             <Image
//        src="https://media.istockphoto.com/id/2162167863/photo/businessman-in-the-logging-in-using-a-secure-web-page.webp?a=1&b=1&s=612x612&w=0&k=20&c=HRzYadg-IvMfrBUpDqP9TcJsF0e3Im1LNWPh4iRQp1o="

//               alt="Login Background"
//               fill
//               className="object-cover"
//             />
//           </div>

//           {/* Right: Form */}
//           <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
//             <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-800 mb-4">
//               Welcome Back
//             </h2>
//             <p className="text-center text-sm text-slate-600 mb-6">
//               Sign in with your username and password
//             </p>

//             {error && (
//               <div className="mb-4 text-sm text-red-600 bg-red-50 p-3 rounded">
//                 {error}
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label htmlFor="username" className="block text-sm font-medium text-slate-700 mb-1">
//                   Username
//                 </label>
//                 <input
//                   id="username"
//                   type="text"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   placeholder="Enter your username"
//                   className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   autoComplete="username"
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">
//                   Password
//                 </label>
//                 <div className="relative">
//                   <input
//                     id="password"
//                     type={showPassword ? "text" : "password"}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="Enter your password"
//                     className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
//                     autoComplete="current-password"
//                     required
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword((s) => !s)}
//                     className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-slate-600 px-2 py-1 rounded hover:bg-slate-100"
//                   >
//                     {showPassword ? "Hide" : "Show"}
//                   </button>
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
//               >
//                 Sign In
//               </button>
//             </form>

//             <div className="mt-4 flex justify-between items-center text-sm text-slate-600">
//               <a href="/register" className="hover:text-blue-600">
//                 Create account
//               </a>
//               <a href="/forgot-password" className="hover:text-blue-600">
//                 Forgot password?
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default LoginPage;
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Loader from "@/app/(multiusemenu)/components/Loader";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/app/sharednavbar/Footer";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation"; // <-- Correct import
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
   const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setError(null);
  setLoading(true); // start loader
  if (!username.trim() || !password) {
    Swal.fire({
      icon: "warning",
      title: "Oops...",
      text: "Please enter both username and password.",
    });
      setLoading(false); // stop loader
    return;
  }

  try {
   const response = await fetch("http://localhost:8000/codes/login/", {
    // const response = await fetch("http://127.0.0.1:8000/codes/login/", {
      method: "POST",
        credentials: "include",   // ⭐ VERY IMPORTANT — sends & stores cookies
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      const errData = await response.json();
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: errData.detail || "Invalid username or password.",
      });
      setLoading(false);
      return;
    }

    const data = await response.json();

    Swal.fire({
      icon: "success",
      title: "Login Successful",
      text: `Welcome ${username}!`,
      timer: 1500,
      showConfirmButton: false,
    });

    // Redirect based on role
    switch (data.role) {
      case "Admin":
        router.push("/admin/dashboard");
        break;
      case "SuperAdmin":
        router.push("/superadmin/dashboard");
        break;
      case "User":
        router.push("/UserDashboard");
        break;
      default:
        router.push("/"); // fallback
    }

  } catch (err) {
    console.error(err);
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Something went wrong. Please try again later.",
    });
  }
  finally {
    setLoading(false); // stop loader
  }
};
const handleSubmitk = async (e: React.FormEvent) => {
  e.preventDefault();
  setError(null);

  if (!username.trim() || !password) {
    Swal.fire({
      icon: "warning",
      title: "Oops...",
      text: "Please enter both username and password.",
    });
    return;
  }

  try {
    const response = await fetch("http://127.0.0.1:8000/codes/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      const errData = await response.json();
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: errData.detail || "Invalid username or password.",
      });
      return;
    }

    const data = await response.json();
    Swal.fire({
      icon: "success",
      title: "Login Successful",
      text: `Welcome ${username}!`,
    });

    // Do something after login, like storing token or redirecting
    console.log("Login success:", data);
  } catch (err) {
    console.error(err);
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Something went wrong. Please try again later.",
    });
  }
};

 

  return (
    <div className="flex flex-col min-h-screen">
       {/* Loader Overlay */}
    {loading && (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <Loader />
  </div>
)}
      <div className="flex flex-col md:flex-row flex-1 justify-center items-center p-4 gap-0">
        {/* Left Card: Image */}

<Card className="flex-1 min-h-[300px] md:h-[500px] relative shadow-xl">
  <div className="absolute inset-0">
    <Image
      src="https://media.istockphoto.com/id/2162167863/photo/businessman-in-the-logging-in-using-a-secure-web-page.webp?a=1&b=1&s=612x612&w=0&k=20&c=HRzYadg-IvMfrBUpDqP9TcJsF0e3Im1LNWPh4iRQp1o="
      alt="Register Background"
      fill
      className="object-cover rounded-xl"
    />
  </div>
</Card>

         {/* <Card className="flex-1 h-[600px] md:h-[500px] relative shadow-xl">
                <div className="absolute inset-0">
                  <Image
                    src="https://media.istockphoto.com/id/2162167863/photo/businessman-in-the-logging-in-using-a-secure-web-page.webp?a=1&b=1&s=612x612&w=0&k=20&c=HRzYadg-IvMfrBUpDqP9TcJsF0e3Im1LNWPh4iRQp1o="
                    alt="Register Background"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
       
        </Card> */}

        {/* Right Card: Login Form */}
        <Card className="flex-1 h-[500px] shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Login</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col justify-center h-full">
            {error && (
              <div className="mb-4 text-sm text-red-600 bg-red-50 p-3 rounded">{error}</div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-slate-700 mb-1">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  autoComplete="username"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
                    autoComplete="current-password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-slate-600 px-2 py-1 rounded hover:bg-slate-100"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
              >
                Sign In
              </button>
            </form>

            <div className="mt-4 flex justify-between items-center text-sm text-slate-600">
              <a href="/register" className="hover:text-blue-600">
                Create account
              </a>
              <a href="/forgot-password" className="hover:text-blue-600">
                Forgot password?
              </a>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LoginPage;
