import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WithNav from './components/NavOutlet/WithNav';
import WithoutNav from './components/NavOutlet/WithoutNav';
import LandingPage from './pages/LandingPage/LandingPage';
import Main from './pages/Main/Main';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WithoutNav />}>
          <Route path="/" element={<LandingPage />} />
        </Route>
        <Route element={<WithNav />}>
          <Route path="/dashboard" element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
