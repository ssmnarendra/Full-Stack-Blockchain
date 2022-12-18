 
function checkTriangle(x, y, z)
{
      
    if (x == y && y == z)
    console.log("Equilateral Triangle");
  
    else if (x == y || y == z || z == x)
    console.log("Isosceles Triangle");
 
    // Otherwise scalene triangle
    else
    console.log("Scalene Triangle");
}

function studentGrade(grade){
    
    switch(grade){
        case ((grade >= 90) && (grade <= 10)):
            console.log("S grade, if the marks are between 90 and 100");
            break;
            case ((grade >= 80) && (grade <= 90)):
            console.log("A grade, if the marks are between 80 and 90.");
            break;
            case ((grade >= 70) && (grade <= 80)):
            console.log("“B grade” if the marks are between 70 and 80.");
            break;
            case ((grade >= 60) && (grade <= 70)):
            console.log("“C grade” if the marks are between 60 and 70.");
            break;
            case ((grade >= 50) && (grade <= 60)):
            console.log("“D grade” if the marks are between 50 and 60.");
            break;
            case ((grade >= 40) && (grade <= 50)):
            console.log("“E grade” if the marks are between 40 and 50.");
            break;
            default:
            console.log("“Student has failed” if the marks are between 0 and 40.");
        break;
    }
    
}
 
function getSum(){
    var sum = 0;
    for (var x = 0; x < 1000; x++)
    {
        if (x % 3 === 0 || x % 5 === 0)
        {
        sum += x;
        }
    }
    console.log(sum);
}

function getPrimeNumber(lowerNumber,higherNumber){

   

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

let count = 1;
// looping from lowerNumber to higherNumber
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log("Prime number:"+count+":"+i);
        count++;
    }
}
}
let x = 8, y = 7, z = 9;
    
// Function call

checkTriangle(x, y, z);

studentGrade(40);
console.log("Write a JavaScript program to find the sum of the multiples of 3 and 5 under 1000");
getSum();

getPrimeNumber(1,100);