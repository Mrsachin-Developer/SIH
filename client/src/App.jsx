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
import VetHome from "./Pages/Vet/VetHome.jsx";
import VetCases from "./Pages/Vet/VetCases.jsx";
import VetAlerts from "./Pages/Vet/VetAlerts.jsx";
import VetReports from "./Pages/Vet/VetReports.jsx";
import VetProfile from "./Pages/Vet/VetProfile.jsx";
import VetProfileEdit from "./Pages/Vet/VetProfileEdit.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ids" element={<Ids />} />
        <Route path="/vet/login" element={<VetLogin />} />
        <Route path="/vet/home" element={<VetHome />} />
        <Route path="/vet-dashboard" element={<VetDashboard />} />
        <Route path="/vet-Cases" element={<VetCases />} />
        <Route path="/vet-alerts" element={<VetAlerts />} />
        <Route path="/vet-reports" element={<VetReports />} />
        <Route path="/vet-profile" element={<VetProfile />} />
        <Route path="/vet-profileEdit" element={<VetProfileEdit />} />
        




        <Route path="/farmer/login" element={<FarmerLoginPage />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<FarmerDashboard />} />
      </Routes>
    </Router>
  );
}
