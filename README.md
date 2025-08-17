# iNotebook — Secure MERN Notes (JWT • Protected Routes • CRUD)

A lightweight, secure notes app built on the **MERN** stack. Users sign up/log in with **JWT**, then perform full **CRUD** on notes via protected **REST APIs**. Client routing uses **React Router v6** with an auth guard (`RequireAuth`), sessions persist via `localStorage`, and expired/invalid tokens auto-logout.

---

## ✨ Features
- **Auth**: Signup/Login with **JWT**, bcrypt-hashed passwords, protected routes
- **Notes CRUD**: Create, Read, Update, Delete via REST endpoints
- **State**: React **Context API** for global notes/auth state
- **Routing**: React Router v6 + `RequireAuth` (redirect to `/login` when no token)
- **Persistence**: Token in `localStorage` (remember last logged-in user)
- **Security**: Auth header, 401 handling, logout clears token
- **Dev UX**: Clear alerts, responsive UI, easy Postman/cURL testing

---

## 🖼️ Screenshots
> Put screenshots in `docs/` and update paths below.

<p align="center">
  <img src="docs/screenshot-1.png" alt="Home - Notes List" width="800">
</p>
<p align="center">
  <img src="docs/screenshot-2.png" alt="Add/Edit Note" width="800">
</p>

---

## 🧱 Tech Stack
**Frontend:** React, React Router v6, Context API, Fetch API  
**Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT, bcrypt  
**Dev:** Postman, Git/GitHub, npm, CORS

---
