
import './App.css';

import { useEffect, useState } from 'react';



function App() {
  const [data, setdata] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:3000/cases_time_series').then((response)=>{
      setdata(response.data)

    })
})
  return (
    <div className="App">
      <h1>India covaid-19 dashboard</h1>
      {<table>
      <thead>
        <tr>
          <th>State</th>
          <th>Confirmed</th>
          <th>Recovered</th>
          <th>Death</th>
          <th>Active</th>
          <th>LastUpdate</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) =>{
          return (
            <tr>
          <td>{item.state}</td>
          <td>{item.confirmed}</td>
          <td>{item.recovered}</td>
          <td>{item.deaths}</td>
          <td>{item.active}</td>
          <td>{item.lastupdatedtime}</td>
        </tr>
          )
        })}
      </tbody>
    </table> }
    </div>
  );
}

export default App;
