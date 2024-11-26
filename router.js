const express = require('express')
const router = express.Router();

const infostudent=require()

const studentController=require('./student.controllers/router/app')
const studentArray = [];

router.get('/students', (req, res) =>{
    const students = [
        {id: 1, name: "John Doe,", email: "jond@example.com"},
        {id: 2, name: "Jane Doe", email: "janed@example.com"},
    ];
    res.json(students);
});

router.post("/students", (req, res) =>{
    studentArray.push(req.body);
    res.json({
        status: "CREATED",
        message: "created successfully.",
        data: req.body,

    });


    router.patch("/students,/ index", (req, res) => {
        const student = req.body;
        student[0].age = student.age
        console.log(studentArray)
        res.json({
            "status": "updated",
            "message": "updating succesfull"
                
        })
    })
})
module.exports = router