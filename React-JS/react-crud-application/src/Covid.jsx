import React, { useEffect,useState } from 'react'
import axios from 'axios'
export const Covid = () => {
    const [coviddetails, setcoviddetails] = useState([])
    const getallcovid=()=>{
        axios.get("https://data.covid19india.org/state_district_wise.json").then((response)=>{
            console.log(response.data)
            setcoviddetails(response.data)
        })
    }
    const createcovid=()=>{}
    const editcovid=()=>{}
    const deletecovid=()=>{}
    const updatecovid=()=>{}
    const clearForm=()=>{}

    useEffect(()=>{
        getallcovid()
    },[])
    return (
        <div className='container'>
            <table className="table">
                <thead>
                    <tr>
                        <th >address</th>
                        <th >datasource</th>
                        <th >placename</th>
                        <th >type</th>
                    </tr>
                </thead>
                <tbody>
                  
                </tbody>
            </table>
        </div>
    )
}
