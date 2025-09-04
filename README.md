# Medtatvaa

Medtatvaa is a full-stack web application designed as a comprehensive platform for radiology centers.  
It combines a modern **React + Vite frontend** with a **Node.js + Express backend** to deliver a seamless user experience.

---

## 🚀 Tech Stack

### Frontend
- **React** with **Vite** for fast development and optimized builds
- **Tailwind CSS** for styling 
- **Axios / Fetch API** for communicating with backend

### Backend
- **Node.js** with **Express.js**
- RESTful API structure


---

## 📂 Project Structure

```bash
Medtatvaa/
├── client/               # React + Vite frontend
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Main page views
│   │   └── main.jsx      # Entry point
│   └── index.html
│
├── server/               # Node.js + Express backend
│   └── server.js         # App entry point
│
└── README.md             # Project documentation
```

---

## ⚙️ Installation & Setup


### 1. Install Dependencies
#### Frontend
```bash
cd client
npm install
```

#### Backend
```bash
cd ../api
npm install
```

### 3. Environment Variables
Create a `.env` file in the **api** directory and add:
```
PORT=5000
GMAIL_USER=your@gmail.com
GMAIL_PASS=password
```

### 4. Run the App
#### Backend
```bash
cd api
npm start
```

#### Frontend
```bash
cd client
npm run dev
```

Now open:  
Frontend → http://localhost:5173  
Backend → http://localhost:5000

---

## 📦 Build for Production
To build the frontend for production:
```bash
cd client
npm run build
```
This generates a `dist/` folder ready for deployment.

---

## 🌐 Deployment
- **Frontend** can be hosted on GoDaddy (upload `dist/` files to `public_html`).
- **Backend** requires a VPS or services like **Render, Railway, or DigitalOcean**.
- **Domain** is managed via GoDaddy.

---

## ✨ Features
- Modern React frontend with Vite
- RESTful API backend with Node & Express
- Scalable structure for adding authentication, file uploads, and database integration
- SEO-friendly meta tags

---

## 📌 Future Improvements
- Add authentication (JWT/OAuth)
- Connect backend with MongoDB/SQL
- Implement image/file uploads
- Enhance UI/UX with advanced components

---

