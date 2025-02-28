import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home";
// import Privacy from "./Privacy"; // Import your Privacy homecomponent

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/privacy" element={<Privacy />} /> */}
      </Routes>

      <div className="flex justify-center items-center bg-[#00AEEF] px-4 h-[41px] md:h-[93px]">
        <ul className="flex justify-center gap-1 text-[9px] md:text-xl md:gap-10">
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

      <div className="mx-6 leading-6 text-[10px] text-center mt-4 mb-10">
        <span className="">
          © Copyright 2025 Wheeler Solutions, LLC All Rights Reserved
        </span>
        <br />
        <span>Wheeler Solutions, LLC 1262 Route 206 Shamong, NJ 08088</span>
        <br />
        <span>Copyright © 2018 MentalGameTime.com</span>
      </div>
    </Router>
  );
}

export default App;
