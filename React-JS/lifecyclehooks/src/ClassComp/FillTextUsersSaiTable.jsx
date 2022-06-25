export const FillTextUsersSaiTable = ({FilltextUsers})=>{
    return(
        <table border="1">
            <thead>
                <tr>
                    <th>fname</th>
                    <th>lname</th>
                </tr>
            </thead>
            <tbody >
                {FilltextUsers.map((user,i)=>{
                    return (
                        <tr key={i}>
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}