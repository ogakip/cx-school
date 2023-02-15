import { CourseProps } from './../courses/index';

export interface StudentProps {
    name: string,
    father: string,
    mother: string,
    phone: string,
    age: number,
    serie_year: string
}

export interface OptionalStudentProps {
    name?: string,
    father?: string,
    mother?: string,
    phone?: string,
    age?: number,
    serie_year?: string
}

export interface StudentsContextProps {
    students: StudentProps[],
    studentCourses: CourseProps[],
    selectedStudent: StudentProps,
    getAllStudents: () => void,
    createStudent: (data: StudentProps) => void,
    editStudent: (data: OptionalStudentProps, student_id: number) => void,
    deleteStudent: (student_id: number) => void,
    getStudentCourses: (student_id: number) => void,
    selectCurrentStudent: (student_id: number) => void,
    addStudentCourse: (student_id: number, course_id: number) => void,
}