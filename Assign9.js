function OuterFunction()
{ 
    var outerVariable = 100;
    function InnerFunction() {
       // alert(outerVariable);
    }
    return InnerFunction;
}
var innerFunc = OuterFunction();
innerFunc();
//innerFunc.InnerFunction();

for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
    console.log(i); // What is logged? 3 3 3
    }, 1000);
}
/**
A closure gives us access to an outer function's scope from an inner function.
 In JavaScript, closures are created every time a function is created, at function creation time.

 */

 /**
  * If we define any inner function within another function, this inner function is called a closure
  */
 /**
  * The scope is called a function scope, because the variable is accessible 
  * and only accessible within the function body where it's declared.
  */
 /**
  * Lexical scoping uses the location where a variable is declared 
  * within the source code to determine where that variable is available.
  */