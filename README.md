🌾 Smart Farming Application :
A modern web application that enables:

Smart crop selection without guesswork

Real-time weather monitoring

Direct market price access without middlemen

Seasonal crop recommendations

This project demonstrates frontend architecture, API integration, and algorithm-based decision support using React and Tailwind CSS.

📸 Screenshots :
🔐 Login Page

🏠 Dashboard

🌾 Crop Recommendation

🌤 Weather Information

💰 Market Prices

📅 Seasonal Crops

🛠 Tech Stack:
React.js (v18)

React Router v6

Tailwind CSS

Vite

OpenWeatherMap API

LocalStorage (Authentication)

Git & GitHub

🧠 Core Features :
1️⃣ Crop Recommendation Engine

Uses 7 soil & climate parameters:

Nitrogen (N)

Phosphorus (P)

Potassium (K)

pH

Temperature

Humidity

Rainfall

Implements a weighted scoring algorithm

Displays top 5 crop matches with percentage score

2️⃣ Weather API Integration

Fetches real-time weather data

Displays:

Temperature

Humidity

Wind Speed

Rainfall

Uses async/await with error handling

3️⃣ Market Price Monitoring

Displays APMC wholesale crop prices

Includes price change indicators

4️⃣ Seasonal Crop Guidance

Auto-detects agricultural seasons:

Kharif

Rabi

Zaid

Dynamically filters crops based on current month

5️⃣ Authentication & Route Protection

User registration & login

Session stored in LocalStorage

Protected routes using custom ProtectedRoute

📂 Project Structure :
src/
├── components/
│   ├── Navbar.jsx
│   └── ProtectedRoute.jsx
├── pages/
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Home.jsx
│   ├── CropRecommend.jsx
│   ├── Weather.jsx
│   ├── MarketPrices.jsx
│   └── SeasonalCrops.jsx
├── data/
│   └── crops.js
├── App.jsx
└── main.jsx

⚙️ Installation & Setup :
Clone the repository:

git clone https://github.com/your-username/smart-farming-application.git
cd smart-farming-application

Install dependencies:

npm install

Create .env file in project root:

VITE_WEATHER_KEY=your_openweathermap_api_key

Start development server:

npm run dev

Open:

http://localhost:5173


👨‍💻 Author :
Jagadish T S
B.Tech Computer Engineering
Presidency University