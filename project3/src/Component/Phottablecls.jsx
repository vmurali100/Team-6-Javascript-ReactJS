import { Component } from "react";

export class Phottablecls extends Component{
    constructor(props){
        super(props)
        this.state={
            phototable:false,
        }
    }
    handlephototable=()=>{
        this.setState({phototable:true})
    }
    render(){
        return(
            <div>
                <button onClick={this.handlephototable}>phototable</button>
                {this.state.phototable && <table border="1">
                    <thead>
                        <tr>
                            <th>Albumid</th>
                            <th>id</th>
                            <th>Title</th>
                            <th>Url</th>
                            <th>Thumbnailurl</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.allphotcls.map((potc)=>{
                            return <tr>
                                <td>{potc.albumId}</td>
                                <td>{potc.id}</td>
                                <td>{potc.url}</td>
                                <td>{potc.thumbnailUrl}</td>
                            </tr>
                        })}
                    </tbody>
                    </table>}
            </div>
        )
    }
}