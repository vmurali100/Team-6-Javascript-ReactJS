function createUser(){
    var allusers=[]
    var user={
        fname:document.getElementById("fname").value,
        lname:document.getElementById("lname").value
    }
    var allRadioBtns=document.getElementsByName("gender")
    allRadioBtns.forEach((item)=>{
        if(item.checked){
            user.gender=item.value
        }
    })
    var allcheckboxes=document.getElementsByName("subjects")
    allcheckboxes.forEach((box)=>{
        if(box.checked){
            user.subjects=box.value

        }
    })
    console.log(allcheckboxes)
    allusers.push(user)
    console.log(user)
}