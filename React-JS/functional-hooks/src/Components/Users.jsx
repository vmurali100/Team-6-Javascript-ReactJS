import { useEffect, useState } from 'react';
import axios from 'axios'
import { UsersTable } from './UsersTable';


export const Users = () => {
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {

        const url = "https://filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true"
        axios.get(url).then((response) => { setAllUsers(response.data) })
    }, [])

    return (
        <div>
            <UsersTable filltextUsers={allUsers} />
        </div>
    )
}
export default Users
