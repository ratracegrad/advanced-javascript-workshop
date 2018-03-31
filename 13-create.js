/*
Object.create()
*/
var parent = {
    foo: function() {
        console.log('bar');
    }
};
var child = Object.create( parent );
console.log('hasOwnProperty foo:', child.hasOwnProperty('foo')); 
child.foo(); 