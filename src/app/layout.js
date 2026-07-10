import { Geist, Geist_Mono } from "next/font/google";
import Navbar from '@/components/Navbar';
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "The Roamer's Cult",
  description: "Where experiences are greater than itineraries.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-[#050505] text-[#f4ece0] min-h-screen">
        <Navbar />
        <main className="pt-20"> {/* Navbar height handle karne ke liye padding */}
          {children}
        </main>
      </body>
    </html>
  );
}