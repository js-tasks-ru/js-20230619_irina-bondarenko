const collator = new Intl.Collator(['ru', 'en'], { caseFirst: 'upper' });
const ascSort = (a, b) => collator.compare(a, b);
const descSort = (a, b) => collator.compare(b, a);

/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const sortFn = param === 'asc' ? ascSort : descSort;
  return [...arr].sort(sortFn);
}