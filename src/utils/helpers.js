export function FormatDate(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleDateString();
}
