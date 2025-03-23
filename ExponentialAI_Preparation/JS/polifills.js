let arr = [3,4,5,6,7,8];
// Polifills for ForEach Method.
// Array.prototype.myForEach = function(cb){
    
//     for(let i=0; i<this.length; i++){
//         cb(this[i], i, this);
//     }
// }

// arr.myForEach((ele, idx, arr)=>{
//     console.log(ele, idx, arr);
// })


// Polifills for Filter method.
// Array.prototype.myForEach = function(cb){
//     let res = [];
//     for(let i=0; i<this.length; i++){
//         if(cb(this[i], i, this)){
//             res.push(this[i]);
//         }
//     }
//     return res;
// }

// let res = arr.myForEach((ele, i, arr)=>{
//     console.log(ele, i, arr);
//     return ele>5;
// })
// console.log(res);


// Polifills for Map method.
// Array.prototype.myMap = function(cb){
//     let res = [];
//     for(let i=0; i<this.length; i++){
//         res.push(cb(this[i], i, this));
//     }
//     return res;
// }

// let res = arr.myMap((ele, i, arr)=>{
//     if(ele == 4){
//         ele = "Yuvraj Das"
//     }
//     return ele;
// })
// console.log(res);


// Polifill for Reduce
// Array.prototype.myReduce = function(cb, initialValue){

//     let acc = initialValue !== undefined ? initialValue : this[0];

//     for(let i = initialValue == undefined ? 1 : 0; i<this.length; i++){
//         acc = cb(acc, this[i]);
//     }

//     return acc;
// }

// let res = arr.myReduce((acc, curr)=>{
//     if(curr>5){
//         acc.push(curr);
//     }
//     return acc;
// },[])

// console.log(res);




// Array.prototype.myForEach = function(cb, initialValue){

//     let acc = initialValue !== undefined ? initialValue : this[0];


//     for(let i = initialValue == undefined ? 1 : 0; i<this.length; i++){
//         acc = cb(acc, this[i]);
//     }
//     return acc;
// }

// let res = arr.myForEach((acc, curr)=>{
//     return acc+curr;
// })

// console.log(res);

 

// Array.prototype.myMap = function (cb){
//     let res = []
//     for (let i = 0; i < this.length; i++) {
//         res.push(cb(this[i], i, this))
//     }
//     return res;
// }
 
// let res = arr.myMap((ele)=>{
//     if(ele >= 5){
//         return ele;
//     }
// })
// console.log(res);

// Array.prototype.myFilter = function(cb){
//     let res = [];

//     for(let i=0; i<this.length; i++){
//         if(cb(this[i], i, this)){
//             res.push(cb(this[i], i, this));
//         }
//     }

//     return res;
// }

// let res = arr.myFilter((ele)=>{
//     if(ele>5){
//         return ele;
//     }
// })

// console.log(res);


let obj = {name:'Yuvraj', age:28, city:'Raigarh', country:'India'}

// Object.values(obj).forEach((ee)=>{
//     console.log(ee);
    
// })

// Object.keys(obj).forEach((ee)=>{
//     console.log(ee);
    
// })

// Object.entries(obj).forEach(([key, value])=>{
//     console.log(key, value);
    
// })

function chooseSubject(sub1){
    console.log(`Teacher name :- ${sub1} `);
}

let teacher1 = {
    firstName:"Rohit",
    lastName:"Patel"
}
chooseSubject.apply(teacher1 , "Hindi")