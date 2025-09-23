// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "leaflet/dist/leaflet.css";

// Pages
import Home from "./Pages/Home.jsx";
import Ids from "./Pages/Ids.jsx";

// Vet
import VetLogin from "./Pages/Vet/VetLogin.jsx";
import VetDashboard from "./Pages/Vet/VetDashboard.jsx";
import VetHome from "./Pages/Vet/VetHome.jsx";
import VetCases from "./Pages/Vet/VetCases.jsx";
import VetAlerts from "./Pages/Vet/VetAlerts.jsx";
import VetReports from "./Pages/Vet/VetReports.jsx";
import VetProfile from "./Pages/Vet/VetProfile.jsx";
import VetProfileEdit from "./Pages/Vet/VetProfileEdit.jsx";
import VetFarmDetails from "./Pages/Vet/VetFarmDetails.jsx";

// Farmer
import FarmerLoginPage from "./Pages/Farmer/FarmerLoginPage.jsx";
import FarmerDashboard from "./Pages/Farmer/FarmerDashboard.jsx";
import FarmerIncidentReport from "./Pages/Farmer/FarmerIncidentReport.jsx";
import RiskAssessmentSurvey from "./Pages/Farmer/Survey.jsx";
import TrainingGuides from "./Pages/Farmer/TrainingAndGuide.jsx";
import MyRecords from "./Pages/Farmer/Record.jsx";
import AlertsPage from "./Pages/Farmer/AlertsPage.jsx";
import FarmerRiskResult from "./Pages/Farmer/FarmerRiskResult.jsx";
// ✅ Import Survey page

// Admin
import AdminLogin from "./Pages/Admin/AdminLogin.jsx";
import AdminDashboard from "./Pages/Admin/AdminDashboard.jsx";
import AnalyticsHeatmap from "./Pages/Admin/AnalyticsHeatmap.jsx";
import ComplianceReports from "./Pages/Admin/ComplianceReports.jsx";
import VetAppointment from "./Pages/Vet/VetAppointment.jsx";
import VetHeatmap from "./Pages/Vet/VetHeatmap.jsx";
import AdminAlerts from "./Pages/Admin/AdminAlerts.jsx";
import AdminUsers from "./Pages/Admin/AdminUsers.jsx";
import AdminProfile from "./Pages/Admin/AdminProfile.jsx";
import AdminProfileEdit from "./Pages/Admin/AdminProfileEdit.jsx";
import FarmerProfile from "./Pages/Farmer/FarmerProfile.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/ids" element={<Ids />} />
        {/* Vet */}
        <Route path="/vet/login" element={<VetLogin />} />
        <Route path="/vet/home" element={<VetHome />} />
        <Route path="/vet-dashboard" element={<VetDashboard />} />
        <Route path="/vet-Cases" element={<VetCases />} />
        <Route path="/vet-alerts" element={<VetAlerts />} />
        <Route path="/vet-reports" element={<VetReports />} />
        <Route path="/vet-profile" element={<VetProfile />} />
        <Route path="/vet-heatmap" element={<VetHeatmap />} />
        <Route path="/vet-profileEdit" element={<VetProfileEdit />} />
        <Route path="/vet/dashboard" element={<VetDashboard />} />
        <Route path="/vet/vet-farmDetails" element={<VetFarmDetails />} />
        <Route
          path="/vet/vet-appointmentdetails"
          element={<VetAppointment />}
        />
        {/* Farmer */}
        <Route path="/farmer/login" element={<FarmerLoginPage />} />
        <Route path="/farmer/record" element={<MyRecords />} />
        <Route path="/farmer/dashboard" element={<FarmerDashboard />} />
        <Route path="/farmer/profile" element={<FarmerProfile />} />
        <Route
          path="/farmer/incident-report"
          element={<FarmerIncidentReport />}
        />
        <Route path="/farmer/survey" element={<RiskAssessmentSurvey />} />{" "}
        <Route path="/farmer/alert" element={<AlertsPage />}></Route>
        <Route path="/farmer/riskalert" element={<FarmerRiskResult />}>
          {" "}
        </Route>
        <Route path="/farmer/training" element={<TrainingGuides />} />
        {/* ✅ Added */}
        {/* Admin */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/analytics-heatmap" element={<AnalyticsHeatmap />} />
        <Route
          path="/admin/ComplianceReports"
          element={<ComplianceReports />}
        />
        <Route path="/admin/alerts" element={<AdminAlerts />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/admin-profile" element={<AdminProfile />} />
        <Route path="/admin-profileEdit" element={<AdminProfileEdit />} />
      </Routes>
    </Router>
  );
}
