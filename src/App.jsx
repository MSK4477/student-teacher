// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import AddStudent from "./components/Students/createStudent"
import Students from "./components/Students/students"
import Student from "./components/Students/student"
import EditStudent from "./components/Students/editStudent"
//TEACHERS CRUD
import AddTeacher from "./components/teachers/createTeacher"
import Teachers from './components/teachers/Teachers'
import Teacher from './components/teachers/Teacher'
import EditTeacher from "./components/teachers/editTeacher"


//STYLES// 
import "./styles/app.scss"
import "./styles/colors.scss"
import "./styles/header.scss"
import "./styles/sideBar.scss"
import "./styles/home.scss"
import "./styles/content.scss"
///LAYOUTS///
import Header from './layout/header'
import Sidebar from './layout/sidebar'
import Home from './layout/home'
function App() {

  return (
   <>
   <Router>
      <Header />
      <Sidebar />
    <Routes>
      <Route path='/' element={<Home />} />
<Route path='/addStudent' element={<AddStudent />} />
<Route  path='/student' element={<Students />} />
<Route  path='/student/:studentId' element={<Student />} />
<Route path="/editStudent" element={<EditStudent />} />

{/* //***TEACHERS***\\ */}
<Route path='/addTeacher' element={<AddTeacher />}/>
<Route path='/Teacher' element={<Teachers />}/>
<Route  path='/Teacher/:teacherId' element={<Teacher />} />
<Route path="/editTeacher" element={<EditTeacher />} />

    </Routes>
   </Router>
   </>
  )
}

export default App
