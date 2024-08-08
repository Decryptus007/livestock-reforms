export function truncateString(str: string, maxLength: number) {
  // Check if the string length is greater than the maxLength
  if (str.length > maxLength) {
    // Truncate the string to the maxLength and add ellipsis
    return str.substring(0, maxLength - 3) + "...";
  } else {
    // If the string length is within the maxLength, return the string as is
    return str;
  }
}
