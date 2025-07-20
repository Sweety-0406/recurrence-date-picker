"use client";

import React from "react"
import { Recurrence, useRecurrenceHook } from "../hooks/useRecurrenceHook";

export default function RecurrenceOptions() {
  const { recurrenceType, setRecurrenceType } = useRecurrenceHook();
  const options: Recurrence[] = ["daily", "weekly", "monthly", "yearly"];

  return (
    <div className="flex gap-3 bg-gray-100 p-1 rounded-lg mb-8">
      {options.map((opt) => (
        <button
          key={opt}
          className={`px-4 py-2 rounded  ${recurrenceType === opt ? "bg-blue-500 text-white shadow-sm shadow-blue-500" : "bg-transparent text-gray-500 hover:bg-gray-200 "}`}
          onClick={() => setRecurrenceType(opt)}
        >
          {opt.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
