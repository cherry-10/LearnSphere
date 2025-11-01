# MongoDB Atlas Setup (Cloud Database - FREE)

Since MongoDB is not installed locally, use MongoDB Atlas cloud database instead!

## Step-by-Step Setup:

### 1. Create MongoDB Atlas Account (5 minutes)

1. Go to: **https://www.mongodb.com/cloud/atlas/register**
2. Sign up with your email (FREE forever!)
3. Verify your email

### 2. Create a Free Cluster (3-5 minutes)

1. Choose **"Build a Database"**
2. Select **"M0 FREE"** option
3. Choose **Provider**: AWS, Google Cloud, or Azure
4. Choose **Region**: Select closest to your location (e.g., Mumbai for India)
5. Click **"Create Cluster"**
6. Wait 3-5 minutes for cluster to be created

### 3. Create Database User

1. Click **"Database Access"** in left sidebar
2. Click **"Add New Database User"**
3. Choose **"Password"** authentication
4. Enter:
   - Username: `learnsphere`
   - Password: `learnsphere123` (or your own password)
5. Set privileges to **"Atlas Admin"**
6. Click **"Add User"**

### 4. Allow Network Access

1. Click **"Network Access"** in left sidebar
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** (for development)
4. Click **"Confirm"**

### 5. Get Connection String

1. Go back to **"Database"** in left sidebar
2. Click **"Connect"** button on your cluster
3. Select **"Connect your application"**
4. Copy the connection string:
   ```
   mongodb+srv://learnsphere:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```

### 6. Update Your .env File

Open `.env` file in your project root and replace the MongoDB URI:

**OLD:**
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/learnsphere
JWT_SECRET=your_jwt_secret_key_change_this_in_production
```

**NEW:**
```env
PORT=5000
MONGODB_URI=mongodb+srv://learnsphere:learnsphere123@cluster0.xxxxx.mongodb.net/learnsphere?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key_change_this_in_production
```

**IMPORTANT:** 
- Replace `<password>` with your actual password (e.g., `learnsphere123`)
- Replace `cluster0.xxxxx` with your actual cluster address
- Add `/learnsphere` before the `?` to specify database name

**Example:**
```env
MONGODB_URI=mongodb+srv://learnsphere:learnsphere123@cluster0.abc123.mongodb.net/learnsphere?retryWrites=true&w=majority
```

---

## Now Start Your Application:

```bash
cd "c:/Users/Dell/OneDrive/ドキュメント/charan teja/application"
npm run dev
```

You should see:
```
✅ MongoDB Connected
🚀 Server running on port 5000
```

---

## Test Sign Up:

1. Go to http://localhost:3000/signup
2. Create an account
3. Should work perfectly! ✅

---

## Advantages of MongoDB Atlas:

✅ **No local installation needed**  
✅ **Always running** (no need to start MongoDB)  
✅ **Free forever** (512 MB storage)  
✅ **Automatic backups**  
✅ **Accessible from anywhere**  
✅ **Production-ready**  

---

## Quick Connection String Format:

```
mongodb+srv://USERNAME:PASSWORD@CLUSTER-ADDRESS/DATABASE-NAME?retryWrites=true&w=majority
```

Example:
```
mongodb+srv://learnsphere:learnsphere123@cluster0.abc123.mongodb.net/learnsphere?retryWrites=true&w=majority
```

Replace:
- `USERNAME` → your database username
- `PASSWORD` → your database password  
- `CLUSTER-ADDRESS` → from Atlas (e.g., cluster0.abc123.mongodb.net)
- `DATABASE-NAME` → learnsphere

---

## Troubleshooting:

### Error: "Authentication failed"
- Check username and password in connection string
- Make sure password doesn't have special characters (or URL encode them)

### Error: "Network error"
- Check Network Access in Atlas - make sure "0.0.0.0/0" is allowed
- Check your internet connection

### Error: "MongooseServerSelectionError"
- Wait a few more minutes for cluster to finish setup
- Check connection string is correct

---

## ✅ That's It!

No need to install MongoDB locally. MongoDB Atlas works perfectly for development and production! 🚀
