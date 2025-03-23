

// const promise1 = new Promise((pending,resolve)=>{
        
//     setTimeout(()=>{
//         resolve("Resolved...")
//     }, 3000)
// })


// promise1.then((res)=>{
//     console.log(res);
    
// }).catch((err)=>{
//     console.log(err);
    
// })


async function getData(){
    try{
        let res = await new Promise((resolve)=>{
            setTimeout(()=>{
                resolve("Success...");
            }, 3000)
        })

        console.log(res);
        console.log("Hello");
        
    }catch(err){
        console.log(err);
    }
}

getData()