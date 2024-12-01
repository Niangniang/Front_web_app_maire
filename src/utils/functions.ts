import { format } from "date-fns";

// ...

export const formatTime = (date: Date) => format(date, "HH:mm");
export const formatDate = (date: Date, locale: Locale) =>
  format(date, "eeee dd MMMM yyyy", { locale });
