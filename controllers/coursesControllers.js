const express = require('express');
const router = express.Router();


let courses = [];

// Create a course
router.post('/', (req, res) => {
    const newCourse = req.body;
    courses.push(newCourse);
    res.send({ message: "Course created successfully", data: newCourse });
});

// Read all courses
router.get('/', (req, res) => {
    res.send({ message: "Courses fetched successfully", data: courses });
});

// Update a course
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const updatedCourse = req.body;
    courses = courses.map(course => course.id === parseInt(id) ? { ...course, ...updatedCourse } : course);
    res.send({ message: "Course updated successfully", data: updatedCourse });
});


router.delete('/:id', (req, res) => {
    const { id } = req.params;
    courses = courses.filter(course => course.id !== parseInt(id));
    res.send({ message: "Course deleted successfully" });
});

module.exports = router;
