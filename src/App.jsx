import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./context/context";
import ProtectedRoute from "./protectedRoute";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login/index.jsx";
import Register from "./pages/Register";
import SavedTrips from "./pages/SavedTrips";
import TripDetails from "./pages/TripDetails";
import Layout from "./layout";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Layout>
                    {" "}
                    <Dashboard />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/trips/saved"
              element={
                <ProtectedRoute>
                  <Layout>
                    <SavedTrips />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/trips/:tripId"
              element={
                <ProtectedRoute>
                  <Layout>
                    <TripDetails />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
