// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { getTeachers, deleteTeacher} from "../studentTeacherCrud";
import { Link } from "react-router-dom";
const Teachers = () => {
  const [data, setData] = useState([]);

  const loadTeachers = async () => {
    const response = await getTeachers();
    setData(response);
    console.log(data)
  };
 
  
  const removeTeachers = async (teacherId) => {
   await deleteTeacher(teacherId)
   const newData = data.filter(({id}) => id !== teacherId)
   setData(newData);
  }


  useEffect(() => {
    loadTeachers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="content">
       {data.map((Teacher) => (
        <div  className="details" key={Teacher.Name}>
             <img src={Teacher.Image} alt="Teacher" />
             <Link to={"/student/"+Teacher.id}  >

             <div style={{color:"#fd4e03",fontWeight:"bold"}}><span style={{color:"black",fontWeight:"bolder"}}>Name:</span> &nbsp; {Teacher.Name}</div>
        <div style={{color:"#fd4e03",fontWeight:"bold"}}><span style={{color:"black",fontWeight:"bolder"}}>D.O.B:</span> &nbsp; {Teacher.DOB}</div>
        <div style={{color:"#fd4e03",fontWeight:"bold"}}><span style={{color:"black",fontWeight:"bolder"}}>Class:</span> &nbsp; {Teacher.Subject}</div>
        <div style={{color:"#fd4e03",fontWeight:"bold"}}><span style={{color:"black",fontWeight:"bolder"}}>Gender:</span> &nbsp; {Teacher.Gender}</div>
        </Link>
       
        <Link to={`/editTeacher?id=${Teacher.id}`}><i className="fa-solid fa-pen-to-square" style={{color: "#ccc",  position:"relative",left:"90px", bottom:"230px", fontSize:"23px"}}></i></Link> <br />
        <i className="fa-solid fa-trash-can"
        onClick={() =>
          {alert(`are you sure you want to delete the Teacher?  ${Teacher.Name}`);
          removeTeachers(Teacher.id)}}
         style={{color: '#ccc', position:"relative", bottom:"200px",left:"90px", fontSize:"23px", cursor:"pointer"}}></i>
        </div>
         
       
      ))}
      
    </div>
  );
};

export default Teachers;
