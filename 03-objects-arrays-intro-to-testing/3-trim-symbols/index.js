/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (size === 0 || string === '') {return '';}
  if (size === undefined) {return string;}
  const arr = string.split('');
  let counter = 1;
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if ((arr[i] === arr[i - 1] && (counter < size))) {
      result += arr[i];
      counter++;
    } else if (arr[i] !== arr[i - 1]) {
      result += arr[i];
      counter = 1;
    }
  }
  return result;
}
