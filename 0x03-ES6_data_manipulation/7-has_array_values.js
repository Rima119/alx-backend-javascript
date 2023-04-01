export default function hasValuesFromArray(set, array) {
  return Array.isArray(array) && array.every((item) => set.has(item));
}
