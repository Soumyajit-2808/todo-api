const express = require("express");
const app = express();

app.use(express.json());

const PORT = 3000;

let nextId = 3;

let homeVisits = 0;
let aboutVisits = 0;
let tasksVisits = 0;

let tasks = [
	{
		id: 1,
		name: "Learn Express",
	},
	{
		id: 2,
		name: "Build Todo Api",
	},
];

//Home Routes

app.get("/", (req, res) => {
	homeVisits++;
	console.log(`Someone visited the home page! ${homeVisits}`);
	res.send("Hello World");
});

app.get("/about", (req, res) => {
	aboutVisits++;
	console.log(`Someone visited about page! ${aboutVisits}`);
	res.send("This is the about page!");
});

app.get("/tasks", (req, res) => {
	tasksVisits++;
	console.log(`Someone visited tasks page! ${tasksVisits}`);
	res.json(tasks);
});

//Task Routes

app.post("/tasks", (req, res) => {
	if (!req.body.name) {
		return res.status(400).json({
			error: "Task name is required",
		});
	}
	const newTask = {
		id: nextId,
		name: req.body.name,
	};
	tasks.push(newTask);
	nextId++;
	res.json(newTask);
});

app.put("/tasks/:id", (req, res) => {
	const id = Number(req.params.id);

	const index = tasks.findIndex((task) => task.id === id);

	if (index === -1) {
		return res.status(404).json({
			error: "Task not found",
		});
	}

	if (!req.body.name) {
		return res.status(400).json({
			error: "Task name is required",
		});
	}

	tasks[index].name = req.body.name;

	res.json(tasks[index]);
});

app.delete("/tasks/:id", (req, res) => {
	const id = Number(req.params.id);

	const index = tasks.findIndex((task) => task.id === id);

	if (index === -1) {
		return res.status(404).json({
			error: "Task not found",
		});
	}

	const deletedTask = tasks.splice(index, 1);

	res.json(deletedTask[0]);
});

//Server

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
