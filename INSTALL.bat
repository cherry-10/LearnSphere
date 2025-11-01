@echo off
echo ========================================
echo   Learn Sphere - Installation
echo ========================================
echo.
echo Installing dependencies...
echo This may take a few minutes.
echo.

cd /d "%~dp0"

echo [1/2] Installing backend dependencies...
call npm install

echo.
echo [2/2] Installing frontend dependencies...
cd client
call npm install
cd ..

echo.
echo ========================================
echo   Installation Complete!
echo ========================================
echo.
echo To start the application, run: START.bat
echo Or use: npm run dev
echo.
pause
