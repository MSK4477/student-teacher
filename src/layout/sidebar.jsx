// eslint-disable-next-line no-unused-vars
import React from "react";
    import { Link, useLocation  } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation()
  return (
    <aside>
      <ul className="sideBarItems">
        <li>
          <Link to="/student" className={location.pathname === "/student" ? "active" : ""}>Students</Link>
        </li>
        <li>
          <Link to="/teacher"  className={location.pathname === "/teacher" ? "active" : ""}>Teachers</Link>
        </li>
        <li>
          <Link to="/addStudent"  className={location.pathname === "/addStudent" ? "active" : ""}>Create Students</Link>
        </li>
        <li>
          <Link to="/addTeacher"  className={location.pathname === "/addTeacher" ? "active" : ""}>Create Teachers</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
