import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import './App.css';
import './assets/scss/bootstrap.scss';
import LandingPage from './pages/LandingPage';

const App = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LandingPage />}>
    </Route>
  )
);
export default App;
