const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

const PORT = 5000;

//middleware
app.use(express.json());
app.use(cors());

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));

//ROUTES

//insert a todo
app.post("/todos", async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query("INSERT INTO todos (description) VALUES ($1) RETURNING *", [description]);
        res.json(newTodo.rows);
    } catch (error) {
        console.error(error.message);
    }
})

//get all todos
app.get("/todos", async (req, res) => {
    try {
        const getTodos = await pool.query("SELECT * FROM todos ORDER BY tid");
        res.json(getTodos.rows);
    } catch (error) {
        console.error(error.message);
    }
})

//update todo
app.put("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateTodo = await pool.query("UPDATE todos SET description = $1 WHERE tid = $2", [description, id]);
        res.json(updateTodo);
    } catch (error) {
        console.error(error.message);
    }
})

//delete todo
app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query("DELETE FROM todos WHERE tid = $1", [id]);
        res.json(deleteTodo);
    } catch (error) {
        console.error(error.message);
    }
})