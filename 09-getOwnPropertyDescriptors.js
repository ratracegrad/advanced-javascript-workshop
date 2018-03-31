/*
Object.getOwnPropertyDescriptors
*/
const obj = {
    name: 'Pablo',
    get foo() { return 42; }
};
let opd = Object.getOwnPropertyDescriptors(obj);
console.log('ownPropertyDescriptors', opd);

