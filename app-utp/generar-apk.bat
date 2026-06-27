@echo off
echo 🔧 Instalando dependencias para Android...
call npm install @capacitor/android

echo 📦 Construyendo la app...
call npm run build

echo 📱 Agregando plataforma Android...
call npx cap add android

echo 🔨 Compilando APK...
call npx cap copy
call npx cap sync
cd android
call gradlew.bat assembleDebug

echo ✅ APK generada en: android\app\build\outputs\apk\debug\
dir android\app\build\outputs\apk\debug\
