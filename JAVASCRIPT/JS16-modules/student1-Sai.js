export default  function SayHelloToAllstudents(students){
     students.forEach((std)=>{
           console.log("Hello"+std+"Everyone")
     })
}

var students =["sai","vijay","jai","akhil","chiru"]

SayHelloToAllstudents(students)

module.exports = SayHelloToAllstudents;
