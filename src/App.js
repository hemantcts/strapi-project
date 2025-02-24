
import './styles/style.css';
import './styles/responsive_style.css';
import { Routes, Route, useParams } from 'react-router-dom';
import Home from './components/Home';
import PharmacyOverview from './components/PharmacyOverview';
import { AppointmentBooking } from './components/AppointmentBooking';
import PharmacyTeam from './components/PharmacyTeam';
import { PharmacyEmergency } from './components/PharmacyEmergency';
import { PharmacyServices } from './components/PharmacyServices';
import OverviewPractice from './components/OverviewPractice';
import Kontakt from './components/Kontakt';
import Ernahrungsdiagnostik from './components/Ernahrungsdiagnostik';
import Datenschutz from './components/Datenschutz';
import ScrollToTop from './components/mini_components/ScrollToTop';
import { TerminBuchenPraxis } from './components/TerminBuchenPraxis';
import PraxisTeam from './components/PraxisTeam';
import { PraxisNotfall } from './components/PraxisNotfall';
import { DienstleistungenPraxis } from './components/DienstleistungenPraxis';
import { UbersichtGesundheitsthemen } from './components/UbersichtGesundheitsthemen';
import { Blog } from './components/Blog';
import { Impressum } from './components/Impressum';
import { Jobs } from './components/Jobs';
import { Error } from './components/Error';
import { SearchResult } from './components/SearchResult';
import { Angebot } from './components/Angebot';
import { useState } from 'react';

function App() {

  // const { title } = useParams();
  // const [blogs, setBlogs] = useState();
  // const [isMatched, setMatched] = useState(false);

  // const getBlogs = async () => {
  //   const response = await fetch(`https://medzentrum.entwicklung-loewenmut.ch/api/blogs?populate=*`)
  //   const data = await response.json();
  //   console.log(data);
  //   if (data) {
  //     setBlogs(data.data);
  //   }
  // }

  // useEffect(() => {
  //   getBlogs();
  // }, [])

  // useEffect(() => {
  //   if (blogs?.length > 0 && title) {
  //     const matchedBlog = blogs?.find((blog) => blog.title.toString() === title);
  //     if(matchedBlog){
  //       setMatched(true);
  //     }
  //   }
  // }, [blogs, title]);

  return (
    <div >
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* apotheke routes */}
        <Route path="/ubersicht-apotheke" element={<PharmacyOverview />} />
        <Route path="/terminbuchung-apotheke" element={<AppointmentBooking />} />
        <Route path="/apotheke-team" element={<PharmacyTeam />} />
        <Route path="/apotheke-notfall" element={<PharmacyEmergency />} />
        <Route path="/dienstleistungen-apotheke" element={<PharmacyServices />} />

        {/* praxis routes */}
        <Route path="/ubersicht-praxis" element={<OverviewPractice />} />
        <Route path="/terminbuchung-praxis" element={<TerminBuchenPraxis />} />
        <Route path="/praxis-team" element={<PraxisTeam />} />
        <Route path="/praxis-notfall" element={<PraxisNotfall />} />
        <Route path="/dienstleistungen-praxis" element={<DienstleistungenPraxis />} />
        <Route path="/kontakt" element={<Kontakt />} />

        {/* Ernährungsdiagnostik routes */}
        <Route path="/ernahrungsdiagnostik" element={<Ernahrungsdiagnostik />} />

        {/* Datenschutzerklärung routes */}
        <Route path="/datenschutz" element={<Datenschutz />} />

        <Route path="/ubersicht-gesundheitsthemen" element={<UbersichtGesundheitsthemen />} />
        <Route path="/:title" element={<Blog />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/search-result" element={<SearchResult />} />
        <Route path="/angebot" element={<Angebot />} />


        {/* Catch-All Route for Undefined Paths */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
