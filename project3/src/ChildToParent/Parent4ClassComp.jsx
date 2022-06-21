import { Component } from "react";
import { Child4ClassComp } from "./Child4ClassComp";

export class Parent4ClassComp extends Component{
    constructor(props){
        super(props)
        this.state={
            factory:"",
            labour:{},
            wages:[],
        }
    }
    receivefactory=(fac)=>{
        this.setState({factory:fac})
    };
    receivelabour=(lab)=>{
        this.setState({labour:lab})
    };
    receivewages=(wages)=>{
        this.setState({wages})
    };
    render(){
        const {receivefactory,receivelabour,receivewages}=this;
        const {factory,labour,wages}=this.state;
        return(
            <div>
                <Child4ClassComp receivefactory={receivefactory}
                receivelabour={receivelabour}
                receivewages={receivewages}

                />
                <hr />
                {factory && <h1>factory name from child:{factory}</h1>}
                {Object.keys(labour).length>0 && <h2>labour name from child:{labour.fname}-{labour.lname}</h2>}
                
                <ol>
                    {wages.map((nam)=>{
                        return <li>{nam.fname}</li>
                    })}
                </ol>
            </div>
        )
    }
}