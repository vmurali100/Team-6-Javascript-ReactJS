
import './App.css';
import Albparent from './FunComp-Child to parent/Albparent';
import Cartsparent from './FunComp-Child to parent/Cartsparent';
import { Commentparent } from './FunComp-Child to parent/Commentparent';
import Photoparent from './FunComp-Child to parent/Photoparent';
import Postparent from './FunComp-Child to parent/Postparent';
import Todoschild from './FunComp-Child to parent/Todoschild';
import Albums from './Function Components/Albums';
import Comments from './Function Components/Comments';
import Photos from './Function Components/Photos';
import PhotosTable from './Function Components/PhotosTable';
import Posts from './Function Components/Posts';
import Todos from './Function Components/Todos';
import { Users } from './Function Components/Users';

function App() {
  return (
    <div className="App">
      {/* <Users></Users> */}
      {/* <Albums></Albums> */}
      {/* <Comments></Comments> */}
    {/* <Photos></Photos> */}
    {/* <Todos></Todos> */}
      {/* <Posts></Posts> */}
      {/* <Albparent/> */}
      {/* <Cartsparent/> */}
      {/* <Commentparent/> */}
      {/* <Photoparent/> */}
      {/* <Postparent/> */}
      <Todoschild/>
    </div>
  );
}

export default App;
