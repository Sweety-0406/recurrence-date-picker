import { create } from "zustand";

export type Recurrence = "daily" | "weekly" | "monthly" | "yearly";

interface RecurrenceState {
  recurrenceType: Recurrence;
  setRecurrenceType: (type: Recurrence) => void;
  selectedDays: string[];
  toggleDay: (day: string) => void;
  startDate: string;
  endDate: string | null;
  setStartDate: (date: string) => void;
  setEndDate: (date: string | null) => void;
}

export const useRecurrenceHook = create<RecurrenceState>((set) => ({
  recurrenceType: "daily",
  setRecurrenceType: (type) => set({ recurrenceType: type }),
  selectedDays: [],
  toggleDay: (day) =>
    set((state) => ({
      selectedDays: state.selectedDays.includes(day)
        ? state.selectedDays.filter((d) => d !== day)
        : [...state.selectedDays, day],
    })),
  startDate: "",
  endDate: null,
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
}));
