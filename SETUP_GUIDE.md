# Learn Sphere - Complete Setup Guide

## 🚀 Quick Start

Follow these steps to get your Learn Sphere application up and running.

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (local or Atlas) - [Download](https://www.mongodb.com/try/download/community)
- **npm** or **yarn** package manager
- **Git** (optional)

### Step 1: Install Dependencies

Open your terminal in the project root directory and run:

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
cd ..
```

### Step 2: Configure Environment Variables

The `.env` file is already created in the root directory. Update it with your settings:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/learnsphere
JWT_SECRET=your_jwt_secret_key_change_this_in_production
NODE_ENV=development
```

**Important:**
- If using MongoDB Atlas, replace `MONGODB_URI` with your Atlas connection string
- Change `JWT_SECRET` to a secure random string for production

### Step 3: Start MongoDB

#### Local MongoDB:
```bash
# Windows
mongod

# macOS/Linux
sudo systemctl start mongod
```

#### MongoDB Atlas:
If using MongoDB Atlas, ensure your connection string in `.env` is correct and your IP is whitelisted.

### Step 4: Start the Application

#### Option A: Run Both Frontend and Backend Concurrently (Recommended)
```bash
npm run dev
```

This will start:
- Backend server on: http://localhost:5000
- Frontend React app on: http://localhost:3000

#### Option B: Run Separately

**Terminal 1 - Backend:**
```bash
npm run server
```

**Terminal 2 - Frontend:**
```bash
cd client
npm start
```

### Step 5: Access the Application

Open your browser and navigate to:
```
http://localhost:3000
```

## 🎓 First Steps

### 1. Create an Account
- Click "Sign Up" in the navigation bar
- Fill in your details (name, email, password)
- Click "Create Account"

### 2. Explore Courses
- Navigate to "Courses" page
- Browse the 7 available courses
- Use filters to find courses by category or level

### 3. Enroll in a Course
- Click on any course card to view details
- Review the course modules, projects, and certification
- Click "Enroll Now" to start learning

### 4. Track Your Progress
- Go to "My Courses" to see enrolled courses
- Resume learning from where you left off
- Track your progress for each course

## 📁 Project Structure

```
learn-sphere/
├── client/                     # React frontend
│   ├── public/                # Static files
│   ├── src/
│   │   ├── components/        # Reusable components
│   │   │   ├── Navbar.js
│   │   │   ├── Footer.js
│   │   │   └── CourseCard.js
│   │   ├── pages/            # Page components
│   │   │   ├── HomePage.js
│   │   │   ├── LoginPage.js
│   │   │   ├── SignUpPage.js
│   │   │   ├── CoursesPage.js
│   │   │   ├── CourseInfoPage.js
│   │   │   ├── MyCoursesPage.js
│   │   │   ├── ProfilePage.js
│   │   │   ├── SettingsPage.js
│   │   │   └── HelpCenterPage.js
│   │   ├── context/          # React Context (Auth)
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── tailwind.config.js
├── server/                    # Express backend
│   ├── models/               # MongoDB models
│   │   └── User.js
│   ├── routes/               # API routes
│   │   ├── auth.js
│   │   ├── courses.js
│   │   └── user.js
│   ├── middleware/           # Custom middleware
│   │   └── auth.js
│   ├── data/                 # Course data
│   │   └── courses.js
│   └── index.js              # Server entry point
├── .env                      # Environment variables
├── .gitignore
├── package.json
└── README.md
```

## 🎨 Features Overview

### Authentication
- ✅ Sign Up with email/password
- ✅ Login with validation
- ✅ JWT-based authentication
- ✅ Protected routes
- ✅ Social login UI (Google, GitHub)

### Course Management
- ✅ 7 comprehensive courses (AI, ML, Python, Data Science, etc.)
- ✅ Detailed course info with tabs
- ✅ Module breakdown with hands-on exercises
- ✅ Course enrollment system
- ✅ Progress tracking

### User Dashboard
- ✅ My Courses page
- ✅ Progress bars and statistics
- ✅ Certificate download (UI ready)
- ✅ Profile management
- ✅ Settings page

### UI/UX
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Modern gradient color scheme
- ✅ Smooth animations
- ✅ Card hover effects
- ✅ Sticky navigation
- ✅ Interactive components

## 🔧 Available Scripts

### Root Directory
```bash
npm run dev          # Run both frontend and backend
npm run server       # Run backend only
npm run client       # Run frontend only (from root)
npm run install-all  # Install all dependencies
```

### Client Directory
```bash
npm start            # Start React development server
npm build            # Build for production
npm test             # Run tests
```

## 📚 Course Catalog

The platform includes 7 comprehensive courses:

1. **Artificial Intelligence** - 8 modules, Intermediate level
2. **Machine Learning** - 8 modules, Intermediate level
3. **Python Programming** - 9 modules, Beginner level
4. **Data Science with Python** - 9 modules, Intermediate level
5. **Data Analytics** - 8 modules, Beginner level
6. **Generative AI Prompt Engineering** - 8 modules, Intermediate level
7. **Quantum Computing** - 15 modules, Advanced level (full syllabus as requested)

Each course includes:
- Detailed module breakdown
- Hands-on exercises
- Real-world projects
- Industry certification
- Prerequisites list
- Learning outcomes

## 🐛 Troubleshooting

### MongoDB Connection Issues
```bash
# Check if MongoDB is running
mongod --version

# Start MongoDB service
# Windows: mongod
# macOS/Linux: sudo systemctl start mongod
```

### Port Already in Use
```bash
# Change PORT in .env file
# Or kill the process using the port
# Windows: netstat -ano | findstr :5000
# macOS/Linux: lsof -ti:5000 | xargs kill
```

### React Build Issues
```bash
# Clear cache and reinstall
cd client
rm -rf node_modules package-lock.json
npm install
```

### CORS Issues
Ensure the backend server is running on port 5000 and the proxy is set correctly in `client/package.json`.

## 🌐 Deployment

### Frontend (Netlify/Vercel)
```bash
cd client
npm run build
# Deploy the 'build' folder
```

### Backend (Heroku/Railway)
```bash
# Ensure all environment variables are set
# Push to your hosting platform
```

### Environment Variables for Production
```env
PORT=5000
MONGODB_URI=your_production_mongodb_uri
JWT_SECRET=your_production_jwt_secret
NODE_ENV=production
```

## 📞 Support

If you encounter any issues:
1. Check this setup guide
2. Review error messages in the console
3. Ensure all dependencies are installed
4. Verify MongoDB is running
5. Check environment variables

## 🎉 You're All Set!

Your Learn Sphere application is now ready to use. Happy learning! 🚀
