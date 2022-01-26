import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VerticalNav from './components/Nav/VerticalNav';
import Main from './pages/Main/Main';
import SearchStatus from './pages/SearchStatus/SearchStatus';

export default function Router() {
  return (
    <BrowserRouter>
      <VerticalNav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/searchstatus" element={<SearchStatus />} />
      </Routes>
    </BrowserRouter>
  );
}
