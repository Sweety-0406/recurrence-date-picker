import { addDays, addWeeks, addMonths, addYears, format } from "date-fns";

export function getNextOccurrences(
  startDate: string,
  recurrenceType: string,
  selectedDays: string[]
): { formattedDate: string; weekday: string; recurrenceType: string }[] {

  let current = new Date(startDate);
  const occurrences: { formattedDate: string; weekday: string; recurrenceType: string }[] = [];

  while (occurrences.length < 5) {
    const dayName = format(current, "EEEE");
    const dateFormatted = format(current, "MMMM d, yyyy");

    if (recurrenceType === "weekly") {
      if (selectedDays.includes(dayName)) {
        occurrences.push({
          formattedDate: dateFormatted,
          weekday: dayName,
          recurrenceType,
        });
      }
      current = addDays(current, 1);
    } else {
      occurrences.push({
        formattedDate: dateFormatted,
        weekday: dayName,
        recurrenceType,
      });
      if (recurrenceType === "daily") current = addDays(current, 1);
      if (recurrenceType === "monthly") current = addMonths(current, 1);
      if (recurrenceType === "yearly") current = addYears(current, 1);
    }
  }

  return occurrences;
}


