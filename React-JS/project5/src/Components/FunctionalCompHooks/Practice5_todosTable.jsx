export const Practice5_todosTable = ({Todos})=>{
    return (
        <div>
            <table border={2}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>UsersId</th>
                        <th>Title</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                {Todos.map((user, i) => {
                        return <tr key={i}>
                            <td>{user.id}</td>
                            <td>{user.userId}</td>
                            <td>{user.title}</td>
                            <td>{user.completed}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}