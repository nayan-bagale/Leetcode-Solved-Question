var isValid = function (s) {
  let array = [];
  for(let i=0; i<s.length; i++){
    if(s[i] === '(' || s[i] === '[' || s[i] === '{' ) {
      array.push(s[i])
    }else{
      const pop = array.pop();
      if (
        (s[i] === ")" && pop === "(") ||
        (s[i] === "]" && pop === "[") ||
        (s[i] === "}" && pop === "{")
      ) {
        continue
      } else {
        array.push(s[i]);
      }
    }
  }

  console.log(array)

  return array.length < 1;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([{}])"));
console.log(isValid("(])"));
