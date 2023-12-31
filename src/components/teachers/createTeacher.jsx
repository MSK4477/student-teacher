// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { createTeacher } from "../studentTeacherCrud";
import {  useNavigate } from "react-router-dom";

const AddTeacher = () => {
  const initialState = {
    Name: "",
    DOB: "",
    Gender: "",
    Subject: "",
    Image: "",
  };
 const navigate = useNavigate()
  const [formData, setFormData] = useState(initialState)

  const handleChange =(e) =>{
   const {name, value} = e.target
setFormData({
  ...formData,
  [name] : value,

})
  }

  const handleSubmit = (e) =>{
e.preventDefault()
createTeacher(formData)
setFormData(initialState)
navigate("/teacher")
  }


  return (
    <div className="content">
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="Name"
        name="Name"
        placeholder="name"
        value={formData.Name}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="dob">D.O.B</label>
      <input
        type="text"
        id="DOB"
        name="DOB"
        placeholder="D.O.B"
        value={formData.DOB}
        onChange={handleChange}
      />
      <br />

      <label htmlFor="gender">Gender</label>
      <input
        type="text"
        id="Gender"
        name="Gender"
        value={formData.Gender}
        onChange={handleChange}
        placeholder="gender"
      />
      <br />

      <label htmlFor="name">Subject</label>
      <input
        type="text"
        id="Subject"
        name="Subject"
        value={formData.Subject}
        onChange={handleChange}
        placeholder="Subject"
      />
      <br />
      <label htmlFor="Image">Image URL</label>
      <input
        type="text"
        id="Image"
        name="Image"
        value={formData.Image}
        onChange={handleChange} 
        placeholder="URL"
      />
      <br />

      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default AddTeacher;
