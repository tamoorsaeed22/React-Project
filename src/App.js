import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Rockets from './Pages/Rockets';
import Missions from './Pages/Missions';
import MyProfile from './Pages/MyProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/Missions" element={<Missions />} />
        <Route path="/MyProfile" element={<MyProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
