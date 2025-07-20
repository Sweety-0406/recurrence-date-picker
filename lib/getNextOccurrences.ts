import { addDays, addMonths, addYears, format } from "date-fns";

export function getNextOccurrences(startDate: string, recurrenceType: string, selectedDays: string[]) {
  let current = new Date(startDate);
  const occurrences = [];

  while (occurrences.length < 5) {
    const formattedDate = format(current, "MMMM d, yyyy");
    const day = format(current, "EEEE");

    if (recurrenceType === "weekly") {
      if (selectedDays.includes(day)) {
        occurrences.push({ formattedDate, weekday: day, recurrenceType });
      }
      current = addDays(current, 1);
    } else {
      occurrences.push({ formattedDate, weekday: day, recurrenceType });
      if (recurrenceType === "daily") current = addDays(current, 1);
      if (recurrenceType === "monthly") current = addMonths(current, 1);
      if (recurrenceType === "yearly") current = addYears(current, 1);
    }
  }
  return occurrences;
}
