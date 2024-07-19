# ToDoList Project

## Overview
The ToDoList project is a web application designed to help users manage their tasks efficiently. Built with JavaScript and leveraging the power of Node.js, Express, and MongoDB through Mongoose, it offers a simple yet powerful interface for task management.

## Features
- **Task Management**: Users can add, edit, and delete tasks.
- **Prioritization**: Tasks can be prioritized as High, Medium, or Low.
- **Due Dates**: Each task can have a due date set to keep track of deadlines.
- **Completion Status**: Tasks can be marked as completed or pending.

## Project Structure

```
ToDoList/
├── models/
│   └── toDo.js # Mongoose model for ToDo tasks
├── public/
│   ├── css/ # CSS files for styling
│   ├── js/ # JavaScript files
│   └── images/ # Image files
├── views/
│   ├── toDoList/
│   │   ├── index.ejs # Main page showing all tasks
│   │   └── new.ejs # Form to add a new task
│   └── partials/
│       └── ... # EJS partials like header, footer
├── index.js # Entry point of the application
└── package.json # Project metadata and dependencies
```


## Setup and Installation
1. **Clone the Repository**: `git clone git@github.com:wmalhojay/ToDoListapp.git`
2. **Install Dependencies**
      Navigate to the project directory and run: `npm install`
3. **Start the Server**: `npm start`

The application will be running on `http://localhost:3000`.

## Usage
- **Adding a Task**: Navigate to the `/toDoList/new` to add a new task.
- **Editing a Task**: Click on the "Edit" button next to any task to modify it.
- **Deleting a Task**: Click on the "Delete" button to remove a task from the list.

## Technologies Used
- **Backend**: Node.js, Express
- **Database**: MongoDB with Mongoose for ORM
- **Frontend**: EJS for templating, Bootstrap for styling

## Contributing
Contributions to the ToDoList project are welcome. Please follow the standard fork and pull request workflow.

## License
This project is licensed under the MIT License - see the LICENSE file for details.