import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './componentas/LandingPage';
import About from './componentas/About';
import Services from './componentas/Services';
import Blogs from './componentas/Blogs';
import FitnessPage from './componentas/FitnessPage';
import FindMyDoctor from './componentas/FindMyDoctor';
import CreateAccount from './componentas/DocterAccountCreation'
import AppointmentBooking from './componentas/AppointmentBooking';
import DocterDashBoardLogin from './componentas/DoctorDashBoardLogin'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/fitness" element={<FitnessPage />} />
        <Route path="/findMyDoctor" element={<FindMyDoctor />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/appointment" element={<AppointmentBooking />} />
        <Route path="/doctorDashBoardLogin" element={<DocterDashBoardLogin/>} />

      </Routes>
    </Router>
  );
}

export default App;

