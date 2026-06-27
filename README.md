# 📱 Proyecto Semana 14 - DWI

Este repositorio contiene la aplicación móvil desarrollada con **Ionic y Angular** para la semana 14 del curso de **Diseño y Desarrollo Web Integrado (DWI)**.

---

## 🔗 Enlaces del Proyecto

* **Repositorio de GitHub:** [https://github.com/Nakusuo/semana14-DWI](https://github.com/Nakusuo/semana14-DWI)
* **Rama Principal:** `main`
* **Endpoints de la API (Mock en Beeceptor):** [https://app.beeceptor.com/console/utp-14](https://app.beeceptor.com/console/utp-14)
  * **POST** Guardar Registro: [https://utp-14.free.beeceptor.com/registros](https://utp-14.free.beeceptor.com/registros)
  * **GET** Listar Registros: [https://utp-14.free.beeceptor.com/registros](https://utp-14.free.beeceptor.com/registros)

---

## 🛠️ Requisitos Previos

Antes de ejecutar la aplicación, asegúrate de tener instalado:
* **Node.js** (versión LTS recomendada)
* **npm** (gestor de paquetes de Node)
* **Ionic CLI** (opcional, instalado globalmente mediante `npm install -g @ionic/cli`)

---

## 🚀 Instrucciones de Ejecución

Sigue estos pasos para clonar y ejecutar el proyecto en tu entorno local:

### 1. Clonar el repositorio
```bash
git clone https://github.com/Nakusuo/semana14-DWI.git
cd semana14-DWI/app-utp
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar el servidor de desarrollo
Para probar la aplicación en el navegador web local:
```bash
npm start
```
*La aplicación estará disponible en [http://localhost:4200](http://localhost:4200)*

---

## 📱 Compilación para Android

Si deseas compilar la aplicación para dispositivos Android y generar el archivo APK:

1. Ejecuta el script automatizado proporcionado:
   ```bash
   ./generar-apk.sh
   ```
2. O ejecuta los comandos manualmente:
   ```bash
   # Construir el proyecto web
   npm run build

   # Sincronizar los archivos con Capacitor
   npx cap sync

   # Compilar el APK de depuración (Debug APK)
   cd android
   ./gradlew assembleDebug
   ```

El archivo APK resultante se generará en la ruta:
`android/app/build/outputs/apk/debug/app-debug.apk`