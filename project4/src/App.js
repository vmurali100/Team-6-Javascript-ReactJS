import logo from './logo.svg';
import './App.css';
import Sibling1 from "../../project4/src/SiblingComponents/Sibling1";
import Sibling10 from "../../project4/src/SiblingComponents/Sibling10";
import Sibling2 from "../../project4/src/SiblingComponents/Sibling2";
import Sibling3 from "../../project4/src/SiblingComponents/Sibling3";
import Sibling4 from "../../project4/src/SiblingComponents/Sibling4";
import Sibling5 from "../../project4/src/SiblingComponents/Sibling5";
import Sibling6 from "../../project4/src/SiblingComponents/Sibling6";
import Sibling7 from "../../project4/src/SiblingComponents/Sibling7";
import Sibling8 from "../../project4/src/SiblingComponents/Sibling8";
import Sibling9 from "../../project4/src/SiblingComponents/Sibling9";
import { useState } from 'react';

function App() {
  
      
     //sibling1,2
    // const[message,setmessage]=useState("")
    // const[newperson,setnewperson]=useState({})
    // const[users,setusers]=useState([])

    // const sendmessage=(msg)=>{
    //       setmessage(msg)
    //  }
    //  const sendperson=(person)=>{
    //      setnewperson(person)
    //  }
    //  const sendusers=(use)=>{
    //      setusers(use)
    //  }
    //   return <div>
    //      <Sibling1 sendmessage={sendmessage} sendperson={sendperson} sendusers={sendusers}/>
    //      <Sibling2 message={message} newperson={newperson} users={users}/>
    //   </div>
       
         


                    //sibling3,4
        
    //  const[school,setschool]=useState("")
    //  const[teacher,setteacher]=useState({})
    //  const[students,setstudents]=useState([])

    //  const sendschool=(sch)=>{
    //     setschool(sch)
    // }
    // const sendteacher=(tea)=>{
    //     setteacher(tea)
    // }
    // const sendstudents=(stu)=>{
    //     setstudents(stu)
    // }
    //  return <div>
    //      <Sibling3 sendschool={sendschool} sendteacher={sendteacher} sendstudents={sendstudents}/>
    //      <Sibling4 school={school} teacher={teacher} students={students}/>
    //  </div> 

                    
        //      const[post,setpost]=useState("")
        //     const[postman,setpostman]=useState({})
        //    const[postoffice,setpostoffice]=useState([])

        //  const sendpost=(pos)=>{
        //       setpost(pos)
        //    }
        //    const sendpostman=(man)=>{
        //     setpostman(man)
        //    }
        //    const sendpostoffice=(off)=>{
        //     setpostoffice(off)
        //    }

        //     return <div>
        //      <Sibling5 sendpost={sendpost} sendpostman={sendpostman} sendpostoffice={sendpostoffice}/>
        //     <Sibling6  post={post} postman={postman} postoffice={postoffice}/>
        //     </div>

                   //sibling7,8

                    const[village,setvillage]=useState("")
                    const[posts,setposts]=useState({})
                    const[district,setdistrict]=useState([])

                    const sendvillage=(vil)=>{
                    setvillage(vil)
                   }
                   const sendposts=(posts)=>{
                    setposts(posts)
                   }
                   const senddistrict=(dis)=>{
                    setdistrict(dis)
                   }
                return <div>
                    <Sibling7 sendvillage={sendvillage} sendposts={sendposts} senddistrict={senddistrict}/>
                    <Sibling8 village={village} posts={posts} district={district}/>
                </div>

                        
                          //sibling 9,10
                        //  const[messag,setmessag]=useState("")
                        // const[email,setemail]=useState({})
                        //  const[password,setpassword]=useState([])

                        //  const sendmessag=(msg)=>{
                        //     setmessag(msg)
                        // }
                        // const sendemail=(mail)=>{
                        //     setemail(mail)
                        // }
                        // const sendpassword=(pass)=>{
                        //     setpassword(pass)
                        // }

                        //  return <div>
                        //      <Sibling9 sendmessag={sendmessag} sendemail={sendemail} sendpassword={sendpassword}/>
                        //      <Sibling10 messag={messag} email={email} password={password}/>
                        //  </div> 
      
     
   
}
export default App
