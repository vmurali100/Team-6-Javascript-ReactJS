import { Component } from "react"

export class Orange extends Component{
    constructor(){
        super()
    }
    render(){
        return <div>
            <h1>Orange</h1>
            <p>An orange is a fruit of various citrus species in the family Rutaceae.
             it primarily refers to Citrus sinensis, which is also called sweet 
             orange, to distinguish it from the related Citrus aurantium, 
             referred to as bitter orange.</p>
             
            <h3>The vitamin C in oranges helps your body in lots of ways:</h3>
            <ul>
                <li>Protects your cells from damage.</li>
                <li>Helps your body make collagen, a protein that heals wounds and gives you smoother skin.</li>
                <li>Makes it easier to absorb iron to fight anemia.</li>
                <li>Boosts your immune system, your body's defense against germs.</li>
            </ul>
        </div>
    }
}