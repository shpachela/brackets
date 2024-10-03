module.exports = function check(str, bracketsConfig) {
  
  let stack = [];
  let map = Object.fromEntries(bracketsConfig);

  for (let char of str) {
      if (stack.length && map[stack[stack.length - 1]] === char) {
          stack.pop();
      } else {
          stack.push(char);
      }
  }

  return stack.length === 0;
}
