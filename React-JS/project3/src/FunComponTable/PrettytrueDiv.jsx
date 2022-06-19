const PrettytrueDiv=({pretty})=>{
    return(
        <div>
            {pretty.map((user)=>{
                return(
                    <div className="prettyinfo">
                        <p>{user.id}</p>
                        <p>{user.email}</p>
                        <p>{user.username}</p>
                        <p>{user.password}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default PrettytrueDiv