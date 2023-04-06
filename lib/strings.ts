/** Capitalise a string
 * @param string string to capitalise
 * @returns the string with the first character in uppercase
 * 
 * @example capitalize('hello world') === 'Hello world'
 * @example capitalize('Hello world') === 'Hello world'
*/
export const capitalize = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1)

/** Truncate a string if its too long, adding an ellipsis if truncation occurs
 * @param string the string to truncate 
 * @param maxLength the maximum length of the string
 * @param ellipsis the ellipsis to add to the string. Defaults to an ellipsis character
 * @returns the truncated string.
*/
export const truncateWithEllipsis = (string: string, maxLength = 50, ellipsis='…') =>
  string.length > maxLength
    ? `${string.substring(0, maxLength - ellipsis.length)}${ellipsis}`
    : string
