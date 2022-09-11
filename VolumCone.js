class Cone{

     
    getVolum(radius, height) {
    //  /Cone- Volume= πr2h/3
      let pi = 3.1415;
       let coneVolum = (pi* radius*radius* height/3).toFixed(4);        
       console.log("Volum of cone:"+ coneVolum );
     }
}

cone =  new Cone();
cone.getVolum(10,21);