// program to check an Armstrong number of three digits

 let arrNumber =new Array(0, 1, 153, 370, 371 , 407);
 for(i=0;i<arrNumber.length;i++){
    // create a temporary variable
    const number = arrNumber[i];
    let sum = 0;
    let temp = number;
    while (temp > 0) {
        // finding the one's digit
        let remainder = temp % 10;
        sum += remainder * remainder * remainder;
        // removing last digit from the number
        temp = parseInt(temp / 10); // convert float into integer
    }
    // check the condition
    if (sum == number) {
        console.log(`${number} is an Armstrong number`);
    }
    else {
        console.log(`${number} is not an Armstrong number.`);
    }
}
