const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 4000


app.use(express.json())

const db=require("./dataase/DataBase")
const studentcollection = []
const courses = []


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })



app.get('/students', (req, res) => {
    res.send({
        status: "success",
        message: "student fetching data",
        data: studentcollection
            

    })
})

app.get('/courses', (req, res) =>{
    const courses = {
        "course_name": 'webtech',
        "course_ID": "Informaton studies"
    }
    res.send(coursesData)
})

app.post('/students', (req, res) =>{
    studentcollection.push(req.body)
    console.log(studentcollection)
    
    res.send({
    
    student_name: "success",
    student_ID: "student creating successfull",
    data: req.body
            
        
 })
    app.post('/student_courses', (req, res) => {
        courses.push(req.body)
        console.log(courses)

        res.send({
            courses_name: "mathematic",
            courses_ID: "CS204",
            data: req.body
            
        })
    })
    
})


app.listen(port, () => {
    console.log(`Example app listening on port: ${port}`)
  })