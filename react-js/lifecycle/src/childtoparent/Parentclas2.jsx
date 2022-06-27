import React from 'react';
import Childclas2 from './Childclas2';

class Parentclas2 extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        comments:[]
    };
}
receivedatafromchild=(comments)=>{
    this.setState({comments})
}

    render() {
        const {receivedatafromchild}=this;
        const {comments}=this.state;
        return <div>
            <Childclas2 receivedatafromchild={receivedatafromchild}/>
            <table border="1">
                <thead>
                    <tr>
                        <th>postid</th>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>body</th>
                    </tr>
                </thead>
                <tbody>
                    {comments.map((co,i)=>{
                        return <tr key={i}>
                            <td>{co.postId}</td>
                            <td>{co.id}</td>
                            <td>{co.name}</td>
                            <td>{co.email}</td>
                            <td>{co.body}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>;
    }
}



export default Parentclas2;