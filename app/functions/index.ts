export const formatDate = (date: string) => {
  const formattedDate = new Date(date);
  return formattedDate
    .toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
    .replace("at", "");
};
