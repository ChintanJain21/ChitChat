💬 ChitChat

**ChitChat** is a real-time chat application built with **React**, **Node.js**, **Express**, **MongoDB**, and **Socket.IO**. It allows users to communicate instantly, with support for live typing indicators, online status, and JWT-based authentication.

---

## 🚀 Features

- 🔁 Real-time one-on-one messaging using Socket.IO
- 🔐 Secure user authentication (JWT + bcrypt)
- 👥 Online/offline presence indicators
- 📱 Fully responsive UI for mobile and desktop
- ⚙️ RESTful API with Express.js
- 💾 MongoDB for persistent storage

---
## 🛠️ Tech Stack

| Layer     | Technology                          |
|-----------|-------------------------------------|
| Frontend  | React.js, Zustand, Tailwind CSS     |
| Backend   | Node.js, Express.js, Socket.IO      |
| Database  | MongoDB with Mongoose ODM           |
| Auth      | JWT, bcrypt                         |
| Realtime  | WebSockets via Socket.IO            |

## 📂 Folder Structure
 ```bash
chitchat/
├── backend/
│   ├── package.json
│   ├── package-lock.json
│   ├── .env
│   ├── .gitignore
│   └── src/
│       ├── controllers/
│       │   ├── auth.controller.js
│       │   └── message.controller.js
│       │
│       ├── database/
│       │   └── db.js
│       │
│       ├── middlewares/
│       │   └── auth.middleware.js
│       │
│       ├── models/
│       │   ├── message.model.js
│       │   └── user.model.js
│       │
│       ├── routes/
│       │   ├── auth.route.js
│       │   └── message.route.js
│       │
│       ├── utils/
│       │   ├── cloudinary.js
│       │   ├── generateToken.js
│       │   └── socket.js
│       │
│       └── index.js
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   │
│   ├── package.json
│   ├── package-lock.json
│   ├── .gitignore
│   ├── eslint.config.js
│   └── src/
│       ├── assets/
│       │   └── (images, icons, etc.)
│       │
│       ├── components/
│       │   ├── skeletons/
│       │   │   ├── AuthImagePattern.jsx
│       │   │   ├── MessageSkeleton.jsx
│       │   │   └── SidebarSkeleton.jsx
│       │   ├── ChatContainer.jsx
│       │   ├── ChatHeader.jsx
│       │   ├── MessageInput.jsx
│       │   ├── Navbar.jsx
│       │   ├── NoChatSelected.jsx
│       │   └── Sidebar.jsx
│       │
│       ├── constants/
│       │   └── index.js
│       │
│       ├── hooks/
│       │   └── useApplyTheme.js
│       │
│       ├── lib/
│       │   ├── axios.js
│       │   └── utils.js
│       │
│       ├── pages/
│       │   ├── HomePage.jsx
│       │   ├── LoginPage.jsx
│       │   ├── ProfilePage.jsx
│       │   ├── SettingsPage.jsx
│       │   └── SignupPage.jsx
│       │
│       ├── store/
│       │   ├── useAuthStore.js
│       │   ├── useChatStore.js
│       │   └── useThemeStore.js
│       │
│       ├── App.jsx
│       ├── App.css
│       ├── index.jsx
│       └── index.css

   
