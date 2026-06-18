const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
dotenv.config();
// console.log(process.env.PORT);

const app = express();
app.use(express.json())

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("mongodb connected");
    } catch (error) {
        console.log("mongodb error", error);
    }
}
dbConnect()

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    phoneNo: {
        type: Number
    },
    

});

const Student = mongoose.model("student", studentSchema)

// create student api 
app.post("/createStudent", async (req, res) => {
    try {
        const { name, email, phoneNo } = req.body;

        if (!name || !email || !phoneNo) {
            res.status(404).json({ message: "all feild are require" })
        }
        const student = await Student.create({
            name, email, phoneNo
        });
        // console.log(student);
        res.status(201).json({
            message: "create student successFully",
            data: student
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})
// get All student
app.get("/getAllStudent", async (req, res) => {
    try {
        const users = await Student.find();

        res.status(200).json({
            message: "Get All Students",
            data: users
        })
    } catch (error) {
        console.log("getAllStudent", error);
        res.status(500).json({ message: error.message })
    }
})
// get student by id  api 
app.get("/getStudent/:id", async (req, res) => {
    try {
        const userId = req.params.id
        // console.log("userId",userId);

        const users = await Student.findById(userId)
        // console.log("users",users);
        res.status(200).json({
            message: "get student by id",
            data: users
        })
    } catch (error) {
        console.log("getStudent", error.message);
        res.status(500).json({ message: error.message })
    }
})

// app.get("/getStudent", async (req, res) => {
//     try {
//         const userId = req.query.id;
//         const users = await Student.findById(userId)
//         res.status(200).json({
//             message:"get student by id",
//             data:users
//         })

//     } catch (error) {
//         console.log("getStudent", error.message);
//         res.status(500).json({ message: error.message })
//     }
// })

app.put("/updateStudent/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const updateStudent = await Student.findByIdAndUpdate(userId, req.body, { new: true })

        // console.log(updateStudent);

        res.status(200).json({
            message: "updated student",
            data: updateStudent
        })

    } catch (error) {
        console.log("updateStudent", error.message);
        res.status(500).json({ message: error.message })
    }
})

app.delete("/deleteStudent/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await Student.findByIdAndDelete(userId)

        res.status(200).json({
            message: "deleted student successFully",
            data: user
        })
    } catch (error) {
        console.log("deleteStudent", error.message);
        res.status(500).json({ message: error.message })
    }
})



app.listen(process.env.PORT, () => {
    console.log(`server start from ${process.env.PORT}`);
});