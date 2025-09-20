// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
// ✅ Import Survey page

// Admin
import AdminLogin from "./Pages/Admin/AdminLogin.jsx";
import AlertsPage from "./Pages/Farmer/AlertsPage.jsx";
import FarmerRiskResult from "./Pages/Farmer/FarmerRiskResult.jsx";

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
        <Route path="/vet-profileEdit" element={<VetProfileEdit />} />
        <Route path="/vet/dashboard" element={<VetDashboard />} />
        <Route path="/vet/vet-farmDetails" element={<VetFarmDetails />} />
        {/* Farmer */}
        <Route path="/farmer/login" element={<FarmerLoginPage />} />
        <Route path="/farmer/record" element={<MyRecords />} />
        <Route path="/farmer/dashboard" element={<FarmerDashboard />} />
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
      </Routes>
    </Router>
  );
}
