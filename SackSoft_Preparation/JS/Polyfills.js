let arr = [1,2,3,4,5];


// Array.prototype.myForEach = function(cb){
//     for(let i=0; i<this.length; i++){
//         cb(this[i], i, this);
//     }
// }


// arr.myForEach((ele, i)=>{
//     console.log(ele, i);
// })

// Array.prototype.myMap = function(cb){
//     let res = [];

//     for(let i=0; i<this.length; i++){
//        res.push(cb(this[i], i, this));
//     }
//     return res;
// }

// let res = arr.myMap((ele)=>{
//     return ele+=1;
// })
// console.log(res);

 
// Array.prototype.myFilter = function(cb){

//     let res = [];
//     for(let i = 0; i<this.length; i++){
//         if(cb(this[i], i, this)){
//             res.push(cb(this[i], i, this));
//         }
//     }

//     return res;
// }


// let res = arr.myFilter((ele)=> {
//     if(ele>2) return ele;
// });
// console.log(res);

 

Array.prototype.myReduce = function(cb, initialValue){
     let acc = initialValue === undefined ? this[0] : initialValue;

     for(let i = initialValue === undefined ? 1 : 0; i<this.length; i++){
        acc = cb(acc, this[i], i, this);
     }

     return acc;
}


let res = arr.myReduce((acc, curr)=>{
    return acc+curr
})

// let res = arr.reduce((acc, curr)=>{
//     console.log(acc, curr);
// return;
 
// })

console.log(res);

let array =  [1, 2, 3, [4, 5, 6, [0, 8, [2, 6, 4]]], 6, [0, 0] ];

console.log(array.flat(Infinity));
