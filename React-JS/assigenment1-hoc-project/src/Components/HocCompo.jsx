import axios from 'axios'
import React, { Component, useState } from 'react'

export const HocCompo = (OriginalComponent) => {



    class HocCompo extends Component {
        constructor(props) {
            super(props)
          
            this.state = {
               Users:[]
            }
          }
          componentDidMount(){
            const url = " http://localhost:3000/ProductsAsi"
            axios.get(url).then((response)=>{
                this.setState({Users:response.data})
            })
        }
        
         handleDelete = (Users)=>{
            axios.delete(" http://localhost:3000/ProductsAsi/" +Users.id ).then((response)=>{
            })
             
         }
        
        // count={this.state.Users} HandleIncrements={this.HandleIncrements}
        render() {
            return (
                 <OriginalComponent  Users={this.state.Users} handleDelete={this.handleDelete}/>
            )
        }
    }
    return HocCompo
}
