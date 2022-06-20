const PrettyDiv=({pretty})=>{
    return(
        <div>
            {
                pretty.map((user)=>{
                    return(
                        <div className="prettyinfo">
                            <p>{user.fname}</p>
                            <p>{user.lname}</p>
                            <p>{user.tel}</p>
                            <p>{user.address}</p>
                            <p>{user.city}</p>
                            <p>{user.state}</p>
                            <p>{user.zip}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default PrettyDiv