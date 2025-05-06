import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/page";
import Footer from "./components/footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export async function generateMetadata({ params }) {
  const { page } = params || {}; 
  const title = page ? `User Management | ${page}` : "User Management System";
  const description = page
    ? `Details about ${page} in the User Management System`
    : "A modern user management application built with Next.js";

  return {
    title,
    description,
    keywords: ["User Management", page || "System"],
    authors: [{ name: "sarah ashraf" }],
    creator: "sarah ashraf",
    publisher: "world of code",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <Footer />
    </html>
  );
}
