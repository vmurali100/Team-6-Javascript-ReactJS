import logo from './logo.svg';
import './App.css';
import LifecycleA from './Components/LifecycleA';
import Lifecycle1 from './Components/Lifecycle1';
import Lifecycle3 from './Components/Lifecycle3';
import LifecycleC from './Components/LifecycleC';
import Users from './lifecycle-hooks-class/Users';
import Posts1 from './lifecycle-hooks-class/Posts1';
import Carts2 from './lifecycle-hooks-class/Carts2';
import Comments3 from './lifecycle-hooks-class/Comments3';
import Photos5 from './lifecycle-hooks-class/Photos5';
import Child1 from './lifecyclehook-child-to-parent/Child1';
import Parent1 from './lifecyclehook-child-to-parent/Parent1';
import Parent2 from './lifecyclehook-child-to-parent/Parent2';

function App() {
  return (
    <div className="App">
    {/* <LifecycleA/> */}
    {/* <Lifecycle1/> */}
    {/* <Lifecycle3/> */}
    {/* <LifecycleC/> */}

    {/* lifecyclehooks */}
    {/* <Users/> */}
    {/* <Posts1/> */}
    {/* <Carts2/> */}
    {/* <Comments3/> */}
    {/* <Photos5/> */}

    {/* lifehook child to  parent */}
    {/* <Parent1/> */}
    <Parent2/>

    </div>
  );
}

export default App;
