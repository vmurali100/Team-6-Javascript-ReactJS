 export function Child ({mes,per,use}){

return <div>
    <h1>{mes}</h1>
    <h2>{per.fname} {per.lname}</h2>

    <ul>
        {use.map((user,i)=>{
            return <li key={i}>{user}</li>
        })}
    </ul>
</div>
}