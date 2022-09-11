class Sphere{

     
    getVolum(radius, height) {
    // Sphere- Volume= 4/3πr3
      let pi = 3.1415;
       let sphereVolum = (pi* radius*radius* radius*4/3).toFixed(4);        
       console.log("Volum of sphere:"+ sphereVolum );
     }
}

sphere =  new Sphere();
sphere.getVolum(10,21);