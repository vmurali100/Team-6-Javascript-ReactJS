import React from 'react';
import axios from 'axios'
import Postclastab from './Postclastab';

class Postclas extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        post:[]
    };
}
componentDidMount(){
    const url="http://localhost:3000/posts"
    axios.get(url).then((response)=>{this.setState({post:response.data})})
}

    render() {
        return <div>
            <Postclastab allposts={this.state.post}/>
        </div>;
    }
}



export default Postclas;