const fs = require("fs")

// Sync....
// fs.writeFileSync("./test.txt" ,"hello world");

// Async...
// fs.writeFile("./test.txt","hello world async" ,(err)=>{})

// const result = fs.readFileSync("./contacts.txt", "utf-8" )
// console.log(result);

// fs.readFile("./contacts.txt", "utf-8" ,(err ,result)=>{
//     if(err){
//         console.log("error" ,err);
//     }else{
//         console.log(result);
    
//     }
// })

// async - y calback expated krta h 

// fs.appendFileSync("./test.txt" , new Date().getDate().toLocaleString())
// fs.appendFileSync("./test.txt" , `${Date.now()}hy rekha\n`)

// fs.cpSync("./test.txt" ,"copy.txt") - copy file 

// fs.unlinkSync("./copy.txt") - delete file 

// fs.mkdirSync("new_docs/a/b" ,{recursive:true})






// Sync....( blocking req)
// console.log("1");
// const result = fs.readFileSync("./test.txt" , "utf-8");
// console.log(result);
// console.log("2");

// Async... (non-blocking req)
// console.log("1");
// fs.readFile("./test.txt" , "utf-8",(err ,result)=>{
//     console.log(result);
// });
// console.log("2");
// console.log("3");




