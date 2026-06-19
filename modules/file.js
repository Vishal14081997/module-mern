const fs = require("fs")
const os = require("os")

// Sync....
// fs.writeFileSync("./test.txt", "hello world");

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

// fs.mkdirSync("page")
// fs.rmdirSync("page")



// os  -> apki machin jis pr bhi kam krti h us ki information nikalne m kam aata h

// console.log(os.platform()); // -> windows ka version
// console.log(os.arch());
// console.log(os.hostname());
// console.log(os.homedir());
// console.log(os.freemem());

const EventEmitter = require("events")  // constructor
const event = new EventEmitter();

// event.on("data" ,()=>{
//     console.log("this is data event"); 
// })
// event.on("data" ,()=>{
//     console.log("this is data 2nd event"); 
// })
// event.emit("data")

// ....................... 

// event.once("data" ,()=>{
//     console.log("this is data event"); 
// })
// event.emit("data")
// event.emit("data")


// ....................... 

// const handlerfn = () => {
//     console.log("this is data event");
// }
// event.on("data", handlerfn)

// event.emit("data")
// event.emit("data")
// event.emit("data")
// event.off("data" ,handlerfn)
// event.emit("data")


const path = require("path")

// let dirName = path.dirname("D:/mern630/module-mern")
// console.log(dirName);

// let baseName = path.basename("D:/mern630/module-mern")
// console.log(baseName);

// let newPath = path.join("folder" , "images" ,"page")
// console.log(newPath);

// let newResolvedPath = path.resolve("test.txt")
// console.log(newResolvedPath);


const http = require("http");

// api - application programming interface
// http - Hypertext Transfer Protocol

const server = http.createServer((req,res)=>{
    console.log("hello vishal");
    res.end("hello grras")
});
server.listen(5000 ,()=>{
    console.log("server is running on port 5000");
});
// understud





























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




