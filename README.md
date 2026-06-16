# Student Management System REST API

## Overview

The Student Management System REST API is a backend application developed using Node.js, Express.js, MongoDB, and Mongoose. It provides a set of RESTful API endpoints to manage student records efficiently.

The application supports CRUD (Create, Read, Update, Delete) operations and stores student information such as name, email, and department in a MongoDB database.

---

## Features

* Create new student records
* Retrieve all student records
* Update existing student details
* Delete student records
* MongoDB database integration
* RESTful API architecture
* JSON-based request and response handling

---

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* Postman
* JavaScript

---

## Project Structure

student-management-backend/

├── models/

│ └── Student.js

├── server.js

├── package.json

├── package-lock.json

├── .env.example

├── .gitignore

└── README.md

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/m-venu-24/student-management-backend.git
cd student-management-backend
```

### Install Dependencies

```bash
npm install
```

### Create Environment Variables

Create a `.env` file and add:

```env
MONGO_URI=mongodb://127.0.0.1:27017/studentdb
PORT=5000
```

### Start MongoDB

Ensure MongoDB is running on your system.

### Run the Application

```bash
node server.js
```

Server will run on:

```text
http://localhost:5000
```

---

## API Endpoints

### Create Student

**POST** `/students`

Sample Request:

```json
{
  "name": "Venugopal",
  "email": "venu@gmail.com",
  "department": "AI & DS"
}
```

---

### Get All Students

**GET** `/students`

---

### Update Student

**PUT** `/students/:id`

Sample Request:

```json
{
  "name": "Venugopal",
  "email": "venugopal@gmail.com",
  "department": "CSE AI & DS"
}
```

---

### Delete Student

**DELETE** `/students/:id`

---

## Testing

All API endpoints were tested successfully using Postman.

Tested Operations:

* Create Student
* Get Students
* Update Student
* Delete Student

---

## Learning Outcomes

* REST API Development using Express.js
* MongoDB Integration with Mongoose
* CRUD Operations Implementation
* API Testing with Postman
* Backend Application Development

---

## Author

**M. Venugopal**

MERN Stack Developer Intern

InternSpark Internship Program
