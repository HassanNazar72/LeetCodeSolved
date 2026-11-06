/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const open_bracket = ['(', '{', '['];
  const close_bracket = [')', '}', ']'];
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    // 1) If it's an opening bracket, add it to the top of stack
    if (open_bracket.includes(ch)) {
      stack.push(ch);
      continue;
    }

    // 2) If it's a closing bracket, get its index
    const closeIndex = close_bracket.indexOf(ch);
    if (closeIndex === -1) return false;     // not a bracket (optional guard)
    if (stack.length === 0) return false;    // nothing to match

    // 3) Check top of stack: does its open index match the close index?
    const top = stack[stack.length - 1];     // top of stack (do not remove yet)
    const openIndex = open_bracket.indexOf(top);

    if (openIndex === closeIndex) {
      stack.pop();                           // match -> remove the open bracket
    } else {
      return false;                          // mismatch
    }
  }

  // valid only if no unmatched opens left
  return stack.length === 0;
};

