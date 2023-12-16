import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button , Container } from '@mui/material';
import { Link } from 'react-router-dom';
const DisplayAll = () => {
    const [allAuthors, setAllAuthors] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/author")
      .then((response) => {
        console.log(response.data);
        setAllAuthors(response.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);
  const handleDeleteAuthor = (idFromBelow) => {
    axios
      .delete(`http://localhost:5000/api/author/${idFromBelow}`)
      .then((response) => {
        console.log("success deleting author");
        console.log(response);
        const filteredAuthors = allAuthors.filter((author) => {
          return author._id !== idFromBelow;
        });
        setAllAuthors(filteredAuthors);
      })
      .catch((err) => {
        console.log("error deleting author", err.response);
      });
  };
//in here we fetched the data yays 

return (
   
    <Container maxWidth="sm" style={{ marginTop: '20px' }}>
         <p style={{color:"purple"}}>We have quotes by:</p>
         <Link to="/new">Author</Link>

      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Authors</TableCell>
              <TableCell>Actions available</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allAuthors.map((author, index) => (
              <TableRow key={index}>
                <TableCell>{author.Name}</TableCell>
                <TableCell>
                <Link to={`/edit/${author._id}`}>
                        <button className="btn btn-primary">Edit</button>
                </Link>
                <button className="btn btn-secondary"
                        onClick={() => handleDeleteAuthor(author._id)}
                      >
                        Delete
                      </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default DisplayAll