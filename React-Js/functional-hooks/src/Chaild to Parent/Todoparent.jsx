import { TodoChild } from './TodoChild';
import React,{useState} from 'react'

export const Todoparent = () => {
    const [todoinfo, setTodoinfo] = useState([]);
    const getDatafromchild = (todos)=>{
        setTodoinfo(todos)
    }
  return (
    <div>
        <TodoChild getdata={getDatafromchild} />
        {todoinfo.length >0 && 
            <table border="1">
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>completed</th>
                    </tr>
                </thead>
                <tbody>
                    {todoinfo.map((user,i)=>{
                        return <tr key={i}>
                            <td>{user.userId}</td>
                            <td>{user.id}</td>
                            <td>{user.title}</td>
                            <td>{user.completed}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        }
    </div>
  )
}
