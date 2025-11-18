// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Swal from "sweetalert2";

// interface ProtectedPageProps {
//   allowedRoles: string[];
//   children: React.ReactNode;
// }

// export default function ProtectedPage({ allowedRoles, children }: ProtectedPageProps) {
//   const router = useRouter();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         const res = await fetch('http://127.0.0.1:8000/codes/check-auth/', {
//           credentials: 'include',
//         });
//         const data = await res.json();

//         if (!res.ok || !allowedRoles.includes(data.role)) {
//           Swal.fire('Unauthorized', 'You do not have access to this page', 'error');
//           router.push('/login');
//         } else {
//           setLoading(false);
//         }
//       } catch {
//         // router.push('/login');
//       }
//     };

//     checkAuth();
//   }, [router, allowedRoles]);

//   if (loading) return <div className="text-center mt-20">Loading...</div>;

//   return <>{children}</>;
// }
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

interface ProtectedPageProps {
  allowedRoles: string[];
  children: React.ReactNode;
}

export default function ProtectedPage({ allowedRoles, children }: ProtectedPageProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  const checkAuth = async () => {
    try {
      const res = await fetch('http://localhost:8000/codes/check-auth/', {
        method: 'GET',
        credentials: 'include', // include cookies
      });
      const data = await res.json();

      if (!res.ok || !allowedRoles.includes(data.role)) {
        Swal.fire({
          icon: 'error',
          title: 'Unauthorized',
          text: 'You do not have access to this page',
        });
        router.push('/login');
      } else {
        setLoading(false); // user is authorized
      }
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Server not responding',
      });
      router.push('/login');
    }
  };

  checkAuth();
}, [router, allowedRoles]);


  if (loading) return <div className="text-center mt-20 text-xl">Loading...</div>;

  return <>{children}</>;
}
