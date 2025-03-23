


// Factory Function : A Function that return an object is known as Factory Function.
function Mobile(){
    return{
        name:'Samsung',
        model:'Galaxy S3',
        price:25252
    }
}


let samsung = Mobile();
console.log(samsung);


let moto = Mobile();
moto.model = 'M15'
moto.name = 'Motorola'
moto.price = 50000

console.log(moto);

