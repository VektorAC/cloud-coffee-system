# ☕️ Cloud Café System

Sistema fullstack de gestión de pedidos para cafetería, desplegado en Google Cloud.
Incluira panel de usuario y administrador, notificaciones en tiempo real y dashboard de ventas.


---

## 🚀 Características

- **Frontend:** React SPA (cliente y admin)
- **Backend:** Node.js + Express + Socket.io (API RESTful + WebSockets)
- **Base de datos:** Cloud SQL (PostgreSQL)
- **Almacenamiento:** Cloud Storage (imágenes de productos)
- **Despliegue:** Cloud Run (backend y frontend)
- **Notificaciones:** Socket.io para eventos en tiempo real (pedidos nuevos, cambios de estado)
- **Dashboard de ventas:** Métricas y gráficos para administrador
- **CI/CD:** GitHub Actions + Cloud Build (deploy automático)

---

## 📐 Arquitectura

```mermaid
graph LR
    FE[Frontend React App]
    BE[Backend Node.js API]
    DB[(Cloud SQL)]
    CS[Cloud Storage]
    FCM[Firebase Cloud Messaging]
    FE -- REST API --> BE
    FE -- WebSocket --> BE
    BE -- SQL --> DB
    BE -- images --> CS
    FE -- image URLs --> CS
    BE -- [Push] --> FCM
    FE -- Dashboard --> BE
```

Frontend: Consume API y WebSocket del backend; obtiene imágenes de Cloud Storage.

Backend: Expone endpoints REST, métricas, y Socket.io; maneja subida de imágenes y persistencia.

Notificaciones: WebSocket al admin para pedidos nuevos/cambios de estado.

Dashboard: Admin visualiza ventas y métricas desde queries agregadas.
## 🗂️ Estructura del Proyecto
root/
│
├── backend/
│ ├── src/
│ │ ├── controllers/
│ │ ├── models/
│ │ ├── routes/
│ │ ├── middleware/
│ │ ├── services/
│ │ ├── sockets/
│ │ ├── utils/
│ │ └── app.js
│ ├── .env.example
│ ├── Dockerfile
│ └── package.json
│
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── hooks/
│ │ ├── context/
│ │ ├── services/
│ │ └── App.js
│ ├── .env.example
│ ├── Dockerfile
│ └── package.json
│
├── .github/
│ └── workflows/
│ └── ci-cd.yml
│
├── README.md
├── cloudbuild.yaml
└── deploy-scripts/

---

## 💡 Funcionalidades Principales

### Cliente
- Ver menú (imágenes, precios, categorías)
- Crear y pagar pedido (checkout)
- Ver estado de pedido y notificaciones en tiempo real
- Historial de pedidos

### Administrador
- Login seguro (JWT/Firebase Auth)
- CRUD de productos (con imágenes)
- Gestión de pedidos (actualizar estado, historial)
- **Dashboard:** métricas de ventas, productos más vendidos, gráficos de tendencia

### Notificaciones
- Admin recibe aviso en tiempo real por nuevos pedidos/cambios de estado (WebSocket)
- (Opcional) Cliente recibe notificaciones push

---

## ☁️ Despliegue en Google Cloud

**Servicios usados:**
- [x] Cloud Run (containers backend y frontend)
- [x] Cloud SQL (PostgreSQL)
- [x] Cloud Storage (imágenes)
- [x] Cloud Build (CI/CD)
- [ ] (Opcional) Firebase Auth, FCM (push)

### **Setup rápido**

1. **Crear proyecto en [Google Cloud Console](https://console.cloud.google.com/)**  
   Guarda tu `PROJECT_ID`.

2. **Habilitar APIs necesarias:**  
   Cloud Run, Cloud SQL, Cloud Storage, Cloud Build, IAM.

3. **Crear recursos cloud:**
   - **Cloud SQL:**  
     - Instancia PostgreSQL, usuario, contraseña y base de datos.
   - **Cloud Storage:**  
     - Nuevo bucket para imágenes públicas.
   - **Cloud Run:**  
     - Se usará para desplegar backend y frontend vía contenedores.

4. **Configurar variables de entorno** (ver abajo).

5. **Configurar CI/CD:**  
   - Sube tu código a GitHub.
   - Agrega workflows (`.github/workflows/ci-cd.yml`) y/o `cloudbuild.yaml` para builds automáticos y despliegues a Cloud Run.

---

## 🔒 Variables de Entorno

### **Ejemplo `.env` para backend:**

```env
PORT=8080
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DBNAME
CLOUD_STORAGE_BUCKET=nombre-del-bucket
JWT_SECRET=your_secret
GOOGLE_APPLICATION_CREDENTIALS=path/to/service-account.json
```
## 🛣️ Roadmap

- [x] Definición de arquitectura y setup inicial
- [ ] Estructura base backend y frontend
- [ ] Configuración Google Cloud (Run, SQL, Storage)
- [ ] CRUD productos y pedidos
- [ ] Subida de imágenes a Cloud Storage
- [ ] Socket.io para notificaciones
- [ ] Dashboard de ventas (API + frontend)
- [ ] CI/CD automático
- [ ] Documentación detallada y ejemplos de uso

---

## 📖 Guía Rápida de Uso

### **Clonar el repositorio**

```bash
git clone https://github.com/tuusuario/cloud-cafe-order.git
cd cloud-cafe-order
```
### **Backend**
```bash
cd backend
cp .env.example .env
npm install
npm run dev
```
### **Frontend**
```bash
cd frontend
cp .env.example .env
npm install
npm start
```

### 🧑‍💻 Autor
Víctor Araya
