@echo off
setlocal
cd /d "%~dp0"

echo Installing exact dependencies...
call npm ci
if errorlevel 1 goto :failed

echo Running TypeScript and production build checks...
call npm run check
if errorlevel 1 goto :failed

echo.
echo All checks passed. The project is ready for Vercel.
pause
exit /b 0

:failed
echo.
echo Verification failed. Read the error shown above.
pause
exit /b 1
