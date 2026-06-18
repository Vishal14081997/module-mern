// const http = require("http")

// const app = http.createServer((req,res)=>{
// console.log(req.headers);
// console.log("new req received");
// res.end("hello sever")
// })

// app.listen(8000,()=>{
//     console.log("server start"); 
// })



const http = require("http")
const fs = require("fs")

const app = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New req received\n`;
    fs.appendFile("log.txt", log, (err, data) => {
        // res.end("hello server")
        switch (req.url) {
            case "/": res.end("home page");
                break
            case "/about": res.end("i am vishal singh")
                break
            default:
                res.end("404 not found")
        }
    })
})

app.listen(8000, () => {
    console.log("server start");
})