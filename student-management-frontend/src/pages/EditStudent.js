import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../services/api";

function EditStudent() {
  const location = useLocation();
  const navigate = useNavigate();

  const studentData = location.state;

  const [student, setStudent] = useState({
    name: studentData.name,
    email: studentData.email,
    department: studentData.department
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.put(
        `/students/${studentData._id}`,
        student
      );

      alert("Student Updated Successfully");

      navigate("/");
    } catch (error) {
      alert("Update Failed");
    }
  };

  return (
    <div>
      <h2>Edit Student</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={student.name}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="email"
          name="email"
          value={student.email}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="text"
          name="department"
          value={student.department}
          onChange={handleChange}
          required
        />

        <br /><br />

        <button type="submit">
          Update Student
        </button>
      </form>
    </div>
  );
}

export default EditStudent;