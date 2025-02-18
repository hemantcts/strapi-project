
import './styles/style.css';
import './styles/responsive_style.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PharmacyOverview from './components/PharmacyOverview';
import { AppointmentBooking } from './components/AppointmentBooking';
import PharmacyTeam from './components/PharmacyTeam';
import { PharmacyEmergency } from './components/PharmacyEmergency';
import { PharmacyServices } from './components/PharmacyServices';
import OverviewPractice from './components/OverviewPractice';

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pharmacy-overview" element={<PharmacyOverview />} />
        <Route path="/appointment-booking" element={<AppointmentBooking />} />
        <Route path="/pharmacy-team" element={<PharmacyTeam />} />
        <Route path="/pharmacy-emergency" element={<PharmacyEmergency />} />
        <Route path="/pharmacy-services" element={<PharmacyServices />} />
        <Route path="/overview-practice" element={<OverviewPractice />} />
      </Routes>
    </div>
  );
}

export default App;
