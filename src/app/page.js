import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CalendarAccess from "@/components/CalendarAccess";
import { Calendar } from "lucide-react";
// import CalendarSection from "@/components/CalendarSection";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CalendarAccess />
     
    </main>
  );
}