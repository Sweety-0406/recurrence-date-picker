"use client";

import { useRecurrenceHook } from "../hooks/useRecurrenceHook";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function DaySelector() {
  const { recurrenceType, selectedDays, toggleDay } = useRecurrenceHook();
  if (recurrenceType !== "weekly") return null;

  return (
    <div className="flex flex-wrap bg-gray-100 p-1 rounded-lg gap-2 mb-8">
      {days.map((day) => (
        <button
          key={day}
          onClick={() => toggleDay(day)}
          className={`px-3 py-2 rounded ${selectedDays.includes(day) ? "bg-green-500 text-white" : "bg-transparent hover:bg-gray-200"}`}
        >
          {day.slice(0, 3)}
        </button>
      ))}
    </div>
  );
}
