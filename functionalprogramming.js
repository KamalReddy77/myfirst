var counter=3;
function example(){
    console.log(counter)
    counter-=1
    if(counter===0){
        return;
    }
    example();
}
example()
//functions as a arguments
function addTwoNumbers(a,b){
    console.log(a+b)

}
function randomNum(){
    return Math.floor((Math.random()*10)+1)
}
function specificNum(){
    return 42
}
/*var bool=false
var getNumber
if(bool){
    getNumber=randomNum()
}
else{
    getNumber=specificNum()
}*/
addTwoNumbers(randomNum(),specificNum())
//scope
var global="i am globlal variable"
function scope(){
    var local="i am local variable"
    console.log(global)
}
try{
console.log(local)
}catch(err){
scope()
}