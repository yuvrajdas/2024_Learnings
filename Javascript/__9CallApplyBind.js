 
    /*
        Call() : A Call method is a inbuild method in javascript that invokes a function with specified THIS vlaue
        When we need to attach a function with an object so that we can reuse that function in that case we use Call, Method.
    */

     function fullName(){
        console.log(this.firtName+" "+this.lastName);
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
    
    fullName.call(obj2)
    fullName.call(obj)
 