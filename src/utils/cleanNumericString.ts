export default function cleanNumericString(str: string): string {
  return str.replace(/[^0-9]/g, "").trim();
}