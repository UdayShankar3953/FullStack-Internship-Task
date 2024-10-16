import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'; // Removed useLocation
import Leaderboard from './components/Leaderboard';
import Home from './components/Home';
import Tasks from './components/Tasks';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

const Navbar = () => {
  return (
    <nav className="nav_bar">
      <span className="navbar-title">Task Planet</span>
      <div className="navbar-score-container">
        <div className="navbar-score-box">Score: 3982</div>
        <div className="navbar-money-box">₹2875.00</div>
        <img 
          src="https://th.bing.com/th/id/OIP.YpQ0oZGLK4k09k6sq354OwHaHx?rs=1&pid=ImgDetMain" 
          className="navbar-profile rounded-circle" 
          alt="Profile" 
        />
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
        <footer className="bottom-nav">
          <NavLink exact to="/" className="bottom-nav-item" activeClassName="active">
            <i className="fas fa-home"></i>
          </NavLink>
          <NavLink to="/tasks" className="bottom-nav-item" activeClassName="active">
            <i className="fas fa-tasks"></i>
          </NavLink>
          <NavLink to="/leaderboard" className="bottom-nav-item" activeClassName="active">
            <i className="fas fa-trophy"></i>
          </NavLink>
        </footer>
      </div>
    </Router>
  );
};

export default App;
