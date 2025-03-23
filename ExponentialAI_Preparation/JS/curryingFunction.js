function hello(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

let res = hello(1)(2)(3)
console.log(res);
