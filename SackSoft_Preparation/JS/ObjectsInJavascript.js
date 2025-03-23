/**
 * In Javascript  Objects are the collection of key value pair data
 * There are 4 type of object in Javascirpt
 * 1. User define Object.
 * 2. Native Object : Array, Map, Date etc.
 * 3. Host object : window, navigator
 * 4. Document Object : document
 * 
 * 
 * Wayst to create object
 * 
 * 1. using object literal
 * 2. using Object Contructor method
 * 3. Constructor function.
 * 4. ES6 Class
 * 5. Factory Function
 * 6. Object.assign()
 * 7. Object.create()
*/

let ocm = Object.create({});
ocm.key = 'Value'
console.log(ocm);


let obj = Object.assign({});
obj.name = 'Ram'
console.log(obj);
