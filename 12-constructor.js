/*
Constructors 
*/

// Every function has a prototype object
function foo() {

}
console.log('typeof prototype', typeof foo.prototype);


function Dog() {

}
Dog.prototype.bark = function() {
    console.log('woof!');
};
let fido = new Dog();
fido.bark();

// Differential Inheritance
console.log('hasOwnProperty', fido.hasOwnProperty('bark'));