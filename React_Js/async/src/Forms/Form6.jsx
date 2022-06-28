import React from 'react'
import { useState } from 'react'

const Form6 = () => {
    const [regist, setregist] = useState({
        university: "", institute: "", branch: "", degree: "", average: "", experience: "", yourweb: ""
    })
    const handlechange = (event) => {
        var variablename = event.target.name
        var newregist = { ...regist }
        newregist[variablename] = event.target.value
        setregist(newregist)
    }
    const submit = () => {
        console.log(regist)
    }

    return (
        <div>
            <label htmlFor="">University</label>
            <input type="text" name='university' value={regist.university} onChange={(event) => { handlechange(event) }} />
            <br />
            <label htmlFor="">Institue</label>
            <input type="text" name='institute' value={regist.institute} onChange={(event) => { handlechange(event) }} />
            <br />
            <label htmlFor="">Branch</label>
            <input type="text" name='branch' value={regist.branch} onChange={(event) => { handlechange(event) }} />
            <select>
                <option>----select----</option>
                <option>BSC</option>
                <option>BCA</option>
                <option>BCOM</option>
            </select>
            <br />
            <label htmlFor="">Degree</label>
            <input type="text" name='degree' value={regist.degree} onChange={(event) => { handlechange(event) }} />
            <br />
            <label htmlFor="">Average</label>
            <input type="text" name='average' value={regist.average} onChange={(event) => { handlechange(event) }} />
            <br />
            <label htmlFor="">Experience</label>
            <input type="text" name='experience' value={regist.experience} onChange={(event) => { handlechange(event) }} />
            <br />
            <label htmlFor="">Your Website or Blog</label>
            <input type="text" name='yourweb' value={regist.yourweb} onChange={(event) => { handlechange(event) }} />
            <br />
            <button onClick={submit}>SUBMIT</button>
        </div>
    )
}

export default Form6
