BookShelf API
Overview
BookShelf API is a beginner-friendly RESTful API built using Node.js and Express.js to manage a simple directory of books. It supports basic CRUD operations (GET, POST, PUT, DELETE) and can be used as a foundation to understand REST APIs and backend development.

Features
Get all books or a specific book by ID

Add new books

Update existing book details

Delete books from the directory

Optionally switch between in-memory JSON storage or connect to a database like MongoDB

Setup Instructions
Clone this repository

Run npm install to install dependencies

Run npm run start:dev for development (with auto-reload via nodemon)

Run npm run start for production

API Endpoints
GET /books – Get all books

GET /books/:id – Get a specific book by ID

POST /books – Add a new book

PUT /books/:id – Update an existing book

DELETE /books/:id – Delete a book

