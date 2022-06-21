import { Component } from "react";

export class Carttablecls extends Component{
    constructor(props){
        super(props)
        this.state={
            carttablecls:false,
        }
    }
    handlecarttablecls=()=>{
             this.setState({carttablecls:true})
    }
    render(){
        return(
            <div>
                <button onClick={this.handlecarttablecls}>carttablecls</button>
                {this.state.carttablecls && <table border="1">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>userId</th>
                            <th>Date</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.allcartcls.map((ca)=>{
                            return <tr>
                                <td>{ca.id}</td>
                                <td>{ca.userId}</td>
                                <td>{ca.date}</td>
                            </tr>
                        })}
                    </tbody>

                </table> }
            </div>
        )
    }
}