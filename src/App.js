
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
import Kontakt from './components/Kontakt';
import ScrollToTop from './components/mini_components/ScrollToTop';

function App() {
  return (
    <div >
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ubersicht-apotheke" element={<PharmacyOverview />} />
        <Route path="/terminbuchung-apotheke" element={<AppointmentBooking />} />
        <Route path="/apotheke-team" element={<PharmacyTeam />} />
        <Route path="/apotheke-notfall" element={<PharmacyEmergency />} />
        <Route path="/dienstleistungen-apotheke" element={<PharmacyServices />} />
        <Route path="/ubersicht-praxis" element={<OverviewPractice />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
    </div>
  );
}

export default App;
