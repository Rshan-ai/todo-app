# 📝 To-Do List Application

A simple, clean, and functional **To-Do List Web Application** built
using\
**HTML, CSS, JavaScript, and Node.js (JSON server for storage)**.

This project is designed as a mini-project demonstration for CRUD
operations and frontend--backend interaction.

------------------------------------------------------------------------

## 🚀 Features

-   Add new tasks
-   Mark tasks as completed
-   Delete tasks
-   Persistent storage using `db.json`
-   Simple and clean user interface
-   Lightweight and easy to run locally

------------------------------------------------------------------------

## 📂 Project Structure

    todo-app/
    ├── app.js
    ├── index.html
    ├── styles.css
    ├── db.json
    ├── package.json
    └── Mini Project Test_ To-Do List Application.pdf

------------------------------------------------------------------------

## 🛠️ Tech Stack

### **Frontend**

-   HTML5\
-   CSS3\
-   JavaScript (Vanilla)

### **Backend**

-   Node.js
-   JSON Server

------------------------------------------------------------------------

## 🔧 Installation & Setup

### 1️⃣ Install dependencies

Inside the project folder:

``` bash
npm install
```

### 2️⃣ Start JSON Server

This project uses **JSON Server** to store and retrieve tasks.

Run:

``` bash
npx json-server --watch db.json --port 3000
```

Backend runs at:

    http://localhost:3000/tasks

### 3️⃣ Open the Application

Open the `index.html` in your browser.

------------------------------------------------------------------------

## 📌 API Endpoints

  Method   Endpoint     Description
  -------- ------------ ----------------
  GET      /tasks       Get all tasks
  POST     /tasks       Add a new task
  PATCH    /tasks/:id   Update a task
  DELETE   /tasks/:id   Delete a task

------------------------------------------------------------------------

## ▶️ Usage

1.  Type a task into the input field\
2.  Click **Add**\
3.  Your task appears in the list\
4.  Click the checkbox to mark it complete\
5.  Click the delete icon to remove a task

------------------------------------------------------------------------

## 🧩 File Descriptions

### **index.html**

UI layout of the application.

### **styles.css**

Styling and layout.

### **app.js**

Handles loading, adding, updating, and deleting tasks using JSON Server.

### **db.json**

Stores tasks.

------------------------------------------------------------------------

## 📄 License

Open-source.

## 👤 Author

Rshan Goytom
