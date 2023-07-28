var romanToInt = function (s) {
  var obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i + 1] === undefined) {
      total += obj[s[i]];
      continue;
    }
    if (obj[s[i]] >= obj[s[i + 1]]) {
      total += obj[s[i]];
    } else if (obj[s[i]] < obj[s[i + 1]]) {
      total += obj[s[i + 1]] - obj[s[i]];
      i++;
    }
  }
  return total;
};
