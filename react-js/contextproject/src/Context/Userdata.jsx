import React from 'react'
import { DataConsumer, UserConsumer } from './Datacontext'

const Userdata=()=>{
    return(
        <div>
            <p>userdata</p>
            <DataConsumer>
            {(value)=>{
                    return <ul>
                        {value.map((u,i)=>{
                             return <li key={i}>{u.date}</li>
                             
                            })
                        }
                    </ul>
                }}
            </DataConsumer>
               
            
        </div>
    )
}
export default Userdata