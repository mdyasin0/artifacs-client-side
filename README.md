
# 🏺 Historical Artifacts Tracker

A full-stack web application to explore, track, and contribute information about historical artifacts. Users can view detailed data, like artifacts, add their own entries, and manage personal submissions securely.

---

## 🌐 Live Site

👉 [Click Here to Visit Live Site](https://assignment-11-1588b.web.app/)

---

## 🎯 Project Purpose

This project aims to create an educational and interactive platform where users can:
- Discover famous historical artifacts.
- View detailed information.
- Like and contribute their own artifacts.
- Manage their added artifacts.
- Use a secure login system with JWT authentication.

This project was created for **Assignment-11 (assignment_category_13)** as part of a full-stack development learning journey.

---

## 🧩 Key Features

- 🔐 Firebase Authentication (Email/Password + Google Login)
- 🔒 JWT-Protected Routes & Backend Authentication
- ✅ Add, Update, Delete (CRUD) for personal artifacts
- ❤️ Like/Dislike toggle functionality
- 🔎 Search functionality on All Artifacts page
- 📌 My Artifacts & Liked Artifacts (Private routes)
- 📊 Featured Artifacts based on Like Count
- 💻 Responsive UI for mobile, tablet, and desktop
- 🎞️ Banner/Slider with swiper.js
- 🍞 Toasts and SweetAlerts for notifications
- 🔄 Framer-motion animations
- ⚠️ 404 Not Found Page & Loading Spinner
- 🔧 Environment variable security for Firebase & MongoDB credentials
- 🎬 Extra custom feature: Dynamic Page Title per Route

---

## 📦 NPM Packages Used

### Client Side
- **vite** – Fast frontend bundler
- **react** – UI library
- **react-router / react-router-dom** – Routing
- **tailwindcss** – Utility-first CSS
- **daisyui** – Component library built on Tailwind CSS
- **react-icons** – Icon pack
- **swiper** – For responsive sliders
- **react-lottie-player** – For animated illustrations
- **firebase** – Authentication 
- **axios** – HTTP requests
- **sweetalert2** – Alert popups
- **react-toastify** – Toast notifications
- **framer-motion** – Page/element animations

### Server Side
- **express** – Node.js web framework
- **cors** – CORS configuration
- **mongodb** – NoSQL database
- **nodejs** – JavaScript runtime
- **jsonwebtoken (JWT)** – Token-based authentication
- **cookie-parser** – Parse cookies for JWT verification

---



## 🚀 Deployment

- **Client:** Deployed via Firebase Hosting 
- **Server:** Deployed on Vercel
- **MongoDB Atlas:** Cloud-based DB
- **Environment Variables:** Secured for both Firebase & DB

---

## 🔐 Private Route Flow (JWT)

- On login/register, server issues JWT token.
- Token is stored in browser cookie.
- Token is sent in headers for private/protected API calls.
- Server verifies token before allowing data access or update.

---



## 📩 Contact

**Developer:** MD Yasin  
📧 Email: [mdyasin48902@gmail.com]


---

> This project is crafted with attention to accessibility, responsiveness, interactivity, and performance. It reflects my understanding of full-stack development, authentication, authorization, protected routing, and UI/UX best practices.
