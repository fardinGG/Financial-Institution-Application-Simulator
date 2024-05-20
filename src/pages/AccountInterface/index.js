import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HeaderB from '../../components/header';

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch all users
    axios.get('http://localhost:5002/api/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div>
      <HeaderB />
      <br></br>
      <br>
      </br>
      <br></br>
      <br></br>
      <h1>Users List</h1>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            {user.fullname} - {user.email} - {user.accountNumber} - {user.password}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
