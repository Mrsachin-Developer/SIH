// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import your pages
import Home from "./Pages/Home.jsx";
import Ids from "./Pages/Ids.jsx";

import VetLogin from "./Pages/Vet/VetLogin.jsx";
import VetDashboard from "./Pages/Vet/VetDashboard.jsx";

import FarmerLoginPage from "./Pages/Farmer/FarmerLoginPage.jsx";
import FarmerDashboard from "./Pages/Farmer/FarmerDashboard.jsx";

import FarmerRiskResult from "./Pages/Farmer/FarmerRiskResult.jsx";
import AlertsPage from "./Pages/Farmer/AlertsPage.jsx";

import AdminLogin from "./Pages/Admin/AdminLogin.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/ids" element={<Ids />} />

        {/* Vet */}
        <Route path="/vet/login" element={<VetLogin />} />
        <Route path="/vet/dashboard" element={<VetDashboard />} />

        {/* Farmer */}
        <Route path="/farmer/login" element={<FarmerLoginPage />} />
        <Route path="/farmer/dashboard" element={<FarmerDashboard />} />
        <Route path="/farmer/risk-result" element={<FarmerRiskResult />} />
        <Route path="/farmer/alerts" element={<AlertsPage />} />

        {/* Admin */}
        <Route path="/admin/login" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
}
