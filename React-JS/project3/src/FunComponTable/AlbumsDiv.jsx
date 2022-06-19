const AlbumsDiv=({albums})=>{
    return(
        <div>
            {albums.map((user)=>{
                return(
                    <div className="albuminfo">
                        <p>{user.userId}</p>
                        <p>{user.id}</p>
                        <p>{user.title}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default AlbumsDiv