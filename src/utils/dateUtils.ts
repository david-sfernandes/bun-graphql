export function firstDayOfMonth() {
  const currentDate = new Date();
  const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  return date.toISOString().split("T")[0];
}

export function lastDayOfMonth() {
  const currentDate = new Date();
  const date = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0,
  );
  return date.toISOString().split("T")[0];
}
