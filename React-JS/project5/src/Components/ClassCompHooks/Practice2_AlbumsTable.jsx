export const Practice2_AlbumsTable = ({Albums})=>{
    return (
        <div>
            <table border={2}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>UserId</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {Albums.map((user, i) => {
                        return <tr key={i}>
                            <td>{user.id}</td>
                            <td>{user.userId}</td>
                            <td>{user.title}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}