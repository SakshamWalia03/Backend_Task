# Backend Assignment

This repository contains the backend code for the Kaizen Que assignment. It is configured to run on Node.js and supports both PostgreSQL and MySQL databases.

## 🌐 Live Server

You can access the live API here:  
🔗 [https://backend-task-1q1m.onrender.com/](https://backend-task-1q1m.onrender.com/)


## Features

- RESTful API server
- PostgreSQL / MySQL database integration
- Environment-based configuration

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn
- PostgreSQL or MySQL database

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/SakshamWalia03/Backend_Task.git
    cd backend-assignment
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3. Set up environment variables:

    The `.env` file is already provided. It includes:
    - `PORT`: The port the server will run on (default: 9000)
    - `DB_NAME`, `DB_USER`, `DB_PASS`, `DB_HOST`, `DB_PORT`: MySQL database configuration
    - Optionally, `DATABASE_URL`: PostgreSQL connection string
    - Optionally, `DB_DIALECT`: Set to `'mysql'` or `'postgres'` as needed

    Example `.env`:
    ```env
    # Database configuration
    DB_NAME=tempo
    DB_USER=temp1
    DB_PASS=temp@123
    DB_HOST=localhost
    DB_PORT=3306
    DB_DIALECT=mysql

    # App port
    PORT=9000
    ```

    For PostgreSQL, use:
    ```env
    DATABASE_URL=postgresql://<username>:<password>@<host>/<database>
    PORT=9000
    ```

### Running the Server

```bash
npm start
# or
yarn start
```

The server will start on the port specified in `.env` (default: 9000).

## API Endpoints

All endpoints are prefixed with `/api`.

### 1. Submit Form Data

- **POST** `/api/form`
- **Description:** Submit form data to the server.

**Request Example:**
```bash
curl -X POST http://localhost:9000/api/form \
  -H "Content-Type: application/json" \
  -d '{"fullName": "Jam1", "email": "jam1@gmail.com", "message": "abc"}'
```

**Request Body Example:**
```json
{
  "fullName": "Jam1",
  "email": "jam1@gmail.com",
  "message": "abc"
}
```

**Response Example:**
```json
{
  "id": 1,
  "fullName": "Jam1",
  "email": "jam1@gmail.com",
  "message": "abc",
  "createdAt": "2025-07-28T16:25:10.449Z",
  "updatedAt": "2025-07-28T16:25:10.449Z"
}
```

### 2. Get All Form Submissions

- **GET** `/api/form`
- **Description:** Retrieve all submitted form data.

**Request Example:**
```bash
curl http://localhost:9000/api/form
```

**Response Example:**
```json
[
  {
    "id": 1,
    "fullName": "Jam1",
    "email": "jam1@gmail.com",
    "message": "abc",
    "createdAt": "2025-07-28T16:25:10.449Z",
    "updatedAt": "2025-07-28T16:25:10.449Z"
  }
]

