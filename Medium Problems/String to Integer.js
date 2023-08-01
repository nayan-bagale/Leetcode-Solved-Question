var myAtoi = function(s) {
    let gpt = /^\s*([+-]?\d+(?:\.\d+)?)(?:\D.*)?$/;
    let cust = /[+,-]*[1-9]+/g;
    let reg = parseInt(s.match(gpt));
    // console.log(reg)
    // console.log(isNaN(reg))
    if(isNaN(reg)) return 0
    if(((-2)**31) < reg){
        if(reg < ((2**31)-1)){
            return reg;
        }else{
            return ((2**31)-1);
        }
    }else{
        return (((-2)**31));
    }

};

console.log(myAtoi("42"))
console.log(myAtoi("   -42"))
console.log(myAtoi("4193 with words"))
console.log(myAtoi("words and 987"));
console.log(myAtoi("-91283472332"));