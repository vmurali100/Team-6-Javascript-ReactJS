import React from 'react';
import Newchildcomp from './Newchildcomp';
import Testcomp from './Testcomp';

class Newparentcomp extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        message:"welcome to new parentcomp"
    };
}
sendmessage=()=>{
    return <Testcomp msg={this.state.message}/>
}
    render() {
        return <div>
            <p>Newparentcomp</p>
            <Newchildcomp render={this.sendmessage()}/>
        </div>;
    }
}



export default Newparentcomp;