const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./models/User");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Student = require("./models/Student");
const JWT_SECRET = "secretkey";
const app = express();


app.use(cors());
app.use(express.json());


mongoose
  .connect("mongodb://127.0.0.1:27017/studentdb")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));


app.get("/", (req, res) => {
  res.send("Student Management API Running");
});


app.post("/students", async (req, res) => {
  const student = await Student.create(req.body);
  res.json(student);
});


app.get("/students", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});


app.put("/students/:id", async (req, res) => {
  const student = await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(student);
});


app.delete("/students/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: "Student deleted" });
});
 
 const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "Access Denied"
    });
  }

  const token = authHeader.split(" ")[1];

  try {
   const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({
      message: "Invalid Token"
    });
  }
};

app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    console.log("Email received:", email);
    console.log("Existing User:", existingUser);

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      password: hashedPassword
    });

    res.json({
      message: "User Registered"
    });

  } catch (err) {
  console.log("Signup Error:", err);

  res.status(500).json({
    message: err.message
  });
}
});


app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user =
    await User.findOne({ email });

  if (!user) {
    return res.status(400).json({
      message: "User not found"
    });
  }

  const validPassword =
    await bcrypt.compare(
      password,
      user.password
    );

  if (!validPassword) {
    return res.status(400).json({
      message: "Invalid Password"
    });
  }

  const token = jwt.sign(
  { id: user._id },
  JWT_SECRET,
  { expiresIn: "1h" }
);

  res.json({ token });
});

app.get(
  "/dashboard",
  verifyToken,
  (req, res) => {
    res.json({
      message:
        "Welcome to Protected Dashboard"
    });
  }
);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});