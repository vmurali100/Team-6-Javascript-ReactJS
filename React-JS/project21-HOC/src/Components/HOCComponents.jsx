import React,{Component,useState} from 'react';
import axios from 'axios'

export const HOCComponents = (OriginalComponent) => {
    
    class HOCComponents extends Component {
        constructor(props) {
            super(props)
          
            this.state = {
               Users:[]
            }
          }
          componentDidMount(){
            const url = "http://localhost:3000/Users"
            axios.get(url).then((response)=>{
                this.setState({Users:response.data})
            })
        }
        
         handleDelete = (user)=>{
            axios.delete("http://localhost:3000/Users/"+user.id ).then((response)=>{
                this.setState(response)
            })
             
         }
        
        // count={this.state.Users} HandleIncrements={this.HandleIncrements}
        render() {
            return (
                 <OriginalComponent  Users={this.state.Users} handleDelete={this.handleDelete}/>
            )
        }
    }
    return  HOCComponents
    
}
