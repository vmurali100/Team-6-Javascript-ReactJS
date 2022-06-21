import { Component } from "react";

export class Albumtablecls extends Component{
    constructor(props){
        super(props)
        this.state={
            albumtablecls:false,
        }
    }
    handleAlbumtablecls=()=>{
        this.setState({albumtablecls:true})
    }
    render(){
        return(
            <div>
                <button onClick={this.handleAlbumtablecls}>albumtablecls</button>
                {this.state.albumtablecls && <table border="1">
                    <thead>
                        <tr>
                            <td>Userid</td>
                            <td>Id</td>
                            <td>Title</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.allalbumcls.map((albm)=>{
                            return <tr>
                                <td>{albm.userId}</td>
                                <td>{albm.id}</td>
                                <td>{albm.title}</td>
                            </tr>
                        })}
                    </tbody>
                    </table>}
            </div>
        )
    }
}