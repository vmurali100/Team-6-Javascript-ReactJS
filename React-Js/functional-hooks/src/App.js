
import './App.css';
import { Photosparent } from './Chaild to Parent/Photosparent';
import { Todoparent } from './Chaild to Parent/Todoparent';
import Albums from './Component/Albums';
import Comments from './Component/Comments';
import Photos from './Component/Photos';
import Posts from './Component/Posts';
import Todo from './Component/Todo';

function App() {
  return (
    <div className="App">
      {/* <Posts/> */}
      {/* <Comments/> */}
      {/* <Albums/> */}
      {/* <Todo/> */}
      {/* <Photos/> */}
      {/* <Photosparent/> */}
      <Todoparent/>
    </div>
  );
}

export default App;
