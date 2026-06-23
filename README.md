# AI Travel Planner - Frontend

## Project Overview

AI Travel Planner is a full-stack web application that helps users generate personalized travel itineraries using Google's Gemini AI. Users can create trips based on destination, duration, budget, and interests. The application generates a complete travel plan, including daily activities, budget estimation, hotel suggestions, and packing recommendations.

Users can save generated trips, view previously saved trips, and manage their travel history.

---

## Features

- User Registration and Login
- Secure Authentication using JWT
- Generate AI-powered travel itineraries
- Budget estimation for trips
- Hotel recommendations
- Packing list suggestions
- Save generated trips
- View saved trips
- View complete trip details
- Responsive user interface

---

## Tech Stack

### Frontend

- React.js
- Vite
- React Router DOM
- Context API
- JavaScript (ES6+)
- CSS3
- js-cookie

### Backend

- Node.js
- Express.js
- MySQL
- Google Gemini API

---

## Folder Structure

```text
src/
│
├── components/
├── context/
├── pages/
├── routes/
├── constants/
├── App.jsx
└── main.jsx
```

---

## Installation

### Clone the repository

```bash
git clone <your-frontend-repository-url>
```

### Navigate to project folder

```bash
cd ai-travel-planner-frontend
```

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

---

## Environment Variables

Create a `.env` file in the root directory.

```env
VITE_BASE_URL=https://your-backend-url.com
```

---

## Available Scripts

### Run development server

```bash
npm run dev
```

### Build project

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

---

## Main Application Flow

1. User registers or logs into the application.
2. User enters trip details:
   - Destination
   - Duration
   - Budget Type
   - Interests

3. Gemini AI generates a personalized travel plan.
4. User reviews the generated trip.
5. User saves the trip if satisfied.
6. Saved trips can be viewed later from the dashboard.

---

## Future Enhancements

- Mark trips as visited
- Edit itinerary activities
- Regenerate individual trip days
- Trip search and filtering
- Download itinerary as PDF

---

## Deployment

Frontend deployed on: vercel
Backend deployed on: Render
Database Hoisted on : railway

---

## Author

**Yugandhar Boya**

- Portfolio: https://yugandharpro.com
- GitHub: https://github.com/your-github-username
- LinkedIn: Add your LinkedIn profile URL
