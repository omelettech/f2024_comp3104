import './App.css';
import React, { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import img1 from "./img/1.png"
import img2 from "./img/2.png"
import img3 from "./img/3.png"
const files = [img1, img2, img3]
 const getImageSource = () => {
        let rand = Math.floor(Math.random() * files.length);
        console.log(rand)
        return files[rand]
    }

const App = () => {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
      student.img = getImageSource()
    setStudents([...students, student]);
  };

  return (
    <div className="App">
      <h1>Student Information System</h1>
      <h5>Developed By: 101400761 || Awsaf Fida Mahmud || DevOps</h5>
      <StudentForm addStudent={addStudent} />
      <StudentList students={students} />
    </div>
  );
};

export default App;
