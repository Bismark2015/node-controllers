const express = require("express");
const router = express.Router();

const studentController = require('../controllers/students.controller/coursesControllers')
const middleWares = require('../middlewares/auth.middleware')

router.post("/students", middleWares.auth, studentController.createStudents);
router.get('/students', studentController.studentInfo)


module.exports = router;
