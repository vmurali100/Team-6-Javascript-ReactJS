import React from 'react';
import Childclas4 from './Childclas4';

class Parentclas4 extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        photos:[]
    };
}
receivephotosfromchild=(photos)=>{
    this.setState({photos})
}
    render() {
        const {receivephotosfromchild}=this;
        const {photos}=this.state;
        return <div>
            <Childclas4 receivephotosfromchild={receivephotosfromchild}/>
            <table border="1">
                <thead>
                    <tr>
                        <th>albumid</th>
                        <th>id</th>
                        <th>title</th>
                    </tr>
                </thead>
                <tbody>
                    {photos.map((ph,i)=>{
                        return <tr key={i}>
                            <td>{ph.albumId}</td>
                            <td>{ph.id}</td>
                            <td>{ph.title}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>;
    }
}


export default Parentclas4;