function fullDetails(args, other) {
    console.log(this.name, this.company, this.profession, args, other);

}

let person1 = {
    name: 'Yuvraj Das',
    company: 'Atai',
    profession: 'Software Engineer'
}


let person2 = {
    name: 'Anu Kumari',
    company: 'Atai',
    profession: 'Software Engineer'
}


// fullDetails.call(person1, [1, 2, 3, 4, 5], "HI")
// fullDetails.apply(person1, [1, 2, 3, 4, 5], "HI")
let cb = fullDetails.bind(person1, [1, 2, 3, 4, 5], "HI")
cb();

