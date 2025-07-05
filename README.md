# Simple  Node.js CRUD Application

A full-featured CRUD (Create, Read, Update, Delete) application built with Node.js, Express, MongoDB Atlas, and EJS templating engine. Features a modern responsive UI with Tailwind CSS and complete CI/CD pipeline.

## 🚀 Features

- **Full CRUD Operations**: Create, Read, Update, and Delete users
- **MongoDB Atlas Integration**: Cloud-based database with connection handling
- **Responsive UI**: Modern design with Tailwind CSS and gradient backgrounds
- **RESTful API**: Clean and organized route structure

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas (
- **Frontend**: EJS templating, Tailwind CSS
- **Containerization**: Docker


## 📋 Prerequisites

- Node.js (v18 or higher)
- MongoDB Atlas account
- Docker (optional)
- Git

## 🔧 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/simple-crud-nodejs.git
cd simple-crud-nodejs
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory:
```env
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority
PORT=3000
```

### 4. MongoDB Atlas Configuration
1. Create a MongoDB Atlas account at [mongodb.com](https://www.mongodb.com/)
2. Create a new cluster
3. Create a database user with read/write permissions
4. Add your IP address to the IP whitelist
5. Get your connection string and update the `MONGO_URL` in your `.env` file

### 5. Run the Application
```bash
# Development mode
npm start

# Or with nodemon for development
npm run dev
```

The application will be available at `http://localhost:3000`

## 🐳 Docker Deployment

### Build and Run with Docker
```bash
# Build the Docker image
docker build -t simple-crud-nodejs .

# Run the container
docker run -p 3000:3000 -e MONGO_URL="your-mongodb-connection-string" simple-crud-nodejs
```

### Using Docker Compose (if available)
```bash
docker-compose up --build
```

## 🌐 Deployment on Render

### Steps to Deploy:
1. Fork this repository
2. Connect your GitHub account to Render
3. Create a new Web Service
4. Connect your forked repository
5. Set the following environment variables:
   - `MONGO_URL`: Your MongoDB Atlas connection string
   - `PORT`: 3000 (or leave default)

### Common Deployment Issues:
- **IP Whitelist**: Ensure your MongoDB Atlas cluster allows connections from anywhere (0.0.0.0/0) for cloud deployments
- **Environment Variables**: Double-check your MongoDB connection string
- **Port Configuration**: Render will assign a port automatically

## 📁 Project Structure

```
simple-crud-nodejs/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD pipeline
├── models/
│   └── User.js                 # MongoDB user model
├── views/
│   ├── index.ejs              # Main page template
│   ├── add.ejs                # Add user form
│   └── edit.ejs               # Edit user form
├── public/
│   └── style.css              # Custom styles
├── app.js                     # Main application file
├── Dockerfile                 # Docker configuration
├── package.json               # Dependencies and scripts
└── README.md                  # Project documentation
```

## 🔄 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Display all users |
| GET | `/add` | Show add user form |
| POST | `/add` | Create new user |
| GET | `/edit/:id` | Show edit user form |
| POST | `/edit/:id` | Update user |
| POST | `/delete/:id` | Delete user |


