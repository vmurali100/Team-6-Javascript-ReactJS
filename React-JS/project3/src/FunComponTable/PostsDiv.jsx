
const PostsDiv=({postsuser})=>{
    return(
        <div>
            {postsuser.map((user)=>{
               return <div className="postInfo">
                    <p>{user.userId}</p>
                    <p>{user.id}</p>
                    <p>{user.title}</p>
                    <p>{user.body}</p>
                </div>
            })}
        </div>
    )
}
export default PostsDiv