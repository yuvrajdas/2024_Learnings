 
    /*
        Call() : A Call method is a inbuild method in javascript that invokes a function with specified THIS vlaue
        When we need to attach a function with an object so that we can reuse that function in that case we use Call Method.
    */

     function fullName(prof){
        console.log(this.firtName+" "+this.lastName+ " "+prof);
    }

    let obj = {
        firtName: "Vinay",
        lastName: "Soni",
        city: "Mumbai",
    }

    let obj2 = {
        firtName: "Pooja",
        lastName: "Singh",
        city: "Mumbai",
    }
    
    fullName.call(obj2, [1,2,3,4,5]) // any type of argument we can pass it can => string, array, boolean, number etc
    fullName.call(obj, "Student")
 
    /* Apply() : apply is a inbuilt method in javascript that invokes a function with specified this value and the second paramter accept arraylist only.

    Use : When we need to attach a function with an object so that the function can be reuse and also we want to pass a arralist value to that function in that case we use apply method. 
    
    */

    function chooseSubject(sub1, sub2, sub3, sub4){
        console.log(`Teacher name :- ${this.firstName } ${this.lastName} \n Subject :- ${sub1} ${sub2} ${sub3} ${sub4}`);
    }

    let teacher1 = {
        firstName:"Rohit",
        lastName:"Patel"
    }
    chooseSubject.apply(teacher1 , ["Hindi", "English", "Maths", "Science"]) // only arraylist we can pass as an argument

    /**
     * Bind() : Bind Method allows us to create a copy of the function and call it later when need.
     */

    function details(sub1, sub2, sub3, sub4){
        console.log(`Full Name :- ${this.firstName } ${this.lastName} \n Subject :- ${sub1} ${sub2} ${sub3} ${sub4}`);
    }

    let person = {
        firstName:"Arun",
        lastName:"Kumar"
    }
    let bindedRes = details.bind(person , ["hello", "hi"])
    console.log(bindedRes);