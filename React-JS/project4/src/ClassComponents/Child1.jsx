import React, { Component } from 'react'
import Cards from '../FunctionalComponents/Cards'
 
 
export default class Child1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        ChildData1 : allUsers
      }
    }
  render() {
    return (
      <div> 
          <Cards ChildData1={this.state.ChildData1}/>
         
      </div>
    )
  }
}

var allUsers = [
    {
        "fname": "Bingmei",
        "lname": "Gulotta",
        "tel": "(653)363-6295",
        "address": "8781 Amet Ct",
        "city": "Denton",
        "state": "HI",
        "zip": 10108
    },
    {
        "fname": "Alisa",
        "lname": "Rich",
        "tel": "(269)115-4185",
        "address": "4479 Massa Ct",
        "city": "Louisville",
        "state": "WA",
        "zip": 96554
    },
    {
        "fname": "Irma",
        "lname": "Hoffmann",
        "tel": "(936)609-0883",
        "address": "8121 Aliquam Rd",
        "city": "Clovis",
        "state": "NV",
        "zip": 98762
    },
    {
        "fname": "Michele",
        "lname": "Taverna",
        "tel": "(549)631-0613",
        "address": "5827 Neque Ave",
        "city": "Strongsville",
        "state": "AZ",
        "zip": 28162
    },
    {
        "fname": "Cecelia",
        "lname": "Tuggle",
        "tel": "(790)119-9376",
        "address": "5182 Massa Ln",
        "city": "Raymond",
        "state": "WV",
        "zip": 16912
    },
    {
        "fname": "Henry",
        "lname": "Rush",
        "tel": "(679)862-4959",
        "address": "170 Lacus Dr",
        "city": "Patterson",
        "state": "MO",
        "zip": 31868
    },
    {
        "fname": "Robbie",
        "lname": "Snyder",
        "tel": "(955)194-6569",
        "address": "9682 Dolor St",
        "city": "Boynton Beach",
        "state": "IA",
        "zip": 37647
    },
    {
        "fname": "Tighe",
        "lname": "Lenz",
        "tel": "(831)288-0545",
        "address": "3145 Sollicitudin Ct",
        "city": "Appleton",
        "state": "IA",
        "zip": 60884
    },
    {
        "fname": "Ralph",
        "lname": "Hunter",
        "tel": "(325)952-6055",
        "address": "6183 Velit Dr",
        "city": "Mooresville",
        "state": "MO",
        "zip": 46676
    },
    {
        "fname": "Cynthia",
        "lname": "Hellems",
        "tel": "(196)241-8748",
        "address": "3847 Convallis Ave",
        "city": "Lafayette",
        "state": "CT",
        "zip": 38951
    }
]

 