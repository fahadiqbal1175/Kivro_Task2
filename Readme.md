# Book Management API

A simple REST API built with **Node.js**, **Express.js**, and **MongoDB** using **Mongoose**. This project is part of Task 2: *"REST API with Database"* — where the goal is to connect APIs to a database and perform CRUD operations.

This API manages a collection of books with the following features:

* Add new books
* Get all books
* Get a single book by ID
* Delete a book

---

## ⭐ Features

* Express.js server
* MongoDB database connection using Mongoose
* Book Schema with validation
* REST API routes:

  * `GET /books`
  * `GET /books/:id`
  * `POST /books`
  * `DELETE /books/:id`
* JSON responses for all routes
* Error handling for invalid IDs, missing fields, and database failures

---

## 📁 Project Structure

```
project-folder/
├─ routes/
│  └─ book.js
├─ models/
│  └─ Book.js
├─ index.js
├─ package.json
├─ .env
└─ README.md
```

---

## 🔧 Technologies Used

* **Node.js**
* **Express.js**
* **MongoDB Atlas / Local MongoDB**
* **Mongoose ORM**
* **dotenv for environment variables**

---

## 📦 Installation & Setup

### 1. Clone the repository

```bash
git clone <your-repo-link>
cd project-folder
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

Inside the project root, create a file named `.env`:

```
MONGODB_URI=your_mongodb_connection_string
PORT=3000
```

### 4. Start the server

```bash
node index.js
```

You should see:

```
Connected to MongoDB
Server running on http://localhost:3000
```

---

## 🚀 API Endpoints

### 📌 **1. Get all books**

**GET** `/books`

* Returns a list of all books in JSON format.

Response example:

```json
[
  {
    "_id": "65a8d5f3e134...",
    "title": "Atomic Habits",
    "author": "James Clear"
  }
]
```

---

### 📌 **2. Get book by ID**

**GET** `/books/:id`

* Returns one book matching the given ID.

If ID is invalid → `400`
If book not found → `404`

---

### 📌 **3. Add a new book**

**POST** `/books`

* Body type: **JSON**

Example body:

```json
{
  "title": "Atomic Habits",
  "author": "James Clear",
  "publishedDate": "2018-10-16",
  "pages": 320,
  "genre": "Self-help"
}
```

Successful response: `201 Created`.

---

### 📌 **4. Delete a book**

**DELETE** `/books/:id`

* Deletes one book from the database.

Response:

```json
{
  "message": "Book deleted",
  "book": {...}
}
```

---

## 🧪 Testing with Postman

1. Open Postman.
2. Create a **POST** request → `http://localhost:3000/books`
3. Add JSON body to create your first book.
4. Test **GET** routes to see your data.
5. Use **DELETE** with the ID to remove a book.

Your database starts empty — so you must use **POST** first to insert data.

---


## 📄 License

This project is open-source and free to use for learning.

---

## 👤 Author

fahadiqbal1175


