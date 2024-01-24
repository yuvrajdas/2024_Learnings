// _________________________________________________________________________________________________________________

console.log('start')
const promise1 = new Promise((resolve, reject) => {

    console.log(1)

})

console.log('end');

// _________________________________________________________________________________________________________________

/* What will be the output of the following: (Understand why, similar questions will be asked in interviews) */

console.log('start');
const promise1 = new Promise((resolve, reject) => {

    console.log(1)

    resolve(2)
})

promise1.then(res => {

    console.log(res)

})
console.log('end');

// _________________________________________________________________________________________________________________

/* What will be the output of the following: (Understand why, similar questions will be asked in interviews) */

console.log('start');
const promise1 = new Promise((resolve, reject) => {

    console.log(1)
    resolve(2)
    console.log(3)
})
promise1.then(res => {

    console.log(res)

})
console.log('end');

// _________________________________________________________________________________________________________________


/* What will be the output of the following: (Understand why, similar questions will be asked in interviews) */
console.log('start');

const promise1 = new Promise((resolve, reject) => {

    console.log(1)
})

promise1.then(res => {
    console.log(2)
})

console.log('end');

// _________________________________________________________________________________________________________________
/* What will be the output of the following: (Understand why, similar questions will be asked in interviews) */

console.log('start')
const fn = () => (new Promise((resolve, reject) => {

    console.log(1);
    resolve('success')
}))

console.log('middle')

fn().then(res => {
    console.log(res)
})

console.log('end')

// __________________________________________________________________
function create3rdPost(callback) {
    setTimeout(() => {
        console.log('Post Three')
        //If callback function is passed call it
        if (callback) {
            callback();
        }
    }, 3000)
}

//Please modify this function too to reach the desired output
function create4thPost() {
    setTimeout(() => {
        console.log('Post Four')
    }, 2000);
}

// Do not touch this function at all
function create5thPost() {
    setTimeout(() => {
        console.log('Post Five')
    }, 1000);
}

//You have to  modify the syntax below to reach the desired output
create3rdPost();
create4thPost();
create5thPost();
Expected Output

Post Three

Post Four

Post Five


Current output

Post Five

Post Four

Post Three
// _________________________________________________
var a = 3;
function printName(name) {
    console.log(name)
}
printName("YAVTECH");
console.log(a)

// __________________________________________

printName("YAVTECH");
console.log(a);
var a = 3;
function printName(name) {
    console.log(name)
}
// ___________________________________________
console.log(printName);
console.log(a);
var a = 3;
var printName = (name) => {
    console.log(name)
}

// ____________________________________________
console.log(printName);
console.log(a);

var a = 3;
var printName = function (name) {
    console.log(name)
}

// _____________________________________________
What will be the output of the following(Also write the reason for the answer)

    var a = 2;
var c = 2;

function b() {
    var x = 2;
    var c = 4
    console.log(c)
}



console.log(a);
console.log(this.a);
console.log(this.c)
console.log(this.x)
console.log(window.a)
console.log(window.x)
console.log(b());

// ___________________________________________
 
Find the output
function abc() {
    console.log(a);
}
var a = 7;
abc();

// ____________________________________________

Find the output
function abc() {
    console.log(a);
}
abc();
var a = 7;

// _____________________________________________

Find the output
function outerfunction() {
    console.log(a);
    var c = 10;
    innerfunction();

    function innerfunction() {
        console.log(b);
        console.log(c);
    }
}

var a = 7;
var b = 3
outerfunction();

// ______________________________________________
Find the output

function outerfunction() {
    console.log(a);
    var a = 10;
    innerfunction();
    function innerfunction() {
        console.log(a);
        console.log(window.a);
        console.log(this.a)
    }
}

var a = 7;
var b = 3
outerfunction();
// _______________________

/*Let , Var and Const Related*/

console.log(a)
console.log(b);
let a = 5;
var b = 6;
console.log(b);

// ___________________________________________
What is the difference between type error vs syntax error vs reference error.

