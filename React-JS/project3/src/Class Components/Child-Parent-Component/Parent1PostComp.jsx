import { Component } from "react";
import { Child1PostComp } from "./Child1PostComp";

export class Parent1PostComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Hero: "",
            Heroine: {},
            Director: [],
        }
    }
    RecieveHero = (Movie) => {
        this.setState({ Hero: Movie })
    };
    RecieveHeroine = (Cinema) => {
        this.setState({ Heroine: Cinema })
    };
    RecieveDirector = (Script) => {
        this.setState({ Director: Script })
    };
    render() {
        const { RecieveHero, RecieveHeroine, RecieveDirector } = this;
        const { Hero, Heroine, Director } = this.state;
        return (
            <div>
                <Child1PostComp RecieveHero={RecieveHero}
                 RecieveHeroine={RecieveHeroine}
                  RecieveDirector={RecieveDirector} />
                  <hr />
                  {Hero && <p>Hero recieve from Child:{Hero}</p>}
                  {Object.keys(Heroine).length > 0 && <p>Heroine recieve for me</p>}
                  <ul>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>userId</th>
                                <th>id</th>
                                <th>email</th>
                                <th>body</th>
                            </tr>
                        </thead>
                        <tbody>
                        {Director.map((sai,i)=>{
                    return <tr key={i}>
                        <td>{ sai.userId}</td>
                        <td>{ sai.id}</td>
                        <td>{ sai.email}</td>
                        <td>{ sai.body}</td>
                    </tr>
                   })}
                        </tbody>
                    </table>
                   
                  </ul>                                
                  
            </div>
        )
    }
}