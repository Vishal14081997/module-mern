const express = require("express")

const app = express();

// get
app.get("/student",(req,res)=>{
    console.log("hello api")
    res.status(200).send("student data get successfully")
})

//post
app.post("/",(req,res)=>{
    console.log(req.headers);
    console.log("hello post");
    res.send("hello post api")
    
})

//put 
app.put("/" ,(req,res)=>{
    console.log("hello put");
    res.send("hello put api")
})

//delete
app.delete("/" , (req ,res)=>{
    console.log("hello delete");
    res.send("hello delete api")
})

//patch


app.listen(4000);


// http method - client server - action perform 
// 1 ) GET METHOD -> get use for data get from db
// 2) POST METHOD -> insert data in db
// 3) PUT METHOD  -> update data in db
// 4) DELETE METHOD -> delete use for delete data from db

//crud 
// c means -> create -> we are using post method
// r means -> read -> we are using get method
// u -> update  -> we are using update method 
// d -> delete  -> we are using delete method

// patch - single 
// put - multi


// status code 
// 200 - success
// 201- created
// 400 -bad requiest
// 401 - unauthorized
// 404 - not found
// 500 - server error

// Q create crud operation for a student ?

// positive and negative => true 
// zero => false

// mysql - ORM (object relational mapping)

// without ORM
// select * from students

// with ORM 
// students.find()

// mongodb - ODM ( object document mapping)

// [
//     {
//         name:"vishal",
//         age:20,
//     },
//     {
//       name:"aman",
//       age:25   
//     }
// ]
// students.find()


