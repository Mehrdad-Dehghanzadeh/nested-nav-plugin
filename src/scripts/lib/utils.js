export function checkItems(items, message) {
  if (!Array.isArray(items)) throw new Error(message);
  return Array.isArray(items);
}
