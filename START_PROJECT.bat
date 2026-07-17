@echo off
setlocal
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is not installed. Install Node.js 20.9 or newer first.
  pause
  exit /b 1
)

if not exist .env.local copy .env.example .env.local >nul
if not exist node_modules (
  echo Installing dependencies...
  call npm install
  if errorlevel 1 exit /b 1
)

echo Starting Metalix at http://localhost:3000
call npm run dev
