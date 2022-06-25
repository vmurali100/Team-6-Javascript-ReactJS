import { Component } from "react";
import axios from 'axios'
import Albumtable from "./Albumtable";
export default class Albumclass extends Component{
    constructor(props){
        super(props)
        this.state={
            album:[]
        }
    }
    componentDidMount(){
        const url="https://jsonplaceholder.typicode.com/albums"
        axios.get(url).then((Response)=>{this.setState({album:Response.data})})
    }
    render(){
return(
    <div>
        <Albumtable alb={this.state.album}/>
    </div>
)
    }
}