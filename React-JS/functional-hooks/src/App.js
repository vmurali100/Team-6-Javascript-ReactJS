import logo from './logo.svg';
import './App.css';
import { Users } from './Components/Users';
import Posts from './Components/Posts';
import Todos from './Components/Todos';
import Comments from './Components/Comments';
import ChinnodaUser from './Components/ChinnodaUser';
import Filltext from './Components/Filltext';
import Albums from './Components/Albums';
import { PostsParentFunComp } from './Child-To-Parent/PostsParentFunComp';
import { Filltext3ParentFun } from './Child-To-Parent/Filltext3ParentFun';
import { CommentsParentFun } from './Child-To-Parent/CommentsParentFun';
import { TodosparentFun } from './Child-To-Parent/TodosparentFun';
import { AlbumsParentFun } from './Child-To-Parent/AlbumsParentFun';


function App() {
  return (
    <div className="App">
      {/* <Users/> */}
      {/* <Posts/> */}
     {/* <Todos/> */}
     {/* <Comments/> */}
     {/* <ChinnodaUser/> */}
     {/* <Filltext/> */}
     {/* <Albums/> */}

     {/* <PostsParentFunComp/> */}
     {/* <Filltext3ParentFun/> */}
     {/* <CommentsParentFun/> */}
     {/* <TodosparentFun/> */}
     <AlbumsParentFun/>
    </div>
  );
}

export default App;
