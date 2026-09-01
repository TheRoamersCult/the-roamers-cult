import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CalendarAccess from "@/components/CalendarAccess";
import LiveTelemetry from '@/components/LiveTelemetry';
import StoryPreviews from "@/components/StoryPreviews";
import Footer from "@/components/Footer";
import { Calendar } from "lucide-react";
// import Footer from "@/components/Footer";
// import CalendarSection from "@/components/CalendarSection";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CalendarAccess />
      <LiveTelemetry />
      <StoryPreviews />


      <Footer />     
    </main>
  );
}