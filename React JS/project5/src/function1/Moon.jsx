export function Moon({all}){
    return (
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>Fname</th>
              <th>Lname</th>
               </tr>
          </thead>
          <tbody>
            {all.map((user,i) => {
              return (
                <tr key={i}>
                  <td>{user.fname}</td>
                  <td>{user.lname}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };
  
  
  