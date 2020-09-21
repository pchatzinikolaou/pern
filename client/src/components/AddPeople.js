import React, { useState } from "react";

import { Button, Container, FormControl, FormGroup, Input, InputLabel } from "@material-ui/core";

const AddPeople = () => {

    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [age, setAge] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { fName, lName, age };
            const response = await fetch("/people", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            window.location = "/list";
        } catch (err) {
            console.error(err.message);
        }
    };

    return (

        <Container>
            <h3>ΠΡΟΣΘΗΚΗ ΑΤΟΜΟΥ</h3>
            <form onSubmit={onSubmitForm}>
                <FormGroup>
                    <FormControl>
                        <InputLabel htmlFor="title">ΟΝΟΜΑ</InputLabel>
                        <Input required id="fName" type="text" name="fName" value={fName} onChange={e1 => setFName(e1.target.value)} />
                    </FormControl>
                    <br />
                    <FormControl>
                        <InputLabel htmlFor="lName">ΕΠΩΝΥΜΟ</InputLabel>
                        <Input required id="lName" type="text" name="lName" value={lName} onChange={e2 => setLName(e2.target.value)} />
                    </FormControl>
                    <br />
                    <FormControl>
                        <InputLabel htmlFor="age">ΗΛΙΚΙΑ</InputLabel>
                        <Input required id="age" type="text" name="age" value={age} onChange={e3 => setAge(e3.target.value)} />
                    </FormControl>
                    <br />
                    <FormControl>
                        <Button variant="contained" color="success" value="Submit" type="submit">
                            ΠΡΟΣΘΗΚΗ
                        </Button>
                    </FormControl>
                </FormGroup>
            </form>
        </Container>
    );
};

export default AddPeople;