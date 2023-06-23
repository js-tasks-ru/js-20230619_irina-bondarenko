/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

const collator = new Intl.Collator(undefined, { caseFirst: 'upper' });

export function sortStrings(arr, param = 'asc') {
  const res = [...arr].sort((a, b) => collator.compare(a, b));
  return param === 'asc' ? res : res.reverse();
}
