import logo from './logo.svg';
import './App.css';
import { Users } from './Components/Users';
import { Userdetails } from './Components/Userdetails';
import { Data } from './Components/Data';
import { Datadetails } from './Components/Datadetails';
import { Student } from './Components/Student';
import { StudentDetails } from './Components/StudentDetails';
import { Teacher } from './Components/Teacher';
import { TeacherDetails } from './Components/TeacherDetails';

function App() {
  return (
    <div className="App">
      {/* <Users/>
      <Userdetails/> */}

      {/* <Data/>
      <Datadetails/> */}

      {/* <Student/>
      <StudentDetails/> */}

      <Teacher/>
      <TeacherDetails/>
    </div>
  );
}

export default App;
