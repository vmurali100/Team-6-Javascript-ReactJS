
import './App.css';
import AlbumsParent2 from './ChildToParent/AlbumsParent2';
import CommentParent5 from './ChildToParent/CommentParent5';
import FilltextParent1 from './ChildToParent/FilltextParent1';
import FilltextParent3 from './ChildToParent/FilltextParent3';
import FilltextsParent4 from './ChildToParent/FilltextsParent4';

function App() {
  return (
    <div className="App">
      {/* <FilltextParent1></FilltextParent1> */}
      {/* <AlbumsParent2></AlbumsParent2> */}
      {/* <FilltextParent3></FilltextParent3> */}
      {/* <FilltextsParent4></FilltextsParent4> */}
      <CommentParent5></CommentParent5>
    </div>
  );
}

export default App;
