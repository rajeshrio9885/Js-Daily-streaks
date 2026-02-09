//find the second largest number
let arr = [10, 20, 5, 99, 50];
let largest = arr[0]
let second = -Infinity
for(let num of arr){
    if(num > largest){
        second = largest;
        largest = num;
    }else if(num > second && num != largest){
        second = num;
    }
}

console.log(second); //50