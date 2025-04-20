# 📌 Connecting Backend and Frontend

This code shows how you can avoid CORS errors while connecting backend and frontend.  
Proxy and CORS through whitelisting domains are the most popular ways to avoid any kind of conflict.

---

## 🛠 Tech Stack

- **Frontend:** React  
- **Backend:** Node.js with Express

---

## 🚀 Features

- Connects frontend with backend

---

## ⚙️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

2. Install dependencies
   
Frontend:
```bash
cd frontend
npm install
```

Backend:
```bash
cd backend
npm install  # or pip install -r requirements.txt
```
3. Run the app
Frontend:
```bash
npm run dev
```
Backend:
```bash
npm start
```

🔗 Frontend ↔️ Backend Connection
In this codebase, I've used proxy to connect the frontend with the backend.
Inside the Vite configuration file (vite.config.js), add a server object and inside that, use the proxy key with the domain of the backend as a value.
Example
```bash
// vite.config.js
export default {
  server: {
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
};
```

