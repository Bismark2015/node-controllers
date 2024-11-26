const createStudent = (req, res) => {
    const student = req.body;
    student[0].age = student.age
    console.log(studentArray)
    res.json({
        "status": "updated",
        "message": "updating succesfull"
                
    })
}


const infostudent = (req, res) => {
    const courses = {
        "course_name": 'Infs101',
        "course_ID": "Informaton studies"
    }
    module.export = {
        infostudent,
        CreateStudent
     }
}