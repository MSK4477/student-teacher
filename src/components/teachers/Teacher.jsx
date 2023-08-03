// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getTeacher} from "../studentTeacherCrud";

const Teacher = () => {
  const { teacherId } = useParams();

  const initialState = {
    Name: "",
    DOB: "",
    Gender: "",
    Class: "",
    Image: "",
  };

  const [data, setData] = useState(initialState);

const loadTeacher = async () => {
const response = await getTeacher(teacherId)
setData(response)
}
useEffect(() =>{
loadTeacher()
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])
  return (
    <div className="content">
    <div className="details">
    <img src={data.Image} alt="" />
    <h2 style={{ color: "rgb(255, 119, 0)" }}>{data.Name}</h2>
  </div>
  </div>
  );
};

export default Teacher;
