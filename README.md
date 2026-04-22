# Special Card Backend 🎁

A Node.js + Express backend API for the Special Card web application.

This backend stores user card details in MongoDB Atlas and generates unique shareable links that can be opened later from anywhere.

---

## 🚀 Live API
https://friendship-backend-tlsh.onrender.com

## 🌐 Frontend App
https://friendship-card-ry3y.vercel.app

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- CORS
- dotenv
- Render

---

## ✨ Features

- Create personalized special cards
- Store names, message, and avatar selections
- Generate unique shareable URLs
- Retrieve saved card data by ID
- REST API architecture
- Cloud deployment with Render
- Connected to MongoDB Atlas database

---

## 📂 API Endpoints

### `GET /`
Checks whether backend server is running.

### `POST /create`
Creates and stores a new card, then returns a shareable link.

### `GET /card/:id`
Fetches saved card details using MongoDB ObjectId.

---

## ▶️ Run Locally

```bash
npm install
node server.js
```

##  Developer

**Bhuvaneshwari G** |
B.Sc Computer Science Student | Aspiring Full Stack Developer

