# Learn Sphere - Mobile App (APK) Conversion Guide

## 📱 Converting Web App to Android APK

We'll use **Capacitor** to convert your React web app into a native Android app.

## Prerequisites

Before starting, install:
1. **Node.js** (already installed ✓)
2. **Android Studio** - [Download here](https://developer.android.com/studio)
3. **Java JDK 11 or higher** - [Download here](https://www.oracle.com/java/technologies/downloads/)

## Step-by-Step Conversion

### Step 1: Install Capacitor

Open terminal in the `client` folder:

```bash
cd client
npm install @capacitor/core @capacitor/cli
npm install @capacitor/android
```

### Step 2: Initialize Capacitor

```bash
npx cap init "Learn Sphere" "com.learnsphere.app" --web-dir=build
```

This creates:
- `capacitor.config.json` - Capacitor configuration
- Android project files

### Step 3: Build the React App

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Step 4: Add Android Platform

```bash
npx cap add android
```

This creates the `android` folder with the native Android project.

### Step 5: Update API URLs

Since mobile app can't use `localhost`, you need to update the API base URL.

Create `client/src/config.js`:

```javascript
export const API_BASE_URL = 
  process.env.NODE_ENV === 'development' 
    ? 'http://localhost:5000' 
    : 'https://your-backend-url.com'; // Replace with your deployed backend
```

Then update `AuthContext.js` and API calls to use this URL.

### Step 6: Configure Capacitor

Edit `client/capacitor.config.json`:

```json
{
  "appId": "com.learnsphere.app",
  "appName": "Learn Sphere",
  "webDir": "build",
  "bundledWebRuntime": false,
  "server": {
    "androidScheme": "https"
  }
}
```

### Step 7: Sync and Copy Web Assets

```bash
npx cap sync android
npx cap copy android
```

### Step 8: Open in Android Studio

```bash
npx cap open android
```

This opens the project in Android Studio.

### Step 9: Build APK in Android Studio

1. In Android Studio, go to **Build > Build Bundle(s) / APK(s) > Build APK(s)**
2. Wait for the build to complete
3. Click "locate" to find your APK file
4. APK will be in: `client/android/app/build/outputs/apk/debug/app-debug.apk`

### Step 10: Install on Android Device

**Option A: Using ADB**
```bash
adb install app-debug.apk
```

**Option B: Transfer APK to phone and install manually**

---

## 🚀 Quick Setup Script

I'll create scripts to automate this process.

### For Development Build:

```bash
# Install Capacitor
cd client
npm install @capacitor/core @capacitor/cli @capacitor/android

# Initialize Capacitor
npx cap init "Learn Sphere" "com.learnsphere.app" --web-dir=build

# Build React app
npm run build

# Add Android platform
npx cap add android

# Sync
npx cap sync android

# Open in Android Studio
npx cap open android
```

---

## 📝 Important Notes

### 1. Backend API
Your backend needs to be deployed online (not localhost). Options:
- **Heroku** (free tier available)
- **Railway** (free tier)
- **Render** (free tier)
- **AWS/Azure/Google Cloud**

### 2. App Permissions

Add required permissions in `android/app/src/main/AndroidManifest.xml`:

```xml
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```

### 3. App Icon

Replace icons in:
- `android/app/src/main/res/mipmap-*`

Use this tool to generate icons: [Icon Generator](https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html)

### 4. Splash Screen

Capacitor includes a splash screen plugin:

```bash
npm install @capacitor/splash-screen
```

---

## 🔧 Troubleshooting

### Issue: "localhost" not accessible
**Solution**: Deploy your backend to a cloud service and update API URLs.

### Issue: CORS errors
**Solution**: Update backend CORS settings to allow your app's origin.

### Issue: Build fails
**Solution**: Ensure Android Studio and JDK are properly installed.

---

## 📦 Building Release APK

For production release:

1. Generate signing key:
```bash
keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

2. In Android Studio:
   - **Build > Generate Signed Bundle / APK**
   - Select **APK**
   - Choose your keystore
   - Build release APK

3. APK location: `client/android/app/build/outputs/apk/release/app-release.apk`

---

## 🎨 Mobile-Specific Optimizations

### 1. Responsive Design
The app already uses Tailwind's responsive classes, so it will adapt to mobile screens.

### 2. Touch Optimization
Add to `index.css`:

```css
/* Better touch targets */
button, a {
  min-height: 44px;
  min-width: 44px;
}

/* Disable text selection on touch */
* {
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
}

input, textarea {
  -webkit-user-select: text;
  user-select: text;
}
```

### 3. Safe Area Handling
Install safe area plugin:

```bash
npm install @capacitor/status-bar
```

---

## 📲 Alternative: Progressive Web App (PWA)

If you want a simpler solution without Android Studio:

### Enable PWA in React:

1. The app already has `manifest.json`
2. Add service worker for offline support
3. Users can "Add to Home Screen" from their browser
4. Works like a native app but through the browser

---

## 🚀 Publishing to Google Play Store

Once you have a release APK:

1. Create a Google Play Developer account ($25 one-time fee)
2. Create a new app listing
3. Upload your release APK
4. Fill in app details, screenshots, description
5. Submit for review
6. App goes live in 1-3 days after approval

---

## ✅ Checklist

- [ ] Install Android Studio
- [ ] Install JDK
- [ ] Install Capacitor packages
- [ ] Build React app
- [ ] Add Android platform
- [ ] Deploy backend to cloud
- [ ] Update API URLs in code
- [ ] Build APK in Android Studio
- [ ] Test on Android device
- [ ] Generate release APK (for production)
- [ ] Publish to Play Store (optional)

---

## 📞 Need Help?

Common issues and solutions are in the troubleshooting section. For detailed Capacitor docs: https://capacitorjs.com/docs

---

**Your web app is now ready to be converted to a mobile app! 📱**
