/*
// an array of objects, logging only firstName

const family = {};


function Person(firstName, lastName) {
    family.firstName = firstName;
    family.lastName = lastName;
}


family.tyrone = new Person("Tyrone", "Jones");
family.janet = new Person("Janet", "Smith");
family.maria = new Person("Maria", "Cruz");
// console.table([tyrone, janet, maria], ["firstName"]);
console.table(family);
*/

let arr = [2, 3, 5, 7]

arr.map(function(element, index, array){
    console.log(element);
    console.log(index);
    console.log(array);
    console.log('this = ', this)
    return element;
}, 80);