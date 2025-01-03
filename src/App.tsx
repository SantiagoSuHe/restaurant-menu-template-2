import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RestaurantPage from './pages/RestaurantPage';

function App() {
  const [redirectPath, setRedirectPath] = useState('');

  useEffect(() => {
    const preferredLanguage = navigator.language || (navigator as Navigator & { userLanguage?: string }).userLanguage;
    if (preferredLanguage && preferredLanguage.startsWith('es')) {
      setRedirectPath('/es');
    } else {
      setRedirectPath('/en');
    }
  }, []);

  if (!redirectPath) {
    return null; // or a loading spinner
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={redirectPath} replace />} />
        <Route path="/:lang" element={<RestaurantPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;