Give Examples of when you can encounter each one of them.


    console.log(a);
var a = 5;
console.log(b) //we havent initialized b, Guess the output

// _________________________________________________

let a = 5;
var b = 6;

console.log(this.b);
console.log(window.b)
console.log(window.a)
console.log(this.a);
// __________________________________________________


let a = 5;
let a = 6;
What will be the error
// ___________________________________________________

let a = 6;
const b
b = 100;

// ____________________________________________________

// Closures, Settimeout, ES6 features

console.log('a');
console.log('b');

setTimeout(() => console.log('c'), 1000);
console.log('d');
// ____________________________________________________


console.log('a');
console.log('b');
setTimeout(() => console.log('c'), 1000);
setTimeout(() => console.log('d'), 0);
console.log('e');

// _____________________________________________________

Write down the 10 new features introduced in ES6 along with what they mean and where they could be used

// _____________________________________________________


var arr = [1, 2, 3, 5]
var newArr = arr.forEach((item, i) => {
    console.log(item + 'index' + i)
    return item + i
})
console.log(newArr)

// ______________________________________________________


var arr = [1, 2, 3, 5]
var newArr = arr.map((item, i) => {
    console.log(item + 'index' + i)
    return item + i
})
console.log(newArr)

// _______________________________________________________

// What is the main difference between forEach and map function?[Favourite Interview Question]

// ________________________________________________________


/*Block scope and Shadowing in JS */

var a = 50;
{
    var a = 30;
    let b = 20;
    let c = 30;
}
console.log(a)

// _________________________________________________________

const a = 50;
{
    var a = 30;
    let b = 20;
    let c = 30;
}
console.log(a)
// __________________________________________________________

let a = 50;
{
    var a = 30;
    let b = 20;
    let c = 30;
}
console.log(a)
// ___________________________________________________________

var a = 50;
function fun() {
    var a = 30;
    let b = 20;
    let c = 30;
}
fun();
console.log(a)
// ____________________________________________________________

let a = 50;
function fun() {
    var a = 30;
    let b = 20;
    let c = 30;
}
fun();
console.log(a)
// _____________________________________________________________

const a = 10;
{
    var a = 100;
}
console.log(a)

// _____________________________________________________________

const a = 10;
{
    const a = 20;
    {
        const a = 50;
        console.log(a);
    }
    console.log(a)
}
console.log(a)
// _____________________________________________________________

const a = 10;
{
    const a = 20;
    {
        console.log(a);
    }
    console.log(a)
}
console.log(a)
// _________________________________________________________________

/*Closures (99 % interviewers ask this) */

function x() {
    let a = 10;
    function y() {
        console.log(a);
    }
    y()
}
x();
// ___________________________________________________________________

function x() {
    let a = 10;
    function y() {
        return a;
    }
    console.log(y());
}
x();

// _____________________________________________________________________

function x() {
    let a = 10;
    function y() {
        console.log(a);
    }
    return y;
}
console.log(x());

// ______________________________________________________________________

function x() {
    let a = 10;
    function y() {
        console.log(a);
    }
    return y;
}
const z = x()
console.log(z());
//_______________________________________________________________________

function x() {
    let a = 10;
    function y() {
        console.log(a);
    }
    a = 50;
    return y;
}
const z = x()
console.log(z());
// _____________________________________________________________________

/*Call Apply and Bind */

var obj = {
    val: 100
}
function fun() {
    console.log(this.val)
}
fun()

// _____________________________________________________________________

var obj = {
    val: 100
}
function fun() {
    console.log(this.val)
}
obj.fun()

// ______________________________________________________________________

var obj = {
    val: 100
}
function fun() {
    console.log(this.val)
}
fun.call(obj)

// ______________________________________________________________________

var obj = {
    val: 100
}
function fun(a) {
    console.log(this.val + a)
}
fun.call(obj)

// _______________________________________________________________________

var obj = {
    val: 100
}

