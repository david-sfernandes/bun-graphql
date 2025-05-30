export function firstDayOfMonth() {
  const currentDate = new Date();
  const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  return date.toISOString().split("T")[0];
}

export function firstDayPreviousMonth() {
  const currentDate = new Date();
  const date = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() - 1,
    1,
  );
  return date.toISOString().split("T")[0];
}

export function lastDayPreviousMonth() {
  const currentDate = new Date();
  const date = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    0,
  );
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
