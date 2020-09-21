const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());


//create a person
app.post("/people", async (req, res) => {
    try {
        const { fName, lName, age } = req.body;
        const newPerson = await pool.query(
            "INSERT INTO people (fName, lName, age) VALUES($1, $2, $3) RETURNING *",
            [fName, lName, age]
        );
        res.json(newPerson.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//get all people
app.get("/people", async(req, res) => {
    try{
        const allPeople = await pool.query("SELECT * FROM people");
        res.json(allPeople.rows)
    } catch (err) {
        console.error(err.message)
    }
});

//get a person
app.get("/people/:id", async(req, res) => {
    try{
        const { id } = req.params;
        const person = await pool.query("SELECT * FROM people WHERE id = $1", [id]);
        res.json(person.rows[0]);
    } catch (err) {
        console.error(err.message)
    }
});

//update a person
app.put("/people/:id", async(req, res) => {
    try{
        const { id } = req.params;
        const { fName, lName, age } = req.body;
        const updatePerson = await pool.query( 
            "UPDATE people SET fName = $1, lName = $2, age = $3 WHERE id = $4", [fName, lName, age, id]
             );
             res.json("person updated");
    } catch (err) {
        console.error(err.message)
    }
});

//delete a person
app.delete("/people/:id", async(req, res) => {
    try{
        const { id } = req.params;
        const deletePerson = await pool.query("DELETE FROM people WHERE id = $1", [id]);
        res.json("person deleted");
    } catch (err) {
        console.error(err.message)
    }
});

app.listen(5000, () => {
    console.log("server has started on port 5000");
});