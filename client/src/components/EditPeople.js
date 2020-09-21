import React, { Fragment, useState } from "react";

import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import DoneIcon from '@material-ui/icons/Done';
import { FormControl, FormGroup, Input, InputLabel } from "@material-ui/core";

const EditPeople = ({ person }) => {
  const [fName, setFName] = useState(person.fname);
  const [lName, setLName] = useState(person.lname);
  const [age, setAge] = useState(person.age);

  const updatePeople = async e => {
    e.preventDefault();
    try {
      const body = { fName, lName, age };
      const response = await fetch(
        `/people/${person.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/list";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <IconButton aria-label="edit"
        variant="contained"
        style={{
          backgroundColor: "#ffffff",
        }}
        data-toggle="modal"
        data-target={`#id${person.id}`}>
        <EditIcon />
      </IconButton>
      <div
        class="modal"
        id={`id${person.id}`}
        onClick={() => {
          setFName(person.fname);
          setLName(person.lname);
          setAge(person.age);
        }}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">ΕΠΕΞΕΡΓΑΣΙΑ</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => {
                  setFName(person.fname);
                  setLName(person.lname);
                  setAge(person.age);
                }}
              >
                &times;
                </button>
            </div>

            <div class="modal-body">
              <FormGroup>
                <FormControl>
                  <InputLabel htmlFor="title">ΟΝΟΜΑ</InputLabel>
                  <Input id="fName" type="text" name="fName" value={fName} onChange={e => setFName(e.target.value)} />
                </FormControl>
                <br />
                <FormControl>
                  <InputLabel htmlFor="lName">ΕΠΩΝΥΜΟ</InputLabel>
                  <Input id="lName" type="text" name="lName" value={lName} onChange={e => setLName(e.target.value)} />
                </FormControl>
                <br />
                <FormControl>
                  <InputLabel htmlFor="age">ΗΛΙΚΙΑ</InputLabel>
                  <Input id="age" type="text" name="age" value={age} onChange={e => setAge(e.target.value)} />
                </FormControl>
                <br /><br />
              </FormGroup>
            </div>

            <div class="modal-footer">
              <IconButton aria-label="edit"
                variant="contained"
                style={{
                  backgroundColor: "#ffffff",
                }}
                onClick={e => updatePeople(e)}>
                <DoneIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditPeople;