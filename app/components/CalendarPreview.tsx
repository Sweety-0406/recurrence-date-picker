"use client";

import { useRecurrenceHook } from "../hooks/useRecurrenceHook";
import { getNextOccurrences } from "../utils/recurrenceUtils";


export default function MiniCalendarPreview() {
  const { startDate, recurrenceType, selectedDays } = useRecurrenceHook();

  if (!startDate) return null;

  const nextDates = getNextOccurrences(startDate, recurrenceType, selectedDays);
 
  return (
    <div className="p-4 border rounded mt-4">
      <div className="flex gap-2">
        <div className="bg-blue-500 px-2 text-white mb-3 mt-[2px] rounded-sm aspect-ratio size-5">5</div>
        <h3 className="font-bold text-black text-xl mb-2">Next 5 Occurrences</h3>
      </div>
      <ul className="space-y-4">
  {nextDates.map((d) => (
    <li
      key={d.formattedDate}
      className="bg-white p-4 rounded-xl shadow flex justify-between items-center hover:border hover:border-blue-500"
    >
      <div>
        <div className="text-sm font-bold text-gray-800">{d.formattedDate}</div>
        <div className="text-xs text-gray-500">{d.weekday}</div>
      </div>
      <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-md">
        {d.recurrenceType.toUpperCase()}
      </span>
    </li>
  ))}
</ul>

    </div>
  );
}
