import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home";
import Privacy from "./Privacy"; // Import your Privacy homecomponent

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      
      <div className="flex justify-center items-center bg-[#00AEEF] px-4 h-[41px]">
        <ul className="flex justify-center gap-1 text-[9px]">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/members">Members Area</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/terms">Terms & Conditions</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/privacy">Privacy</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/billing-support">Billing Support</Link>
          </li>
        </ul>
      </div>
    </Router>
  );
}

export default App;
