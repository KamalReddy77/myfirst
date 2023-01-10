/*blue print of an object.By using we can build as many objects we want*/
class Car{
    constructor(color,speed,price){
        this.color=color
        this.speed=speed
        this.price=price
    }
    currentSpeed(){
       return this.speed
    }
    priceOfCar(){
        console.log("price of your car is:",this.price)
    }
}
//creating an object
 const obj=new Car("red",100,10000)
 const car1=obj.currentSpeed()
 console.log(car1)
const obj1= new Car("black",91,11111)
obj1.priceOfCar()
//built in constructors
const d=new Date()
console.log(d)
console.log(d.getFullYear())
