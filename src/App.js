import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import './styles/App.css';

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/*<Route path="/login" element={<LoginModal />} />*/}
        {/*<Route path="/register" element={<RegisterModal />} />*/}
      </Routes>
    </div>
  </Router>
  );
}

export default App;
