import { Component } from "react"
import { Childcom2 } from "./Childcom2"

export class Practice2 extends Component{
    constructor(){
        super()
        this.state = {
            // Person: {
            //     firstName: "Mansur",
            //     lastName: "Vali",
            //     email: "amansurvali@gmail.com"
            // }
            mydata:["Mansur", "Naveen", "Santhosh", "SaiKiran", "Sam"]
        }
    }
    render(){
        return (
            <div>
               <Childcom2 allUsers={this.state.mydata}/>
                
            </div>
        )
    }
}