let result = "";
let n =4;
count = 1;
for (let i = 1; i <= n; i++) {
    
    for (let k = 0; k < i; k++) {
        result += count;
      count++; 
    }
    result += "\n";
  }
  console.log(result);