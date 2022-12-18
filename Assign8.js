
function mySetObject(){

    var emp=new Object();  
    emp.id=101;  
    emp.name="Ravi Malik";  
    emp.salary=50000;  
    console.log(emp);
    
    var set1 = new Set(['apple', 'banana', 'orange']);
    var result = set1.delete('banana');
   
    set1.forEach(num => 
        console.log(num)
    ); 

    console.log("set1:"+set1); 
    console.log("result:"+result); 
 } 

 mySetObject();