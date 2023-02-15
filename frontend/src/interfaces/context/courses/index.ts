import { StudentProps } from '../students';

export interface CourseProps {
    title: string,
    description: string,
    duration: number,
}

export interface OptionalCourseProps {
    title?: string,
    description?: string,
    duration?: number,
}

export interface CourseContextProps {
    courses: CourseProps[],
    courseStudents: StudentProps[],
    getAllCourses: () => void,
    createCourse: (data: CourseProps) => void,
    updateCourse: (data: OptionalCourseProps, course_id: number) => void,
    deleteCourse: (course_id: number) => void,
    listCourseStudents: (course_id: number) => void,
}