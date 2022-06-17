import { useState } from "react"

export const Function4 =()=>{
    const [company,setcompany]=useState("Infosis")
    const [companydetails,setcompanydetails]=useState({
        location:"BGR",
        years:"fifty years",
        employees:"five hundred"
    })
    const [companynames,setcompanynames]=useState(["TCS","Wipro","HCL","IBM"])
    return <div>
        <button onClick={()=>{setcompany("Accenture")}}>change company</button>
        <button onClick={()=>{setcompanydetails({ location:"chennai",years:"sisty years",employees:"thousand"})}}>change details</button>
        <button onClick={()=>{setcompanynames(["CTS","Amazon","Flipkart","Google","Accenture"])}}>change names</button>

        <h2>My company is: {company}</h2>

        <p>{companydetails.location} - {companydetails.years} - {companydetails.employees}</p>

        <ul>
            {companynames.map((user,i)=>{
                return <li key={i}>{user}</li>
            })}
        </ul>
    </div>
}