import { Component } from "react";

export default class PhotosChild4 extends Component{
    constructor(props){
        super(props)

        this.state = {
            showPhotos: false
        }
    }
    handlshowPhotos = () =>{
        this.setState({showPhotos: true})
    }
    render(){
        return(
            <div>
                <button onClick={this.handlshowPhotos}>Display Photos</button>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>AlbumId</th>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Url</th>
                            <th>ThumbnailUrl</th>
                        </tr>
                    </thead>
                    {this.state.showPhotos && <tbody>
                        {this.props.allPhotodetails.map((user,i)=>{
                            return <tr key={i}>
                                <td>{user.albumId}</td>
                                <td>{user.id}</td>
                                <td>{user.title}</td>
                                <td>{user.url}</td>
                                <td>{user.thumbnailUrl}</td>
                            </tr>
                        })}
                        </tbody>}
                </table>
            </div>
        )
    }
}