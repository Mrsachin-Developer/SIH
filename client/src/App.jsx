// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/Farmer/FarmerLoginPage.jsx";
import FarmerDashboard from "./Pages/Farmer/FarmerDashBoard.jsx";
import Home from "./Pages/Home.jsx";
import Ids from "./Pages/Ids.jsx";
import VetLogin from "./Pages/Vet/VetLogin.jsx";
import VetDashboard from "./Pages/Vet/VetDashboard";
import FarmerLoginPage from "./Pages/Farmer/FarmerLoginPage.jsx";
import AdminLogin from "./Pages/Admin/AdminLogin.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ids" element={<Ids />} />
        <Route path="/vet/login" element={<VetLogin />} />
        <Route path="/vet/dashboard" element={<VetDashboard />} />

        <Route path="/farmer/login" element={<FarmerLoginPage />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<FarmerDashboard />} />
      </Routes>
    </Router>
  );
}
