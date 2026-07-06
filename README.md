# Todo API

A simple RESTful Todo API built with Node.js and Express.js.

## Description

This is a RESTful Todo API built using Node.js and Express.js. It allows users to create, read, update, and delete tasks (CRUD operations) through HTTP requests. The project is designed to practice backend fundamentals such as routing, middleware, validation, and REST API design.

## Features

- Create new tasks
- Retrieve all tasks
- Update existing tasks
- Delete tasks
- Input validation with appropriate HTTP status codes
- JSON request and response handling

---

## Tech Stack

- Node.js
- Express.js
- JavaScript

---

## Installation

1. Clone the repository

```bash
git clone https://github.com/Soumyajit-2808/todo-api.git
```

2. Install dependencies

```bash
npm install
```

3. Start the server

```bash
node index.js
```

4. Open your browser or Thunder Client and access:

```
http://localhost:3000
```

---

## API Endpoints

| Method | Endpoint   | Description                       |
| ------ | ---------- | --------------------------------- |
| GET    | /          | Returns the home page             |
| GET    | /about     | Returns information about the API |
| GET    | /tasks     | Returns all tasks                 |
| POST   | /tasks     | Creates a new task                |
| PUT    | /tasks/:id | Updates an existing task          |
| DELETE | /tasks/:id | Deletes an existing task          |

---

## What I Learned

- CRUD operations
- Express.js routing
- Middleware
- Route parameters
- Input validation
- REST API design
- Git workflow
- Code refactoring

---

## Future Improvements

- Store tasks in a PostgreSQL database
- Connect the API to a frontend application
- Add user authentication
- Persist data across server restarts
- Deploy the API to the cloud

---

## Author

Built by Soumyajit Dutta as part of my Backend Engineering Journey.
