#!/bin/bash

echo "🔧 Instalando dependencias para Android..."
npm install @capacitor/android

echo "📦 Construyendo la app..."
npm run build

echo "📱 Agregando plataforma Android..."
npx cap add android

echo "🔨 Compilando APK..."
npx cap copy
npx cap sync
cd android
./gradlew assembleDebug

echo "✅ APK generada en: android/app/build/outputs/apk/debug/"
ls -lh android/app/build/outputs/apk/debug/
