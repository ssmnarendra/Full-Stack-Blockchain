function stringLength(str){
     if(str.length >4){
        let val = "";
        val = str.substring(0,4) 
        
        lngt = str.length; 
        for (i=5; i<=lngt; i++)  
        {  
            val = val+"-" ;            
        }  
        console.log(val);
     }
     else{
        console.log(str)
     }
     
  }
  function whiteSpace(str){
      noSpaceStr = str.replace(/\s/g, "");
     console.log(noSpaceStr)
 }

 function replcaeWord(str){
    noSpaceStr = str.split(" ");   
   replcaeVal= noSpaceStr[1]+" "+ noSpaceStr[0]
   console.log(replcaeVal)
}
function replaceCharacter(str){
    let repVal;
    val = str.substring(0,1) ;
    if(val=="a")
    {
        repVal = "x";
    }
    console.log(repVal+str.substring(1,str.length));
}


function checkUpperLower(str){
   if(str.toLowerCase()  =="yes" ){
    console.log("users input if he enters yes, YES,Yes:"+str)
   }
   if(str.toUpperCase()  =="YES" ){
    console.log("users input if he enters yes, YES,Yes:"+str)
   }
   
}
function camleForm( ){
    let str = 'iNeuron';
    let str2 = str.charAt(0).toUpperCase() + str.slice(1);
    console.log("camleForm:"+str2);

    console.log("lowwer case:"+str2.toLowerCase());
    console.log("Upper case:"+str2.toUpperCase());
}

  // Function callxtctztztt
  stringLength("IceCream");
  whiteSpace("iNeuron Class");
  replcaeWord("iNeuron Class");
  replaceCharacter("apple");

  checkUpperLower("Yes"); 
  checkUpperLower("YES");
  camleForm();
  //5. What string method can be used to convert string into array ? :split()
  // 6. What string method can be used to check the occurrence of a specified text in a string? :match()
 // 7. How can you break a string to a newline in Javascript ?
  console.log("How can you break a string to a \nnewline in Javascript ?");