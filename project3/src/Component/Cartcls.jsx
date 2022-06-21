import { Component } from "react";
import { Carttablecls } from "./Carttablecls";

export class Cartcls extends Component{
    constructor(props){
        super(props)
        this.state={
            cartcls:[
                {"id":1,"userId":1,"date":"2020-03-02T00:00:02.000Z",},
                {"id":2,"userId":1,"date":"2020-01-02T00:00:02.000Z",},
                {"id":3,"userId":2,"date":"2020-03-01T00:00:02.000Z",},
                {"id":4,"userId":3,"date":"2020-01-01T00:00:02.000Z",},
                {"id":5,"userId":3,"date":"2020-03-01T00:00:02.000Z",},
                {"id":6,"userId":4,"date":"2020-03-01T00:00:02.000Z",},
                {"id":6,"userId":8,"date":"2020-03-01T00:00:02.000Z",},
            ]
        }
    }
    render(){
        return(
            <div>
                <Carttablecls allcartcls={this.state.cartcls}s/>
            </div>
        )
    }
    
}