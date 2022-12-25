let inputArray = [ 1, 2, 3, 4, 5 ];
let oddSum= 0;
let evenSum = 0;
let evenCount = 0;
let oddCount= 0;
for(i=0;i<inputArray.length;i++){
    if( inputArray[i]%2==0){
        evenSum  = evenSum + inputArray[i];
        evenCount++;
        //console.log("Numbers at Even Places ="+ inputArray[i]);
    }else{
        oddSum  = oddSum + inputArray[i];
        oddCount ++;
        //console.log("Numbers at Odd Places ="+ inputArray[i]);
    }
}
console.log("Sum of Numbers at Odd Places =", oddSum);

console.log("Sum of Numbers at Even Places =", evenSum);

console.log("Difference =", oddSum-evenSum);

console.log("Odd Elements =", oddCount);
console.log("Even Elements =", evenCount);

console.log("Agerage =", (oddSum+evenSum)/inputArray.length);

/**
 * 
 */
let arrFirst = [ 1, 2, 3, 4, 5 ];
let arrSecond = [ 4, 6, 1, 8, 2 ]; 
for(i=0; i<arrFirst.length;i++){
    if(arrFirst[i] == 4)
        console.log("4 in arrFirst.")
}
for(i=0; i<arrSecond.length;i++){
    if(arrSecond[i] == 4)
        console.log("4 in arrSecond.")
}

let arrFlat = [
        1, 2, 
        [ 3, 4, 
         [ 5 ]
        ] 
    ];
 

//let flatArray = [].concat.apply([], arrFlat);
//let flatArray = [].concat(...arrFlat);
let flatArray = arrFlat.reduce((acc, curVal) => {
    return acc.concat(curVal)
}, []);
console.log("flatArray",flatArray);

console.log(arrFlat.flat());
