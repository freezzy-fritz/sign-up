let firstName='marvins';
let lastName='peters';

let fullName= firstName + ' ' + lastName;
console.log(fullName);
/*array
let firstVariable=['marvins',12,true];
let secondVariable=firstVariable;
secondVariable.push(false,'30 billion gang')
console.log(firstVariable);
console.log(secondVariable);
*/
/*object*/
let firstVariable={
    firstName:'marvins'
};
firstVariable.lastName='peters';
console.log(firstVariable);

/*coditionals
let x= 4;
if(x>2){
    console.log(x +" is greater than " + 2)
}if else(x>1){
      console.log(x +' is equal to ' + 1)     
}*/
/*
function divide(x,y){
    console.log(x/y)
}
divide(10,5)
*/
function multiply(favour,stan){
    console.log(favour*stan)
}
multiply(7,12)

document.getElementById("crock").innerHTML = "i love playing video games and i will get my ps4 today"
document.getElementById("crock").style.color=" green "

document.getElementById("bulbOn").style.display=" none "

function changeBulbOn(){
    document.getElementById("bulbOff").style.display=" none "
    document.getElementById("bulbOn").style.display=" block "
}

function changeBulbOff(){
    document.getElementById("bulbOn").style.display=" block "
    document.getElementById("bulbOff").style.display=" none "
}