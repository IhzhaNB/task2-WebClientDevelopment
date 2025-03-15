function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

export default isPalindrome;
