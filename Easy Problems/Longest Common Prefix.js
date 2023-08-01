var longestCommonPrefix = function(strs) {
    let str = strs[0], a = '';
    if(strs.length <= 1) return strs[0];
    for(let i=1; i<strs.length; i++){
        for(let j=0; j<str.length; j++){
            if(str[j] === strs[i][j]){
                a += strs[i][j];
            }else{
                break
            }
        }
        str = a;
        if(a.length < 1) break;
        a = ''

    }
    return str;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["dog"]));
console.log(longestCommonPrefix(["reflower", "flow", "flight"]));
console.log(longestCommonPrefix(["acc", "aaa", "aaba"]));