function fun(a) {
    console.log(this.val + a)
}
fun.call(obj, 3)
// _______________________________________________________________________

var obj = {
    val: 100
}

function fun(a, b, c) {
    console.log(this.val + a + b + c)
}

fun.call(obj, 3, 4, 5)
// ________________________________________________________________________

var obj = {
    val: 100
}

function fun(a, b, c) {
    console.log(a)
    console.log(b)
    console.log(c)
}

fun.call(obj, [3, 4, 5])
// _________________________________________________________________________


var obj = {
    val: 100
}
function fun(a, b, c) {
    console.log(this.val + a + b + c)
}

fun.apply(obj, [3, 4, 5])

// _________________________________________________________________________

var obj = {
    val: 100
}
function fun(a, b, c) {
    console.log(this.val + a + b + c)
}
const fun2 = fun.bind(obj)
fun2(1, 2, 3)

// _________________________________________________________________________


/*Advanced Closures */

function y() {
    setTimeout(() => console.log("a"), 1000)
    console.log('Done Coding')
}
y();
// _________________________________________________________________________

function y() {
    setTimeout(() => console.log("a"), 0)
    console.log('Done Coding')

}
y();

// _________________________________________________________________________

function y() {

    for (var i = 1; i < 6; i++) {
        setTimeout(() => console.log(i), i * 1000)
    }
    console.log('Done Coding')
}
y();

// _________________________________________________________________________

function y() {
    for (let i = 1; i < 6; i++) {
        setTimeout(() => console.log(i), i * 1000)
    }
    console.log('Done Coding')
}
y();

// _________________________________________________________________________

Can you complete the following function "name" so that it prints as per the comments.
Const name = (arr) => {

}

let fun = name(["Ram", "Shyam"]);
fun()// Print Hello Ram
fun()//print Hello Shyam

// _________________________________________________________________________


/*Functions */
a()
b()
function a() {
    console.log('inside a');
}

var b = function () {
    console.log('inside b');
}

// ________________________________________________________________________

Difference between function declaration and function expression

// ________________________________________________________________________

function a() {
    console.log('inside a');
}

var b = function abc() {
    console.log('inside b');
}
a()
abc()
// ________________________________________________________________________

function fun(a) {
    console.log(a)
}
var b = 10;
fun(b)

// ________________________________________________________________________

function fun1() {
    console.log('a')
    return () => {
        console.log('b')
    }
}
fun1()

// ________________________________________________________________________

function fun1() {
    var a = 10
    return () => {
        a = 20;
        console.log(a)
    }
}
fun1()()

// ________________________________________________________________________

function fun1(a) {
    return () => {
        a = a + 20;
        console.log(a)
    }
}

fun1(10)(20)
// ________________________________________________________________________


function fun1(a) {
    return (b) => {
        a = a + b;
        console.log(a)
    }
}

fun1(10)(30)
// ________________________________________________________________________

function fun1(a) {
    const fun2 = (b) => {
        a = a + b;
        console.log(a)
    }
}

fun1(10)(30)
// ________________________________________________________________________

/*CallBack Function */

setTimeout(() => console.log('timer expired'), 1000)
function x(y) {
    console.log('inside x');
    y();
}

x(function y() {
    console.log('inside y')
})

// ________________________________________________________________________

setTimeout(() => console.log('timer1 expired'), 1000)

setTimeout(() => console.log('timer2 expired'), 0)

function x(y) {
    console.log('inside x');
    y();
}
x(function y() {
    console.log('inside y')
})

// ________________________________________________________________________

setTimeout(() => console.log('timer1 expired'), 1000)

setTimeout(() => console.log('timer2 expired'), 0)

function x(y) {
    console.log('inside x');
    y();
}

x(function y() {
    setTimeout(() => console.log('inside y'), 0)
})

// ________________________________________________________________________

/*Fat Arrow Functions */

var fun = a => a
var a = 10;
console.log(fun(a))

// ________________________________________________________________________

