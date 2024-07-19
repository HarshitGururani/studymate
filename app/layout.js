import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Navbar from "./ui/navbar/Navbar";
import { Recursive } from "next/font/google";

const recursive = Recursive({ subsets: ["latin"] });

export const metadata = {
  title: "BCA StudyMate",
  description:
    "Maximize your Bachelor of Computer Applications (BCA) experience at SSJU with a comprehensive guide to essential resources. Discover curated study materials, practical tools, and support systems tailored for each semester, ensuring academic excellence and career readiness.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={recursive.className}>
          <Navbar />
          {children}
          {/* <Footer/> */}
        </body>
      </html>
    </ClerkProvider>
  );
}
