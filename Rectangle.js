class Rectangle{
   
    constructor(height,length){
        this.height = height;
        this.length = length; 
    }
    area(){
        console.log("Area:"+this.height*this.length)
    }

}
class Square extends Rectangle{

    constructor(height,length){ 
        super(height,length); 
    }
}

let sq =  new Square(10,20);
console.log(sq.area());