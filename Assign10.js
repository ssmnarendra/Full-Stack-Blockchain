//Higher-Order Functions(HoF): A function that takes another function(s) as an argument(s) and/or returns a function as a value.
//Callback Functions(CB): A function that is passed to another function.
function higherOrderFunctions(callback){

    callback();

}
//Is filter a Higher Order function in Javascript ? : Yes
// If yes, why ?
var arr = [ 1, 2, 3 ];

var arrDoubled = arr.map(function(num) {
  return num * 2;
});

console.log(arrDoubled); // [ 2, 4, 6 ]
/**
A Higher Order Function is any function 
that returns a function when executed,
 takes a function as one or more of its arguments, or both. 
 If you have used any of the Array methods like map or filter, 
 or passed a callback function to jQuery’s $.get, you have already worked with Higher Order Functions
 */

const names= ['John', 'Joe','Alfredo','Waldo']
function useFunction(arr,fn){
    for(let i=0; i<arr.length; i++){
        fn(arr[i]); // fn(arr[I]); Here I undefined
    }
}
function argFn (name){
    console.log("Hello " + name );
}
    useFunction(names,argFn);
/**
    a) What will be the output of this program ?

    Hello John
    Hello Joe
    Hello Alfredo
    Hello Waldo

    b) Which function is a Higher Order function here ?
        useFunction(names,argFn);
    */