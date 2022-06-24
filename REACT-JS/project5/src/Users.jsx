import React, { useState } from 'react'

import students from "./Students.jsx";
const Users = ({ userdetails }) => {
    const [studentsInfo, setstudentsInfo] = useState([]);

    const receiveDataFromChild = (studentdetails) => {
        setstudentsInfo(studentdetails);
    };
    return (
        <div>
            <students getData={receiveDataFromChild} />
            <p>Student Details From Child</p>
            <ul>
                {studentsInfo.map((Students, i) => {
                    return <li key={i}>{Students}</li>
                })}
            </ul>
        </div>
    );
};
export default Users;



