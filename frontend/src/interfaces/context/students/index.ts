export interface StudentProps {
    name: string,
    father: string,
    mother: string,
    phone: string,
    age: number,
    serie_year: string
}

export interface StudentsContextProps {
    students: StudentProps[],
    getAllStudents: () => void,
}