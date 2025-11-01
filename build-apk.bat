@echo off
echo ========================================
echo   Learn Sphere - APK Builder
echo ========================================
echo.
echo This script will convert your web app to Android APK
echo.
echo Prerequisites:
echo - Android Studio installed
echo - Java JDK installed
echo.
pause

cd client

echo.
echo [1/6] Installing Capacitor...
call npm install @capacitor/core @capacitor/cli @capacitor/android

echo.
echo [2/6] Initializing Capacitor...
call npx cap init "Learn Sphere" "com.learnsphere.app" --web-dir=build

echo.
echo [3/6] Building React app...
call npm run build

echo.
echo [4/6] Adding Android platform...
call npx cap add android

echo.
echo [5/6] Syncing files...
call npx cap sync android

echo.
echo [6/6] Opening in Android Studio...
call npx cap open android

echo.
echo ========================================
echo   Setup Complete!
echo ========================================
echo.
echo Next steps in Android Studio:
echo 1. Wait for Gradle sync to complete
echo 2. Go to Build > Build Bundle(s) / APK(s) > Build APK(s)
echo 3. Wait for build to complete
echo 4. Click "locate" to find your APK
echo.
echo APK location: client\android\app\build\outputs\apk\debug\app-debug.apk
echo.
pause
