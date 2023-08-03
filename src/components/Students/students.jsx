// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { getStudents, deleteStudent } from "../studentTeacherCrud";
import { Link } from "react-router-dom";
const Students = () => {
  const [data, setData] = useState([]);

  const loadStudents = async () => {
    const response = await getStudents();
    setData(response);
  };
  const removeStudent = async (studentId) => {
    await deleteStudent(studentId);
      const newStudent = data.filter(({id}) => id !== studentId)
      setData(newStudent)
  }


  useEffect(() => {
    loadStudents();
  }, []);

  return (
    <div className="content">
 
      {data.map((std) => (
        <div  className="details" key={std.Name}>
             <img src={std.Image} alt="std" />
             <Link to={"/student/"+std.id}  >

        <div style={{color:"#fd4e03",fontWeight:"bold"}}><span style={{color:"black",fontWeight:"bolder"}}>Name:</span> &nbsp; {std.Name}</div>
        <div style={{color:"#fd4e03",fontWeight:"bold"}}><span style={{color:"black",fontWeight:"bolder"}}>D.O.B:</span> &nbsp; {std.DOB}</div>
        <div style={{color:"#fd4e03",fontWeight:"bold"}}><span style={{color:"black",fontWeight:"bolder"}}>Class:</span> &nbsp; {std.Class}</div>
        <div style={{color:"#fd4e03",fontWeight:"bold"}}><span style={{color:"black",fontWeight:"bolder"}}>Gender:</span> &nbsp; {std.Gender}</div>
        </Link>
       
        <Link to={`/editStudent?id=${std.id}`}><i className="fa-solid fa-pen-to-square" style={{color: "#ccc",  position:"relative",left:"60px", bottom:"230px", fontSize:"23px"}}></i></Link> <br />
        <i className="fa-solid fa-trash-can"
        onClick={() =>
          {alert(`are you sure you want to delete the Student?  ${std.Name}`);
          removeStudent(std.id)}}
         style={{color: '#ccc', position:"relative", bottom:"200px",left:"60px", fontSize:"23px"}}></i>
        </div>
         
       
      ))}
      
    </div>
  );
};

export default Students;
