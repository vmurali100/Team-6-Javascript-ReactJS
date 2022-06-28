
import './App.css';
import Albums from './Async api/Albums';
import Photos from './Async api/Photos';
import Posts from './Async api/Posts';
import Products from './Async api/Products';
import Todos from './Async api/Todos';

function App() {
  return (
    <div className="App">
   <Posts/>
   <Todos/>
   <Products/>
   <Photos/>
   <Albums/>
    </div>
  );
}

export default App;
