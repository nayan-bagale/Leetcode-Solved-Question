var reverse = function (x) {
    if(x === 0) return x
    let str = x.toString();
    let newStr = ((str[0]) === '-' || (str[0]) ===  '+') ? str[0] : ""

    for(let i=str.length-1; 0 <= i; i--){
        if(str[i] === '-' || str[i] === '+') continue
        newStr += str[i];
    }

    let num = parseInt(newStr);
    if(((-2)**31) <= num){
        if((2**31)-1 >= num){
            return num;
        }else{
            return 0
        }
    }else{
        return 0
    }

};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(12));
console.log(reverse(0));
console.log(reverse(5));
console.log(reverse(502));
console.log(reverse(901000));
console.log(reverse(1534236469));