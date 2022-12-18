function matchSticksHouse(n){
    if (n === 0) {
      console.log("Step 0 returns 0 matchsticks.");
    } else if (n < 0 || typeof n !== "number") {
        console.log( "The input (step) will always be a non-negative integer.");
    } else {
      let a;
      a = (5 * n) + 1;
      console.log(`matchHouses(${n}):`+ a);
    }
    
  }
  // Function call
  matchSticksHouse(1);
  matchSticksHouse(2);
  matchSticksHouse(3);
  matchSticksHouse(4)