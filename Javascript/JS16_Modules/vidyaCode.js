function sayHelloToAllStudents(students){
    students.forEach((std)=> {
        console.log("Hello" + std +"How Are You")        
    });
}
var students = ["Vidya","Vasu","Manikanta","Charan"]

sayHelloToAllStudents(students)