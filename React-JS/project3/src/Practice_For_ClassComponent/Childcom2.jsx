import { Component } from "react";

 export class Childcom2 extends Component {
     constructor(props) {
         super(props);
         console.log(props)
         this.state = {
             ShowData: false
         };
     }
     HandleAShowdata = () => {
         this.setState({ ShowData: true })
     };
      
     render() {
         return (
             <div>
                 <button onClick={this.HandleAShowdata}>DisplayArray</button>
                 {this.state.ShowData && (
                     <ul>
                         {this.props.allUsers.map((user, i) => {
                             return <li key={i}>{user}</li>
 
                         })}
                     </ul>
                 )}
             </div>
         )
     }
 }