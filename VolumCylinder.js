class Cylinder{

     
    getVolum(radius, height) {
     // V=πr2h
      let pi = 3.1415;
       let cylinderVolum = pi* radius*radius* height.toFixed(4);        
       console.log("Volum of cylinder:"+ cylinderVolum +":: "+roundUp);
     }
}

cyl =  new Cylinder();
cyl.getVolum(11,21);