import React from 'react';
import Childclas3 from './Childclas3';

class Parentclas3 extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        cart:[]
    };
}
receivecartfromchild=(cart)=>{
    this.setState({cart})
}

    render() {
        const {receivecartfromchild}=this;
        const {cart}=this.state;
        return <div>
            <Childclas3 receivecartfromchild={receivecartfromchild}/>
            <table border="1">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>userid</th>
                        <th>date</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((ct,i)=>{
                        return <tr>
                            <td>{ct.id}</td>
                            <td>{ct.userId}</td>
                            <td>{ct.date}</td>
                            <td>{ct.email}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>;
    }
}



export default Parentclas3;