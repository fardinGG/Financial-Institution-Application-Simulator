import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableFooter, TablePagination } from '@mui/material';
import './styles.css';
import HeaderB from '../../../components/header';

function UsersList() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10); // Set default rows per page
  const [passwordVisibility, setPasswordVisibility] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5002/api/users')
      .then(response => {
        setUsers(response.data);
        setPasswordVisibility(response.data.map(() => false)); 
      })
      .catch(error => {
        console.error('Error fetching users:', error);

      });
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; // Returns date in YYYY-MM-DD format
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const togglePasswordVisibility = (index) => {
    setPasswordVisibility(prevVisibility => {
      const newVisibility = [...prevVisibility];
      newVisibility[index] = !newVisibility[index];
      return newVisibility;
    });
  };

  return (

    <TableContainer className='tableCC' component={Paper}>
      <HeaderB/>
      <br></br><br></br><br></br><br></br>
      <center><h1 className='title'>Users Credential List</h1></center>
      <Table>
        <TableHead className='TableH'>
          <TableRow className='TableHcontent'>
          <TableCell className='TableHcontent'>Account Number</TableCell>
            <TableCell className='TableHcontent'>Full Name</TableCell>
            <TableCell className='TableHcontent'>Date of Birth</TableCell>
            <TableCell className='TableHcontent'>Email</TableCell>
            <TableCell className='TableHcontent'>Password</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
        {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user, index) => (
            <TableRow className='data' key={user._id}>
              <TableCell >{user._id}</TableCell>
              <TableCell >{user.fullname}</TableCell>
              <TableCell >{formatDate(user.dob)}</TableCell>
              <TableCell >{user.email}</TableCell>
              <TableCell onClick={() => togglePasswordVisibility(index)} style={{ cursor: 'pointer' }}>
                {passwordVisibility[index] ? user.password : '••••••••'}
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 15, 20, 25]}
              colSpan={4}
              count={users.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

export default UsersList;
