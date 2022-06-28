import React, { useState } from 'react'

export const Form6 = () => {
    const [student, setstudent] = useState({
        University: "",
        Institute: "",
        Branch: "",
        Degree: "",
        Average: "",
        experience: "",
        website: ""
    })
    const handleChange = (event) => {
        var vairableName = event.target.name
        var newstudent = { ...student }
        newstudent[vairableName] = event.target.value
        setstudent(newstudent)
    }
   const displaystudents=()=>{
    console.log(student)
   }
    return (
        <div>
            <h2>Registration Details</h2>
            <label htmlFor="University">University</label>
            <input type="text" name="University" value={student.University} onChange={(event) => { handleChange(event) }} /><br />

            <label htmlFor="Institute">Institute</label>
            <input type="text" name="Institute" value={student.Institute} onChange={(event) => { handleChange(event) }} /><br />

            <label htmlFor="Branch">Branch</label>
            <input type="text" name="Branch" value={student.Branch} onChange={(event) => { handleChange(event) }} /><br />

            <label htmlFor="Degree">Degree</label>
            <input type="text" name="Degree" value={student.Degree} onChange={(event) => { handleChange(event) }} /><br />

            <label htmlFor="Average">Average</label>
            <input type="text" name="Average" value={student.Average} onChange={(event) => { handleChange(event) }} /><br />
            <label htmlFor="experience">experience</label>
            <input type="text" name="experience" value={student.experience} onChange={(event) => { handleChange(event) }} /><br />
           
            <label htmlFor="website">website</label>
            <input type="text" name="website" value={student.website} onChange={(event) => { handleChange(event) }} /><br />

            <button onClick={displaystudents} >submit</button>
        </div>
    )
}