var fun = a => a
console.log(fun(a))
var a = 10;

// ________________________________________________________________________

var fun = a => { a }
var a = 10;
console.log(fun(a))

// ________________________________________________________________________

var fun = (a, b) => {
    var sum = a + b
    return sum
}
var a = 10;
var b = 20
console.log(fun(a, b))

// ________________________________________________________________________

var fun = (a, b) =>
    var sum = a + b
    return sum
    var a = 10;
    var b = 20
    console.log(fun(a, b))

    // ________________________________________________________________________

    var student = function (name) {
        this.name = name;

        function printName() {
            console.log(this.name)
        }

        printName()
    }
    var yash = new student("yash")

// ________________________________________________________________________

Beautifully solved by fat arrow function. Always remember this.[Favorite interview question]

    var student = function (name) {

        this.name = name;
        var printName = () => {

            console.log(this.name)

        }

        printName()

    }

    var yash = new student("yash")
// ________________________________________________________________________

 /*Event Loop */

 which function would get in the call stack first

    function fun1() {
        console.log('á')
    }

    function fun2() {
        console.log(b)
    }

    fun2()
    fun1()
// ________________________________________________________________________
 
Which function would be picked by the Global Execution Context first ?

        function fun1() {
            console.log("á")
        }

    function fun2() {
        console.log(b)
    }
    fun2()
    fun1()

    // ________________________________________________________________________

    function fun1() {
        console.log("a")
    }

    function fun2() {
        console.log(b)

    }
    setTimeout(fun2, 1000)
    fun1()
    // ________________________________________________________________________

    function fun1() {
        console.log("a")
    }

    function fun2() {
        console.log(b)
    }
    document.getElementById("some button").addEventListener("click", fun1)
    fun2();
// ________________________________________________________________________

Given a student object as shown below can you write code to iterate through object and find the student's name who is of age n.

    Input
    studentobj = {
        'yash': 26,
        'vaibhav': 24,
        'rajesh': 25,
    }
    age = 25

    Output
    rajesh
    // ________________________________________________________________________

    /* Application of event loop and spread operators */

    console.log('a');
    console.log('b');
    setTimeout(() => console.log('c'), 1000)
    console.log('d')

    // ________________________________________________________________________

    console.log('a');
    console.log('b');
    setTimeout(() => console.log('c'), 0)
    console.log('d')
    // ________________________________________________________________________


    console.log('a');
    console.log('b');

    setTimeout(() => console.log('e'), 1000)

    setTimeout(() => console.log('c'), 0)

    console.log('d')
    // ________________________________________________________________________

    const obj1 = {
        "key1": "value1",
        "key2": "value2",
        "key3": "value3"
    }
    const obj2 = { ...obj1 }
    console.log(obj2)
    // ________________________________________________________________________

    const obj1 = {

        "key1": "value1",

        "key2": "value2",

        "key3": "value3"

    }
    const obj2 = { ...obj1, "key3": "new value" }

    // ________________________________________________________________________

    4d) const obj1 = {
        "key1": "value1",
        "key2": "value2",
        "key3": "value3"
    }

    const obj2 = { ...obj1, "key3": "new value", "key1": "new val" }
    What is the output of question of 4 d ?
// ________________________________________________________________________


    const obj = {
        "key1": "value1",
        "key2": "value2",
        "key3": "value3"

    }
    const obj2 = { ...obj }
    console.log(obj2 === obj)
    // ________________________________________________________________________

    const arr1 = [1, 2, 3]
    const arr2 = [3, 5, 6]
    const arr3 = [...arr1, ...arr2]
    console.log(arr3)
    // ________________________________________________________________________

    Ques.Given a student object as shown below can you write code to iterate through object and find average age of students.

        Input
    studentobj = {
        'yash': 26,
        'vaibhav': 24,
        'rajesh': 25,
    }
    Output
    Average age = 25


    Explanation
    On adding all the ages we get 75
    Total number of keys = 3
    So 75 / 3 = 25.




