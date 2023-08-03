// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getStudent } from "../studentTeacherCrud";

const Student = () => {
  const { studentId } = useParams();

  const initialState = {
    Name: "",
    DOB: "",
    Gender: "",
    Class: "",
    Image: "",
  };

  const [data, setData] = useState(initialState);

  const loadStudent = async () => {
    const response = await getStudent(studentId);
    setData(response);
    console.log(response);
  };

  useEffect(() => {
    loadStudent();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="content">
      <div className="details">
      <img src={data.Image} alt="" />
      <h2 style={{ color: "rgb(255, 119, 0)" }}>{data.Name}</h2>
    </div>
    </div>
  );
};

export default Student;
