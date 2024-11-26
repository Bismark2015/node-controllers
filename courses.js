const express = require('express')
const router = express.Router();


const studentArray = [];

router.get('/courses', (req, res) =>{
    const courses = [
        {id: 1, name: "John Doe,", email: "jond@example.com"},
        {id: 2, name: "Jane Doe", email: "janed@example.com"},
    ];
    res.json(courses);
});

router.post("/", (req, res) =>{
    studentArray.push(req.body);
    res.json({
        status: "CREATED",
        message: "created successfully.",
        data: req.body,

    });
})
module.exports = router