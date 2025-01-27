
import './styles/style.css';
import './styles/responsive_style.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PharmacyOverview from './components/PharmacyOverview';

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pharmacy-overview" element={<PharmacyOverview />} />
        <Route path="/pharmacy-team" element={<PharmacyOverview />} />
      </Routes>
    </div>
  );
}

export default App;
