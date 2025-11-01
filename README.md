# Learn Sphere - Education Platform

A complete, responsive education web application similar to Great Learning, featuring sign-up, login, course catalog, and learner analytics.

## Features

- 🔐 User Authentication (Sign Up / Login with JWT)
- 📚 Comprehensive Course Catalog
- 📊 Learner Analytics and Progress Tracking
- 🎓 Detailed Course Information with Modules
- 💻 Responsive Design (Mobile, Tablet, Desktop)
- ⭐ Rating System
- 🎨 Modern UI with Tailwind CSS

## Tech Stack

- **Frontend**: React 18, React Router, Tailwind CSS, Lucide Icons
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   cd application
   ```

2. **Install dependencies**
   ```bash
   npm run install-all
   ```

3. **Configure environment variables**
   - Edit `.env` file in the root directory
   - Update `MONGODB_URI` with your MongoDB connection string
   - Change `JWT_SECRET` to a secure random string

4. **Start MongoDB**
   ```bash
   # If using local MongoDB
   mongod
   ```

5. **Run the application**
   ```bash
   # Development mode (both frontend and backend)
   npm run dev

   # Or run separately:
   # Backend only
   npm run server

   # Frontend only (in client directory)
   cd client && npm start
   ```

6. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## Available Courses

1. **Artificial Intelligence** - Foundations of AI, search algorithms, NLP, computer vision, reinforcement learning
2. **Machine Learning** - Supervised/unsupervised learning, model evaluation, deployment
3. **Quantum Computing** - Complete 15-module syllabus with hands-on exercises
4. **Python Programming** - From basics to OOP and popular libraries
5. **Generative AI Prompt Engineering** - LLM fine-tuning, embeddings, RAG
6. **Data Science with Python** - Data wrangling, visualization, statistics
7. **Data Analytics** - Excel to Power BI, SQL, dashboards

## Project Structure

```
learn-sphere/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── context/       # Context API
│   │   ├── utils/         # Utility functions
│   │   └── data/          # Course data
├── server/                # Express backend
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   └── index.js          # Server entry point
└── package.json
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Courses
- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get course by ID
- `POST /api/courses/:id/enroll` - Enroll in course (protected)

### User
- `GET /api/user/enrolled` - Get enrolled courses (protected)
- `PUT /api/user/progress/:courseId` - Update course progress (protected)

## Default Credentials (for testing)

After running the seed script:
- Email: student@learnsphere.com
- Password: Student123!

## License

MIT License
