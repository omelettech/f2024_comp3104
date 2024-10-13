import React from "react";



const StudentCard = ({student}) => {

    return (
        <div className="student-card">
            <div style={{display: "flex", flexDirection: "row"}}>
                <img src={student.img} style={{maxWidth: 200, maxHeight: 200}} alt={"Random images"}/>
                <div style={{alignContent:"center"}}>
                    <h3>{student.name}</h3>
                    <p>Age: {student.age}</p>
                    <p>Major: {student.major}</p>
                </div>

            </div>
        </div>
    );
};

export default StudentCard;
