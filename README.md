<p align="center">

<a href="https://github.com/Harshal-max/mern-social-backend">
<img src="https://img.shields.io/badge/GITHUB-REPOSITORY-black?style=for-the-badge" />
</a>

</p>

# 🌐 MERN Social Backend

A scalable backend API for a modern social media platform built using the MERN stack. It provides secure authentication, user management, post creation, likes, comments, and social interactions through RESTful APIs.

Designed with clean architecture and modular code, this backend serves as the foundation for a complete social networking application.

---

# ✨ Features

## 🔐 Authentication

- User Registration
- Secure Login
- JWT Authentication
- Password Hashing using bcrypt
- Protected Routes
- Authorization Middleware

---

## 👤 User Management

- Create User Profile
- Update Profile
- View User Details
- Search Users
- Follow / Unfollow Users *(if implemented)*

---

## 📝 Posts

- Create Posts
- Update Posts
- Delete Posts
- View All Posts
- View User Posts

---

## ❤️ Social Interactions

- Like / Unlike Posts
- Comment on Posts
- Delete Comments
- Fetch Comments
- Timeline Feed

---

## 🔒 Security

- JWT Token Authentication
- Password Encryption
- Input Validation
- Error Handling
- Secure REST APIs

---

# 🛠 Tech Stack

## Backend

- Node.js
- Express.js

## Database

- MongoDB
- Mongoose

## Authentication

- JWT
- bcrypt

## API Testing

- Postman

---

# 📁 Project Structure

```text
mern-social-backend
│
├── controllers
├── middleware
├── models
├── routes
├── config
├── utils
├── uploads
├── server.js
└── package.json
```

---

# 🚀 Setup Instructions

## Prerequisites

- Node.js
- MongoDB Atlas (or Local MongoDB)

---

## 1. Clone Repository

```bash
git clone https://github.com/Harshal-max/mern-social-backend.git
cd mern-social-backend
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Configure Environment Variables

Create a `.env` file.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

## 4. Run Development Server

```bash
npm run dev
```

or

```bash
npm start
```

---

The backend will run on

```text
http://localhost:5000
```

---

# 📡 API Modules

## Authentication

- Register User
- Login User
- Verify JWT

---

## Users

- Get User
- Update User
- Search Users

---

## Posts

- Create Post
- Get Posts
- Update Post
- Delete Post

---

## Likes & Comments

- Like / Unlike Post
- Add Comment
- Delete Comment
- Fetch Comments

---

# 🧪 API Testing

Use the included Postman Collection to test all API endpoints.

---

# 📸 Screenshots

Backend project.

You can add screenshots of:

- Postman API Testing
- MongoDB Collections
- API Responses

---

# 🔮 Future Improvements

- Google Authentication
- Email Verification
- Password Reset
- Image Upload using Cloudinary
- Real-time Notifications
- WebSocket Chat
- API Documentation using Swagger

---

# 👨‍💻 Author

**Harshal Chavan**

📧 harshalchavan822@gmail.com

💼 LinkedIn

https://www.linkedin.com/in/harshal-chavan-b873aa28a

🐙 GitHub

https://github.com/Harshal-max

---

## ⭐ If you found this project useful, don't forget to star the repository.
