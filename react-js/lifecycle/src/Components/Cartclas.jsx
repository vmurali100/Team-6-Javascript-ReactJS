import React from 'react';
import axios from 'axios'
import { Component } from 'react';
import Carttab from './Carttab';
class Cartclas extends Component {
constructor(props) {
    super(props);

    this.state = {
        cart:[]
    };
}
componentDidMount(){
    const url="http://localhost:3000/cart"
    axios.get(url).then((response)=>(this.setState({cart:response.data})))
}

    render() {
        return <div>
            <Carttab allcart={this.state.cart}/>
        </div>;
    }
}



export default Cartclas;