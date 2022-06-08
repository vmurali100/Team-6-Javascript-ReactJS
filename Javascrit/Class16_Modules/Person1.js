function SayHelloAllPersons(Persons){
    Persons.forEach((Prs) => {
        console.log("Hello" +Prs+ "How Are You")
    });
}

var Persons = ["Mansur","Naveen","santhosh","Sai"]

SayHelloAllPersons(Persons)

module.exports = SayHelloAllPersons;