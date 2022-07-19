import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <div>
                <form>

                    <label htmlFor="title">Title :</label>
                    <input type="text" name="" id="" /> <br />
                    <label htmlFor="price">Price :</label>
                    <input type="text" name="" id="" /> <br />
                    <label htmlFor="description">Description :</label>
                    <input type="text" name="" id="" /> <br />
                    <label htmlFor="category">Category :</label>
                    <input type="text" name="" id="" /> <br />
                    <label htmlFor="image">Image :</label>
                    <input type="text" name="" id="" /> <br />
                    <button>Add User</button>

                </form>
            
            </div>
        )
    }
}
