# ✦ GlowTrack

GlowTrack is a full-stack skincare web application that provides personalized skin analysis and product recommendations.

---

## 🚀 Features

- 🔐 User Authentication (Sign Up / Login)
- 🧠 Skin Analysis Quiz
- ✨ Personalized Skin Type Result
- 👤 Profile page with saved user data
- 🧴 Product recommendations from MySQL database
- 📊 Progress tracking system
- 🔄 Navigation between Dashboard, Products, Profile, Analysis

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- CSS

### Backend
- Node.js
- Express.js

### Database
- MySQL (XAMPP / phpMyAdmin)

---

## ⚙️ How to Run

### 1. Clone the repository

git clone https://github.com/itssugabooo-stack/Glowtrack.git  
cd Glowtrack  

---

### 2. Backend Setup

cd backend  
npm install  
node server.js  

Server runs on:  
http://localhost:5000  

---

### 3. Frontend Setup

cd client  
npm install  
npm run dev  

App runs on:  
http://localhost:5173  

---

## 🌐 Application Flow

1. User creates account  
2. User logs in  
3. Takes skincare quiz  
4. System calculates skin type  
5. Result is saved to localStorage  
6. Profile displays user + skin data  
7. Products are fetched from database  

---

## 🧩 Database Structure

Tables:
- users
- categories
- products
- reviews

---

## 📂 Project Structure

Glowtrack/  
├── backend/  
├── client/  
├── .gitignore  
├── package.json  

---

## 📌 Notes

- Uses localStorage for session handling  
- Product images stored in /client/public/images  
- API endpoints built with Express  
- MySQL used for storing users and products  

---



## ⭐ Future Improvements

- AI-based skincare recommendation system  
- Deploy to cloud (Vercel + Railway)  
- Add product reviews system  
- Improve UI/UX design  
- Save quiz results in database  

---

## 💡 Project Type

Full-stack web application (Frontend + Backend + Database)
