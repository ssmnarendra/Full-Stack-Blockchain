function nthlargest(highest){
    arra = [3,45,6,7,23,5,7,8];
    var x = 0,
        y = 0,
        z = 0,
        temp = 0,
        tnum = arra.length, 
        flag = false, 
        result = false; 

    while(x < tnum){
        y = x + 1; 
        
        if(y < tnum){
            for(z = y; z < tnum; z++){
                
                if(arra[x] < arra[z]){
                    temp = arra[z];
                    arra[z] = arra[x];
                    arra[x] = temp;
                    flag = true; 
                }else{
                    continue;
                }	
            }					
        }
        
        if(flag){
            flag = false;
        }else{
            x++; 
            if(x === highest){ 
              
                result = true;
            }	
        }
        if(result){
            break;
        }
    }

    return (arra[(highest - 1)]);	
}

console.log(nthlargest( 3)); 
