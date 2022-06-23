
import './App.css';
import Albums from './SiblingComponent/CalssComponent/Albums';
import Dheena from './SiblingComponent/CalssComponent/Dheena';
import Posts from './SiblingComponent/CalssComponent/Posts';
import SaiFilltext from './SiblingComponent/CalssComponent/SaiFilltext';
import Todos from './SiblingComponent/CalssComponent/Todos';

import { AlbumsFunc } from './SiblingComponent/FunctionalaComponent/AlbumsFunc';
import { CommentsFunc } from './SiblingComponent/FunctionalaComponent/CommentsFunc';
import { PostsFunc } from './SiblingComponent/FunctionalaComponent/PostsFunc';
import { TodosFunc } from './SiblingComponent/FunctionalaComponent/TodosFunc';
import { UsersFunc } from './SiblingComponent/FunctionalaComponent/UsersFunc';

function App() {
  return (
    <div className="App">
      {/* <Posts/> */}
      {/* <Todos/> */}
      {/* <SaiFilltext/> */}
      {/* <Albums/> */}
      {/* <Dheena/> */}

      {/* <AlbumsFunc/> */}
      {/* <TodosFunc/> */}
      {/* <CommentsFunc/>*/}
      {/* <PostsFunc/> */}
      <UsersFunc/>
    
    </div>
  );
}

export default App;
