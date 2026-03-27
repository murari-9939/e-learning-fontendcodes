
// import type { Metadata } from "next";
// import "./globals.css";





// export const metadata: Metadata = {
//   title: "E-learning Management",
//   description: "Manage and track your e-learning courses efficiently",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >

//         {children}

//       </body>
//     </html>
//   );
// }
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Workenza Solution | Manpower",
  description: "Advanced  Professional Staffing Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* All your pages and sub-layouts will render here */}
        {children}
      </body>
    </html>
  );
}