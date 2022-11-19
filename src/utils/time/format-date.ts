export const formatDate = (time: string) => {
  const dateObj = new Date(time);
  return dateObj.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    weekday: "short",
  });
};
