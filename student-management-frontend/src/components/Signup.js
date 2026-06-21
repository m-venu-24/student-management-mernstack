import { useState } from "react";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/signup",
        {
          name,
          email,
          password,
        }
      );

      alert(res.data.message);
    } catch (err) {
      alert(
        err.response?.data?.message ||
        "Signup Failed"
      );
    }
  };

  return (
    <div>
      <h2>Signup</h2>

      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <br /><br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <br /><br />

        <button type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;