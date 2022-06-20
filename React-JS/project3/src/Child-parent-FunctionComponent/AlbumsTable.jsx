const AlbumsTable =({albums})=>{
    return(
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>Id</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {albums.map((user)=>{
                        return <tr>
                            <td>{user.userId}</td>
                            <td>{user.id}</td>
                            <td>{user.title}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default AlbumsTable