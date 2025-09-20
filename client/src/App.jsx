// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home.jsx";
import Ids from "./Pages/Ids.jsx";

// Vet
import VetLogin from "./Pages/Vet/VetLogin.jsx";
import VetDashboard from "./Pages/Vet/VetDashboard.jsx";

// Farmer
import FarmerLoginPage from "./Pages/Farmer/FarmerLoginPage.jsx";
import FarmerDashboard from "./Pages/Farmer/FarmerDashboard.jsx";
import FarmerIncidentReport from "./Pages/Farmer/FarmerIncidentReport.jsx";

// Admin
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
        <Route
          path="/farmer/incident-report"
          element={<FarmerIncidentReport />}
        />

        {/* Admin */}
        <Route path="/admin/login" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
}
