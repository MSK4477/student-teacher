// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { getStudent, UpdateStudent } from "../studentTeacherCrud"
import { useSearchParams, useNavigate } from "react-router-dom";

const EditStudent = () => {
  const initialState = {
    Name: '',
    DOB: '',
    Gender: '',
    Class: '',
    Image: '',
  }

  const [params] = useSearchParams();

  const [formData, setFormData] = useState(initialState);

  const navigate = useNavigate();

  const loadStudent = async () => {
    const response = await getStudent(params.get('id'));
    setFormData(response);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await UpdateStudent(params.get('id'), formData);
    setFormData(initialState)
    navigate('/student/'+ params.get('id'));
  };

  useEffect(() => {
    loadStudent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="content">
    <form  onSubmit={handleSubmit}>
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

      <label htmlFor="name">Class</label>
      <input
        type="text"
        id="Class"
        name="Class"
        value={formData.Class}
        onChange={handleChange}
        placeholder="class"
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
}

export default EditStudent;