import React, { useEffect, useState } from "react";
import EditPeople from "./EditPeople";

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';


const ListPeople = () => {

  const [people, setPeople] = useState([]);

  const deletePeople = async id => {
    try {
      const deletePeople = await fetch(`/people/${id}`, {
        method: "DELETE"
      });

      setPeople(people.filter(person => person.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getPeople = async () => {
    try {
      const response = await fetch("/people");
      const jsonData = await response.json();
      setPeople(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell width="40%">ΟΝΟΜΑ</TableCell>
            <TableCell width="40%">ΕΠΩΝΥΜΟ</TableCell>
            <TableCell width="10%">ΗΛΙΚΙΑ</TableCell>
            <TableCell width="5%"></TableCell>
            <TableCell width="5%"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            (people.length > 0) ?
              (people.map(person => (
                <TableRow key={person.id}>
                  <TableCell>{person.fname}</TableCell>
                  <TableCell>{person.lname}</TableCell>
                  <TableCell>{person.age}</TableCell>
                  <TableCell>
                    <EditPeople person={person} />
                  </TableCell>
                  <TableCell>
                    <IconButton aria-label="delete"
                      variant="contained"
                      style={{
                        backgroundColor: "#ffffff",
                      }}
                      onClick={() => deletePeople(person.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
              ) : (
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Δεν υπάρχουν άτομα</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              )
          }
        </TableBody>
      </Table>
    </TableContainer>
  );

};

export default ListPeople;