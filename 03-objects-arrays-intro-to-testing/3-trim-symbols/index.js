/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (size === 0 || !string) {
    return '';
  }
  if (!size) {
    return string;
  }
  const arr = string.split('');
  let counter = 1;
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const currentLetter = arr[i];
    const pervLetter = arr[i - 1];
    if ((currentLetter === pervLetter && (counter < size))) {
      result += currentLetter;
      counter++;
    } else if (currentLetter !== pervLetter) {
      result += currentLetter;
      counter = 1;
    }
  }
  return result;
}
