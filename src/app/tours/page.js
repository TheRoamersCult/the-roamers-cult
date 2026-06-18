"use client";
import { useState } from "react";

export default function ToursListing() {
  const [query, setQuery] = useState("");

  return (
    <div className="max-w-7xl mx-auto py-16 px-8 fade-in">
      <div className="bg-white p-4 rounded-3xl shadow-sm mb-16 flex items-center border border-cult-green/10">
        <span className="px-4 text-2xl">🔍</span>
        <input 
          type="text" 
          placeholder="Where do you want to roam?" 
          className="w-full bg-transparent p-4 outline-none text-xl font-medium"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Placeholder for Dynamic Tours */}
        <div className="tour-card p-4">
          <div className="h-60 bg-cult-green/5 rounded-2xl mb-4"></div>
          <h4 className="text-xl font-bold px-2">Meghalaya Monsoon Magic</h4>
          <p className="px-2 mb-4 opacity-60">7 Days • Shillong & Cherrapunji</p>
          <button className="btn-primary w-full">View Details</button>
        </div>
      </div>
    </div>
  );
}