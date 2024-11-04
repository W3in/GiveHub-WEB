import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About';
import FeaturedProjects from './pages/FeaturedProjects';
import Achievements from './pages/Achievements';
import OnlineDonate from './pages/OnlineDonate';
import OfflineDonate from './pages/OfflineDonate';
import FAQ from './pages/FAQ';
import Support from './pages/Support';
import Stats from './pages/Stats';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/featured-projects" element={<FeaturedProjects />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/donate/online" element={<OnlineDonate />} />
        <Route path="/donate/offline" element={<OfflineDonate />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/support" element={<Support />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
