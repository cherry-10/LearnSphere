# 📱 Quick Start - Convert to Mobile APK

## Option 1: Automated Script (Easiest)

### Prerequisites
1. **Download and Install Android Studio**: https://developer.android.com/studio
2. **Install Java JDK**: https://www.oracle.com/java/technologies/downloads/

### Steps
1. Double-click `build-apk.bat`
2. Wait for the script to complete
3. Android Studio will open automatically
4. In Android Studio:
   - Wait for Gradle sync to finish (bottom status bar)
   - Click **Build** → **Build Bundle(s) / APK(s)** → **Build APK(s)**
   - Wait 5-10 minutes for first build
   - Click **"locate"** link to find your APK

Your APK will be at:
```
client\android\app\build\outputs\apk\debug\app-debug.apk
```

---

## Option 2: Manual Steps

### Step 1: Install Capacitor
```bash
cd client
npm install @capacitor/core @capacitor/cli @capacitor/android
```

### Step 2: Initialize Capacitor
```bash
npx cap init "Learn Sphere" "com.learnsphere.app" --web-dir=build
```

### Step 3: Build React App
```bash
npm run build
```

### Step 4: Add Android Platform
```bash
npx cap add android
```

### Step 5: Sync Files
```bash
npx cap sync android
```

### Step 6: Open in Android Studio
```bash
npx cap open android
```

### Step 7: Build APK
In Android Studio:
1. **Build** → **Build Bundle(s) / APK(s)** → **Build APK(s)**
2. Wait for build to complete
3. Find APK at: `client/android/app/build/outputs/apk/debug/app-debug.apk`

---

## 🚀 Install APK on Phone

### Method 1: USB Cable
1. Enable **Developer Options** on your Android phone:
   - Settings → About Phone → Tap "Build Number" 7 times
2. Enable **USB Debugging**:
   - Settings → Developer Options → USB Debugging
3. Connect phone to PC via USB
4. Run:
```bash
adb install app-debug.apk
```

### Method 2: Direct Transfer
1. Copy `app-debug.apk` to your phone
2. Open the APK file on your phone
3. Allow installation from unknown sources if prompted
4. Install the app

---

## ⚠️ Important: Backend Setup

The mobile app needs your backend running online (not localhost).

### Quick Backend Deployment Options:

#### Option 1: Railway (Recommended - Free)
1. Sign up at https://railway.app
2. Click "New Project" → "Deploy from GitHub repo"
3. Connect your repository
4. Railway auto-detects and deploys your Node.js app
5. Copy the deployed URL (e.g., `https://your-app.railway.app`)

#### Option 2: Render (Free)
1. Sign up at https://render.com
2. Click "New" → "Web Service"
3. Connect repository
4. Configure:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Copy the deployed URL

#### Option 3: Heroku
1. Sign up at https://heroku.com
2. Install Heroku CLI
3. Run:
```bash
heroku login
heroku create learn-sphere-api
git push heroku main
```
4. Copy the URL

### Update API URL in Your App:

Edit `client/src/config.js`:
```javascript
const PROD_API_URL = 'https://your-deployed-backend-url.com';
```

Then rebuild:
```bash
cd client
npm run build
npx cap sync android
```

---

## 🎨 Customize Your App

### Change App Name
Edit `client/capacitor.config.json`:
```json
{
  "appName": "Your App Name"
}
```

### Change App Icon
1. Create 512x512 PNG icon
2. Use: https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html
3. Download generated icons
4. Replace files in: `client/android/app/src/main/res/mipmap-*`

### Change Package Name
Edit `client/capacitor.config.json`:
```json
{
  "appId": "com.yourcompany.appname"
}
```

---

## 📦 Build Release APK (For Play Store)

### Step 1: Generate Keystore
```bash
keytool -genkey -v -keystore learn-sphere.keystore -alias learnsphere -keyalg RSA -keysize 2048 -validity 10000
```

### Step 2: Configure Gradle
Edit `client/android/app/build.gradle`:

Add before `android {`:
```gradle
def keystoreProperties = new Properties()
def keystorePropertiesFile = rootProject.file('keystore.properties')
if (keystorePropertiesFile.exists()) {
    keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
}
```

Add inside `android {`:
```gradle
signingConfigs {
    release {
        keyAlias keystoreProperties['keyAlias']
        keyPassword keystoreProperties['keyPassword']
        storeFile file(keystoreProperties['storeFile'])
        storePassword keystoreProperties['storePassword']
    }
}
buildTypes {
    release {
        signingConfig signingConfigs.release
        minifyEnabled false
    }
}
```

### Step 3: Create keystore.properties
Create `client/android/keystore.properties`:
```
storePassword=your_store_password
keyPassword=your_key_password
keyAlias=learnsphere
storeFile=learn-sphere.keystore
```

### Step 4: Build Release APK
In Android Studio:
1. **Build** → **Generate Signed Bundle / APK**
2. Select **APK**
3. Choose keystore file
4. Enter passwords
5. Build

Release APK location:
```
client/android/app/build/outputs/apk/release/app-release.apk
```

---

## 🐛 Troubleshooting

### "Gradle sync failed"
- Ensure Java JDK is installed
- Restart Android Studio

### "Cannot connect to backend"
- Deploy backend online (not localhost)
- Update API URL in `config.js`
- Rebuild app

### "Build failed - SDK not found"
- Open Android Studio
- Go to: Tools → SDK Manager
- Install latest Android SDK

### "Installation blocked"
- Enable "Install unknown apps" for your file manager
- Settings → Apps → Special Access → Install unknown apps

---

## ✅ Quick Checklist

- [ ] Android Studio installed
- [ ] Java JDK installed
- [ ] Run `build-apk.bat` (or manual steps)
- [ ] Deploy backend online
- [ ] Update `client/src/config.js` with backend URL
- [ ] Build APK in Android Studio
- [ ] Transfer APK to phone
- [ ] Install and test

---

## 🎉 Success!

Once you have the APK:
- ✅ Install on any Android device
- ✅ Works offline (with cached data)
- ✅ Share APK with others
- ✅ Publish to Google Play Store (optional)

**Your Learn Sphere app is now a mobile app! 📱**
