   
   console.log("Q1: Write a program to find whether a given year is a leap year or not.")
     flag = false;
     year = 2000
        if(year % 400 == 0)
        {
            flag = true;
        }
        else if (year % 100 == 0)
        {
            flag = false;
        }
        else if(year % 4 == 0)
        {
            flag = true;
        }
        else
        {
            flag = false;
        }
        if(flag)
        {
            console.log("Year "+year+" is a Leap Year");
        }
        else
        {
            console.log("Year "+year+" is not a Leap Year");
        }

console.log("Q2: Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.")     
Celsius = 60;
Fahrenheit =((Celsius*9)/5)+32;
console.log("Temperature Celsius "+ Celsius+" in Fahrenheit is: "+Fahrenheit);

Fahrenheit = 45;
Celsius = (Fahrenheit-32)*5/9;

console.log("Temperature in Celsius is: "+Celsius);

console.log("Temperature in Celsius is: "+Math.ceil(Celsius));

console.log("Q3:Write a program to find the factorial of a number.")

fact = 2;
for(i=1;i<=10;i++){
    console.log(fact+"*"+i +"="+ fact*i);
}
