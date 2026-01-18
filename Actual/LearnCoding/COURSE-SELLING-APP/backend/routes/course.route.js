import express from 'express'
import { createCoure, updateCourse, deleteCourse, getCourses, courseDetails } from '../controllers/course.controller.js';

const router=express.Router();

router.post('/create',createCoure)
router.put('/update/:courseId',updateCourse)
router.delete('/delete/:courseId',deleteCourse)
router.get('/courses',getCourses)
router.get('/:courseId',courseDetails)
export default router;