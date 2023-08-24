import logo from "./logo.svg";
import "./App.css";
import DetailsForm from "./components/DetailsForm/DetailsForm";
import { Route, Routes} from 'react-router-dom'
import ViewPage from "./components/ViewPage/ViewPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<ViewPage />} />
        <Route path="/" element={<DetailsForm />} />
      </Routes>
    </>
  );
}

export default App;
