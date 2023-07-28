function revesre_array(arr) {
    let rev_arr = [];
    for(let i = arr.length-1; i >= 0; i--){
         rev_arr.push(arr[i])
    }
    return rev_arr
}

function join_array(arr){
    let string='';
    for(let i = arr.length-1; i>=0 ;i--){
        string += arr[i].toString(); 
    }
    return string;
}

var addTwoNumbers = function (l1, l2) {

    let list1 = join_array(l1)
    let list2 = join_array(l2)
    console.log(list1,list2)
    let val = parseInt(list1) + parseInt(list2), arr = [];

    while(val != 0){
        arr.push(val%10);
        val = parseInt(val/10);
    }

    console.log(arr)

};


let l1 = [2, 4, 3],
  l2 = [5, 6, 4];

addTwoNumbers(l1,l2)