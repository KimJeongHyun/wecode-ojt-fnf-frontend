import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WithNav from './components/NavOutlet/WithNav';
import WithoutNav from './components/NavOutlet/WithoutNav';
import LandingPage from './pages/LandingPage/LandingPage';
import Main from './pages/Main/Main';
const MAIN_CONTENTS_PATH = ['/category', '/styleranking'];

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WithoutNav />}>
          <Route path="/" element={<LandingPage />} />
        </Route>
        <Route element={<WithNav />}>
          {MAIN_CONTENTS_PATH.map((item, index) => (
            <Route
              key={item}
              path={MAIN_CONTENTS_PATH[index]}
              element={<Main />}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
