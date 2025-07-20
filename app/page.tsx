"use client";

import MiniCalendarPreview from "./components/CalendarPreview";
import DateRangePicker from "./components/DateRangePicker";
import DaySelector from "./components/DaySelector";
import RecurrenceOptions from "./components/RecurrenceOptions";


export default function HomePage() {
  return (
    <main className="p-8 space-y-6 flex min-h-screen w-full bg-blue-200 justify-center items-center  mx-auto">
      <div className="h-full bg-white p-6  rounded-xl  shadow-xl">
        <div className="my-8 text-center">
          <h1 className="text-3xl text-black font-bold">Recurring Date Picker</h1>
          <p className="text-slate-500 text-sm">Schedule your recurreing event</p>
        </div>
        <RecurrenceOptions />
        <DaySelector />
        <DateRangePicker />
        <MiniCalendarPreview />
      </div>
    </main>
  );
}
