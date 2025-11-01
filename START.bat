@echo off
echo ========================================
echo   Learn Sphere - Education Platform
echo ========================================
echo.
echo Starting the application...
echo.
echo Backend will run on: http://localhost:5000
echo Frontend will run on: http://localhost:3000
echo.
echo Press Ctrl+C to stop the servers
echo.
echo ========================================
echo.

cd /d "%~dp0"
npm run dev
