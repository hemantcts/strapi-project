
import './styles/style.css';
import './styles/responsive_style.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PharmacyOverview from './components/apotheke routes/PharmacyOverview';
import { AppointmentBooking } from './components/apotheke routes/AppointmentBooking';
import PharmacyTeam from './components/apotheke routes/PharmacyTeam';
import { PharmacyEmergency } from './components/apotheke routes/PharmacyEmergency';
import { PharmacyServices } from './components/apotheke routes/PharmacyServices';
import OverviewPractice from './components/praxis routes/OverviewPractice';
import Kontakt from './components/praxis routes/Kontakt';
import Ernahrungsdiagnostik from './components/Ernährungsdiagnostik routes/Ernahrungsdiagnostik';
import Datenschutz from './components/Datenschutz';
import ScrollToTop from './components/mini_components/ScrollToTop';
import { TerminBuchenPraxis } from './components/praxis routes/TerminBuchenPraxis';
import PraxisTeam from './components/praxis routes/PraxisTeam';
import { PraxisNotfall } from './components/praxis routes/PraxisNotfall';
import { DienstleistungenPraxis } from './components/praxis routes/DienstleistungenPraxis';
import { UbersichtGesundheitsthemen } from './components/ubersicht-gesundheitsthemen routes/UbersichtGesundheitsthemen';
import { Blog } from './components/ubersicht-gesundheitsthemen routes/Blog';
import { Impressum } from './components/Impressum';
import { Jobs } from './components/Jobs';
import { Error } from './components/Error';
import { SearchResult } from './components/SearchResult';
import { Angebot } from './components/Ernährungsdiagnostik routes/Angebot';
import { useState } from 'react';

function App() {

  return (
    <div >
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* apotheke routes */}
        {/* <Route path="/ubersicht-apotheke" element={<PharmacyOverview />} />
        <Route path="/terminbuchung-apotheke" element={<AppointmentBooking />} />
        <Route path="/apotheke-team" element={<PharmacyTeam />} />
        <Route path="/apotheke-notfall" element={<PharmacyEmergency />} />
        <Route path="/dienstleistungen-apotheke" element={<PharmacyServices />} /> */}

        {/* praxis routes */}
        {/* <Route path="/ubersicht-praxis" element={<OverviewPractice />} />
        <Route path="/terminbuchung-praxis" element={<TerminBuchenPraxis />} />
        <Route path="/praxis-team" element={<PraxisTeam />} />
        <Route path="/praxis-notfall" element={<PraxisNotfall />} />
        <Route path="/dienstleistungen-praxis" element={<DienstleistungenPraxis />} />
        <Route path="/kontakt" element={<Kontakt />} /> */}


        {/* Ernährungsdiagnostik routes */}
        {/* <Route path="/ernahrungsdiagnostik" element={<Ernahrungsdiagnostik />} />
        <Route path="/angebot" element={<Angebot />} /> */}

        {/* ubersicht-gesundheitsthemen routes */}
        {/* <Route path="/ubersicht-gesundheitsthemen" element={<UbersichtGesundheitsthemen />} />
        <Route path="/:title" element={<Blog />} /> */}

        {/* extra routes */}
        {/* <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/impressum" element={<Impressum />} /> */}

        {/* jobs routes */}
        {/* <Route path="/jobs" element={<Jobs />} /> */}

        {/* search routes */}
        {/* <Route path="/search-result" element={<SearchResult />} /> */}
        
        {/* Catch-All Route for Undefined Paths */}
        {/* <Route path="/error" element={<Error />} /> */}
        <Route path="*" element={<Error />} />

      </Routes>
    </div>
  );
}

export default App;
