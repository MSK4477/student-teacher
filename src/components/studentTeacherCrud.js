import { teacherStudentInstance } from "../teacherStudentInstance";



//  STUDENT CRUD
export const createStudent = async (studentData) => {
  const response = await teacherStudentInstance.post("/Students", studentData);
  response;
};
export const getStudents = async () => {
  const response = await teacherStudentInstance.get("/Students");
  return response.data;
};


export const getStudent = async (studentId) => {
  const response = await teacherStudentInstance.get(`/Students/${studentId}`);
  return response.data;
};

export const UpdateStudent = async (studentId, studentData) => {
  const response = await teacherStudentInstance.put(
    `/Students/${studentId}`,
    studentData
  );
  return response.data;
};
 export  const deleteStudent = async (studentId) => {
  const response = await teacherStudentInstance.delete(`/Students/${studentId}`)
  return response.data;
}

// TEACHERS CRUD 

export const createTeacher = async (teacherData) =>{
  const response =  await teacherStudentInstance.put(`/Teachers/${teacherData}`)
  return response
}
export const getTeachers = async () =>{
  const  response = await teacherStudentInstance.get("/teachers");
  return response.data
  }

export const getTeacher = async(teacherId) => {
  const response = await teacherStudentInstance.get(`/teachers/${teacherId}`)
  return response.data
} 
export const UpdateTeacher =  async (teacherId, teacherData) =>{
  const response = await teacherStudentInstance.put(`/teachers/${teacherId}`, teacherData);
  return response.data
}
 export  const deleteTeacher = async (teacherId) => {
  const response = await teacherStudentInstance.delete(`./teachers/${teacherId}`)
  return response.data

}