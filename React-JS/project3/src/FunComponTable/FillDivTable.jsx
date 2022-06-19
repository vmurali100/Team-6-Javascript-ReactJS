import Filltext from "./Filltext"

    const FillDivTable =({filltextuses})=>{
        return(
            <div>
               {filltextuses.map((user)=>{
               return <div className="userInfo">
                <p>{user.fname}</p>
                <p>{user.lname}</p>
                <p>{user.tel}</p>
                <p>{user.address}</p>
                <p>{user.city}</p>
                <p>{user.fname}</p>
                <p>{user.zip}</p>
            </div>
    })}
            </div>
        )
    }
export default FillDivTable