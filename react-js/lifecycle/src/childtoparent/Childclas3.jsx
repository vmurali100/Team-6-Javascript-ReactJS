import React from 'react';
import axios from 'axios'
class Childclas3 extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        cart:[]
    };
}
componentDidMount(){
    const url="http://localhost:3000/cart"
    axios.get(url).then((response)=>{this.setState({cart:response.data})})
}
    render() {
        const {receivecartfromchild}=this.props;
        const {cart}=this.state;

        return <div>
            <button onClick={()=>{receivecartfromchild(cart)}}>send to parent3</button>
        </div>;
    }
}



export default Childclas3;