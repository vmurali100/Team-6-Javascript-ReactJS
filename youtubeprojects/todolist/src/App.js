import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import { Todolist } from './Todolist';


function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([])
  const changehandler=e=>{
    setTask(e.target.value)
  }
  const submithandler = e =>{
    e.preventDefault();
    const newtodos=[...todos,task];
    setTodos(newtodos);
    setTask("");
  }
  const deletehandler=(indexvalue)=>{
    const newtodos=todos.filter((todo,index)=> index !== indexvalue)
    setTodos(newtodos)
  }
  return (
    <div className="App">
      <center>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Todo Management Application</h5>
            <form onSubmit={submithandler}>
              <input size="30" type="text" name="task" value={task} onChange={changehandler}/> &nbsp;&nbsp;
              <input type="submit" value="Add" name="Add"/>
            </form>
           
            <Todolist todolist={todos} deletehandler={deletehandler}/>
          </div>
        </div>
      </center>
    </div>
  );
}

export default App;
