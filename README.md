# Real-Time Weather Dashboard

A full-stack application that provides real-time weather information for any city using OpenWeatherMap API.

## Project Structure

```
weather-dashboard/
├── client/          # React Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── index.js
│   └── package.json
├── server/          # Node.js Backend
│   ├── routes/
│   │   └── weather.js
│   ├── server.js
│   └── package.json
├── .env            # Environment variables
├── .gitignore
└── README.md
```

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenWeatherMap API key

## Setup Instructions

### Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the server directory with your OpenWeatherMap API key:
   ```bash
   OPENWEATHERMAP_API_KEY=your_api_key_here
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```

## Running the Application

1. Ensure both backend and frontend servers are running:
   - Backend: http://localhost:5000
   - Frontend: http://localhost:3000

2. Open your browser and navigate to http://localhost:3000

3. Enter a city name in the search bar to get weather information

## Features

- Real-time weather updates
- Current temperature
- Weather condition and description
- Humidity percentage
- Wind speed
- Error handling for invalid cities
- Loading states during API calls

## Technologies Used

- Frontend: React.js
- Backend: Node.js + Express
- API: OpenWeatherMap
- State Management: React Hooks
- HTTP Client: Axios