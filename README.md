# Blogus - A Full-Stack Blogging Platform

**Blogus** is a full-stack blogging platform that allows users to create, manage, and share blogs. It features user authentication, blog CRUD operations, and a responsive design. The application is built using modern front-end and back-end frameworks and deployed to cloud platforms.

---

## Live Deployment

- **Frontend (Vercel)**: https://blogus-lime.vercel.app 
- **Backend (Render)**: https://blogus-iukr.onrender.com

> Replace these with your actual URLs after deployment.

---

## Features

### Front-End
- Signup/Login page with authentication
- Blog creation page (restricted to logged-in users)
- Blog listing page (public, with pagination)
- Blog detail page (public, displays full content)
- Edit and delete options (available only to blog authors)
- Responsive design using Bootstrap

### Back-End
- RESTful API using Express.js
- JWT-based authentication
- MongoDB for data persistence
- Upload blog images
- Input validation and error handling

---

## 🛠 Technologies Used

### Front-End
- React.js (Create React App)
- React Router DOM
- Bootstrap

### Back-End
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (jsonwebtoken)
- dotenv, cors, morgan, formidable, express-validator

---

## Folder Structure

```
Blogus/
├── client/
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   ├── pages/            # Pages (Signup, Login, Blog Listing, etc.)
│   │   ├── App.js            # Main app component
│   │   └── index.js          # Entry point
│   └── package.json          # Frontend dependencies
├── server/
│   ├── controllers/          # API logic
│   ├── models/               # Mongoose models
│   ├── routes/               # API routes
│   ├── server.js             # Entry point for the backend
│   └── package.json          # Backend dependencies
├── README.md                 # Project documentation
```

## 🚀 Getting Started Locally

### Prerequisites

- Node.js and npm
- MongoDB (local or Atlas)

### 1. Clone the Repository

```bash
git clone https://github.com/NematSiddique/blogus.git
cd blogus
```

---

### 2. Set Up the Backend

```bash
cd server
npm install
```

Create a `.env` file in `server/`:

```env
PORT=8000
MONGO_URI=your_mongo_db_uri
JWT_SECRET=your_jwt_secret
```

Start the server:

```bash
npm start
```

### 3. Set Up the Frontend

```bash
cd ../client
npm install
npm start
```

---

## Credits

Built with React, Express, and MongoDB.
