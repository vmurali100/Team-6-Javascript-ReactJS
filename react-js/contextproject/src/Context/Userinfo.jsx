import React from 'react'
import { InfoConsumer } from './Infocontext'

const Userinfo=()=>{
    return(
        <div>
            <p>userinfo</p>
            <hr />
            <InfoConsumer>
            {(value)=>{
              return   <ul>
                    {value.map((inf,i)=>{
                       return <li key={i}>{inf.email}</li>
                    })}
                </ul>
            }}
            </InfoConsumer>
            
        </div>
    )
}
export default Userinfo