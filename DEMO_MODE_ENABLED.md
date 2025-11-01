# ✅ DEMO MODE ENABLED - Explore Full App Without MongoDB!

## What's Enabled:

You can now explore the ENTIRE application including all authenticated pages WITHOUT setting up MongoDB!

### ✅ What You Can Do:

**1. Sign Up (Demo)**
- Go to Sign Up page
- Enter any name, email, password
- Creates a demo account
- Redirects to home

**2. Login (Demo)**
- Go to Login page
- Enter any email and password
- Logs in as "Demo User"
- Comes with 3 sample enrolled courses

**3. View Profile**
- See your profile information
- Edit all fields (name, education, university, course, phone, bio)
- Save changes (stored in browser)
- All changes persist until you clear browser data

**4. My Courses (My Learning)**
- See 3 demo enrolled courses:
  - Artificial Intelligence (45% progress)
  - Machine Learning (80% progress)
  - Python Programming (100% complete)
- View progress bars
- See course details
- Track learning journey

**5. Browse All Courses**
- See all 33 courses
- View course details
- Check pricing
- See instructors (Yasaswi, Sravani, Anil, Sai Krishna, Charan)

**6. All Other Pages**
- Home page
- Courses page
- Help Center (with your contact: nexthubtechnologiesp@gmail.com, +91 6302834343)
- Footer with contact info

---

## How to Run:

### Open Terminal and run:

```bash
cd "c:/Users/Dell/OneDrive/ドキュメント/charan teja/application/client"
npm start
```

**That's it!** The browser will open at http://localhost:3000

---

## Test the Demo:

### 1. Sign Up
1. Go to http://localhost:3000/signup
2. Enter:
   - Name: Your Name
   - Email: test@example.com
   - Password: test123
   - Confirm Password: test123
3. Click "Create Account"
4. ✅ You're logged in!

### 2. Login
1. Go to http://localhost:3000/login
2. Enter ANY email and password
3. Click "Sign In"
4. ✅ Logged in as "Demo User" with 3 enrolled courses!

### 3. View Profile
1. Click your name (top right)
2. Click "Profile"
3. See your information
4. Click "Edit Profile"
5. Change education, university, etc.
6. Click "Save Changes"
7. ✅ Profile updated!

### 4. My Courses
1. Click "My Courses" in navbar
2. See 3 enrolled courses
3. See progress bars
4. ✅ View your learning progress!

---

## Demo User Details (for Login):

When you login with ANY credentials, you get:

**Name:** Demo User  
**Email:** (whatever you enter)  
**Education:** Bachelor's Degree  
**University:** Demo University  
**Course Studying:** Computer Science  
**Phone:** +91 6302834343  
**Bio:** This is a demo account. Set up MongoDB to use real authentication.

**Enrolled Courses:**
- Artificial Intelligence - 45% complete
- Machine Learning - 80% complete
- Python Programming - 100% complete (Certificate available!)

---

## What's Stored:

Everything is stored in your browser's localStorage:
- Your login token
- Your profile information
- Your enrolled courses
- Your progress

**Clear browser cache** to reset everything and start fresh!

---

## When MongoDB is Set Up:

When you're ready to connect real MongoDB:

1. Set up MongoDB Atlas
2. Update `.env` file with connection string
3. Uncomment the original code in `AuthContext.js`
4. Comment out the DEMO MODE sections
5. Run `npm run dev` (both frontend and backend)

**All the demo code is clearly marked with `// DEMO MODE` comments!**

---

## Files Modified for Demo Mode:

1. ✅ `client/src/context/AuthContext.js`
   - Added demo login/register
   - Uses localStorage instead of API

2. ✅ `client/src/pages/ProfilePage.js`
   - Reads from localStorage
   - Saves to localStorage

3. ✅ `client/src/pages/MyCoursesPage.js`
   - Gets enrolled courses from localStorage
   - Shows demo courses with progress

---

## ✅ Everything is Ready!

**Just run:**
```bash
cd client
npm start
```

**Then explore:**
- Sign up with any details
- Login with any credentials
- Edit your profile
- See your enrolled courses
- Browse all 33 courses
- View contact information

**No MongoDB needed to explore the full application! 🎉**

---

## Notes:

- Data persists in browser until you clear cache
- All features work except actual database storage
- Perfect for testing UI and user flow
- When ready, just set up MongoDB Atlas and switch to real backend

**Enjoy exploring your Learn Sphere platform! 🚀📚**
