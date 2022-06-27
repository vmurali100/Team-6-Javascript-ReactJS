import React from 'react';
import axios from 'axios'

class Childclas4 extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        photos:[]
    };
}
componentDidMount(){
    const url="http://localhost:3000/photos"
    axios.get(url).then((response)=>{this.setState({photos:response.data})})
}
    render() {
        const {receivephotosfromchild}=this.props;
        const {photos}=this.state
        return <div>
            <button onClick={()=>{receivephotosfromchild(photos)}}>send to parent 4</button>
        </div>;
    }
}


export default Childclas4;