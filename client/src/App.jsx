// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/Farmer/LoginPage.jsx";
import FarmerDashboard from "./Pages/Farmer/FarmerDashBoard.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<FarmerDashboard />} />
      </Routes>
    </Router>
  );
}
