"use client";

import { useRecurrenceHook } from "../hooks/useRecurrenceHook";

export default function DateRangePicker() {
  const { startDate, endDate, setStartDate, setEndDate } = useRecurrenceHook();

  return (
    <div className="space-y-4 w-full">
      <div className="w-full">
        <label className="font-bold text-black ">Start Date</label>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="block text-black w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 p-2 border-2 rounded-lg focus:shadow-md focus:shadow-blue-300" />
      </div>
      <div className="w-full">
        <label className="font-bold text-black ">End Date <span className="text-gray-400 text-sm">(optional)</span></label>
        <input type="date" value={endDate || ""} onChange={(e) => setEndDate(e.target.value)} className="block text-black p-2 w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 border-2 rounded-lg focus:shadow-md focus:shadow-blue-300" />
      </div>
    </div>
  );
}
