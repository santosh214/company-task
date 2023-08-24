import './App.css';
import {LandingPage} from './components/LandingPage';
import Navbarr from './components/Navbar';

function App() {
  return (
    <div className="pb-5">
      <Navbarr />
      <LandingPage />
    </div>
  );
}

export default App;
