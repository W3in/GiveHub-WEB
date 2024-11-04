import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import FeaturedProjects from './pages/FeaturedProjects';
import Achievements from './pages/Achievements';
import Stats from './pages/Stats';
import Donate from './pages/Donate';
import OnlineDonate from './pages/OnlineDonate';
import OfflineDonate from './pages/OfflineDonate';
import FAQ from './pages/FAQ';
import Support from './pages/Support';
import Profile from './pages/Profile';
import OtherDonate from './pages/OtherDonate';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/featured-projects" element={<FeaturedProjects />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/donate/online" element={<OnlineDonate />} />
        <Route path="/donate/offline" element={<OfflineDonate />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/support" element={<Support />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/" />} /> {/* Chuyển hướng bất kỳ URL không xác định đến Home */}
        <Route path="/other" element={<OtherDonate />} />
      </Routes>
    </Router>
  );
}

export default App;
