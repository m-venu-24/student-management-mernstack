import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "15px", background: "#f0f0f0" }}>
      <h2>Student Management System</h2>

      <Link to="/">Home</Link> |{" "}
      <Link to="/add">Add Student</Link>
    </nav>
  );
}

export default Navbar;