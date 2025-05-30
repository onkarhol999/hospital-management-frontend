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
import Dashboard from './componentas/Dashboard';
import EmailPage from './componentas/EmailPage';
import UserSignUp from './componentas/UserSignUp';
import UserLogin from './componentas/UserLogin';

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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/emailPage" element={<EmailPage />} />
        <Route path="/signUp" element={<UserSignUp />} />
        <Route path="/login" element={<UserLogin />} />
      </Routes>
    </Router>
  );
}

export default App;

