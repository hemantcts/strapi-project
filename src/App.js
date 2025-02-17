
import './styles/style.css';
import './styles/responsive_style.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PharmacyOverview from './components/PharmacyOverview';
import { AppointmentBooking } from './components/AppointmentBooking';
import PharmacyTeam from './components/PharmacyTeam';

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pharmacy-overview" element={<PharmacyOverview />} />
        <Route path="/appointment-booking" element={<AppointmentBooking />} />
        <Route path="/pharmacy-team" element={<PharmacyTeam />} />
      </Routes>
    </div>
  );
}

export default App;
