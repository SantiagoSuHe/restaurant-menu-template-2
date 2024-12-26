import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RestaurantPage from './pages/RestaurantPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route path="/:lang" element={<RestaurantPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;