# 🌱 Farmer App — Smart Farming Web Application

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite)
![React Router](https://img.shields.io/badge/React_Router-6.x-CA4245?style=for-the-badge&logo=react-router)

> **Smart crop selection without guesswork. Smart crop selling without middlemen.**

A full-stack frontend web application built for Indian farmers to make **data-driven agricultural decisions** using modern web technologies.

---

## 🖥️ Live Demo

🔗 [View Live App](#) ← *(add your Vercel link here after deploying)*

---

## 📸 Screenshots

| Login Page | Home Dashboard |
|------------|----------------|
| ![Login](#) | ![Dashboard](#) |

| Crop Recommendation | Weather Module |
|---------------------|----------------|
| ![Crops](#) | ![Weather](#) |

---

## 🚀 Features

### 🔐 User Authentication
- Secure Register & Login system
- Form validation (empty fields, password match, minimum length)
- Session management using browser LocalStorage
- Protected routes — non-logged users auto-redirected to login

### 🌾 Crop Recommendation Engine
- Input 7 soil & climate parameters using interactive sliders
  - Nitrogen (N), Phosphorus (P), Potassium (K)
  - Soil pH, Temperature, Humidity, Rainfall
- Custom weighted scoring algorithm computes match % for each crop
- Displays **Top 5 best-fit crops** with progress bars
- Each crop shows season tag and farming description

### 🌤️ Real-Time Weather Information
- Integrated with **OpenWeatherMap API**
- Search any city in India
- Displays: Temperature, Feels Like, Humidity, Wind Speed, Rainfall
- Generates farming tips based on weather conditions

### 💰 Market Price Monitor
- Live APMC (Agricultural Produce Market Committee) mandi rates
- **No Middlemen** — farmers see real wholesale prices
- Search and filter by crop name
- Price change indicators (▲ rise / ▼ fall)
- Saves farmers 15–30% typically lost to commission agents

### 📅 Seasonal Crop Guide
- Auto-detects current Indian agricultural season
  - 🌧️ **Kharif** — June to October (Rice, Maize, Cotton)
  - ❄️ **Rabi** — November to March (Wheat, Mustard, Chickpea)
  - ☀️ **Zaid** — April to May (Watermelon, Cucumber)
- Displays ideal pH, temperature, and rainfall for each crop
- Manual season switching

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React.js 18** | Component-based UI development |
| **React Router v6** | Client-side page navigation |
| **Tailwind CSS** | Utility-first responsive styling |
| **Vite** | Fast build tool and dev server |
| **OpenWeatherMap API** | Real-time weather data |
| **LocalStorage** | User session and credential storage |
| **Git + GitHub** | Version control |

---

## 📁 Project Structure

```
smart-farming-app/
│
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Top navigation bar
│   │   └── ProtectedRoute.jsx    # Auth guard for protected pages
│   │
│   ├── pages/
│   │   ├── Login.jsx             # Login form
│   │   ├── Register.jsx          # Registration form
│   │   ├── Home.jsx              # Dashboard with feature cards
│   │   ├── CropRecommend.jsx     # Crop recommendation engine
│   │   ├── Weather.jsx           # Weather API integration
│   │   ├── MarketPrices.jsx      # Market price monitor
│   │   └── SeasonalCrops.jsx     # Seasonal crop guide
│   │
│   ├── data/
│   │   └── crops.js              # Crop database + market prices
│   │
│   ├── App.jsx                   # Root component with routing
│   ├── main.jsx                  # React entry point
│   └── index.css                 # Tailwind directives
│
├── .env                          # API keys (not committed)
├── .gitignore
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js v18 or above
- npm v9 or above
- Free API key from [openweathermap.org](https://openweathermap.org)

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/Jagadish-2003/smart-farming-application.git
cd smart-farming-application
```

**2. Install dependencies**
```bash
npm install
```

**3. Add your Weather API key**

Create a `.env` file in the root folder:
```
VITE_WEATHER_KEY=your_openweathermap_api_key_here
```

**4. Start the development server**
```bash
npm run dev
```

**5. Open in browser**
```
http://localhost:5173
```

---

## 🔑 Demo Credentials

To test the app quickly, register a new account with any email and password, or use:
```
Email:    farmer@demo.com
Password: farm123
```
*(Register first with these credentials, then login)*

---

## 🧠 How the Crop Recommendation Works

```
Farmer Input (7 parameters)
        ↓
For each crop in database:
  score = Σ (parameterScore × weight)

  Weights:
  - Nitrogen  → 20%
  - pH        → 20%
  - Phosphorus→ 15%
  - Potassium → 15%
  - Temp      → 15%
  - Humidity  → 10%
  - Rainfall  → 5%
        ↓
Sort all crops by score (highest first)
        ↓
Display Top 5 Recommended Crops
```

If a parameter value is **within the crop's ideal range** → score = 100.
If **outside the range** → score decreases based on distance from range.

---

## 🌐 API Reference

**OpenWeatherMap — Current Weather**
```
GET https://api.openweathermap.org/data/2.5/weather
    ?q={city}
    &appid={API_KEY}
    &units=metric
```

**Response fields used:**
```json
{
  "main": { "temp": 25.5, "humidity": 72, "feels_like": 27 },
  "weather": [{ "description": "clear sky" }],
  "wind": { "speed": 3.2 },
  "sys": { "country": "IN" },
  "name": "Delhi"
}
```

---

## 🔮 Future Improvements

- [ ] Machine Learning model for crop prediction (Random Forest / Decision Tree)
- [ ] Real-time market prices via Agmarknet government API
- [ ] Backend with Node.js + MongoDB for secure authentication
- [ ] JWT token-based authentication replacing LocalStorage
- [ ] Multilingual support (Hindi, Kannada, Telugu, Tamil)
- [ ] IoT sensor integration for automatic soil data input
- [ ] Crop disease detection using image recognition
- [ ] Mobile app using React Native

---

## ⚠️ Limitations

- LocalStorage is used for authentication — **not secure for production**
- Market prices are static/mock data — not real-time
- Crop recommendation uses rule-based logic — not a trained ML model
- Requires internet connection for weather data

---

---

## 📄 License

This project is built for educational purposes as part of the B.Tech curriculum at Presidency University.

---

<div align="center">
  <p>Made with ❤️ for Indian Farmers 🌾</p>
</div>