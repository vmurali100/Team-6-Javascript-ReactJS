import React from 'react';

class Newchildcomp extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return <div>
            <p>Newchildcomp</p>
            <p>message from parent component is :{this.props.render}</p>
        </div>;
    }
}



export default Newchildcomp;