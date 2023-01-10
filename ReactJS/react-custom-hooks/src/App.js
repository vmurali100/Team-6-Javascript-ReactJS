import "./App.css";
import useFetch from "./custom-hooks/useFetch";
import useGetUsers from "./custom-hooks/useGetUsers";

function App() {
  const { error, data } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const { users, err } = useGetUsers();
  return <div className="App">

  </div>;
}

export default App;
