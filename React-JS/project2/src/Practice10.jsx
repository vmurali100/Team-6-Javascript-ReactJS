import { Component } from "react";

export class Practice10 extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div className="Am">
                <h1>Andhrapradesh</h1>
                <img src="https://newsmeter.in/wp-content/uploads/2019/12/andhrapradesh-district-map.jpg" alt="" />
                <ul><span>District's Names:</span>
                    <li>Kurnool</li>
                    <li>Anantapur</li>
                    <li>Chittoor</li>
                    <li>Kadapa</li>
                    <li>Prakasam</li>
                    <li>Guntur</li>
                    <li>Vijayanagaram</li>
                    <li>Srikakulam</li>
                    <li>Nellore</li>
                    <li>Krishna</li>
                </ul>
            </div>
        );
    }
}