import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/dashboard",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setMessage(res.data.message);
      } catch (err) {
        setMessage("Access Denied");
      }
    };

    fetchDashboard();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <h3>{message}</h3>
    </div>
  );
}

export default Dashboard;