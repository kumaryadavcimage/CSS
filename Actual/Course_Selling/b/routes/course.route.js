import express from 'express'
import { createCourse, updateCourse, deleteCourse, getCourses, courseDetails, buyCourses } from '../controllers/course.controller.js'

const router=express.Router()

router.post('/create',createCourse);
router.put('/update/:courseId',updateCourse);
router.delete('/delete/:courseId',deleteCourse);
router.get("/courses",getCourses);
router.get("/:courseId", courseDetails);

router.post("/buy/:courseId",buyCourses)

export default router;