import Home from "./Home";

function App() {
  return (
    <>
    <Home/>
      <div className="flex justify-center items-center bg-[#00AEEF] px-4 h-[41px] md:h-[93px]">
        <ul className="flex justify-center gap-1 text-[9px] md:text-xl md:gap-6">
          <li>Home</li>
          <li>|</li>
          <li>Members Area</li>
          <li>|</li>
          <li>Terms & Conditions</li>
          <li>|</li>
          <li>Privacy</li>
          <li>|</li>
          <li>Billing Support</li>
        </ul>
      </div>

      <div className="mx-6 leading-6 text-[10px] text-center mt-4 mb-10 md:mb-14 md:text-2xl md:leading-10">
        <span className="">
          © Copyright 2025 Wheeler Solutions, LLC All Rights Reserved
        </span>
        <br />
        <span>Wheeler Solutions, LLC 1262 Route 206 Shamong, NJ 08088</span>
        <br />
        <span>Copyright © 2018 MentalGameTime.com</span>
      </div>
    </>

    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/privacy" element={<Privacy />} />
    //   </Routes>

    //   <div className="flex justify-center items-center bg-[#00AEEF] px-4 h-[41px] md:h-[93px]">
    //     <ul className="flex justify-center gap-1 text-[9px] md:text-xl md:gap-6">
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>|</li>
    //       <li>
    //         <Link to="/gavriel/members">Members Area</Link>
    //       </li>
    //       <li>|</li>
    //       <li>
    //         <Link to="/gavriel/terms">Terms & Conditions</Link>
    //       </li>
    //       <li>|</li>
    //       <li>
    //         <Link to="/gavriel/privacy">Privacy</Link>
    //       </li>
    //       <li>|</li>
    //       <li>
    //         <Link to="/gavriel/billing-support">Billing Support</Link>
    //       </li>
    //     </ul>
    //   </div>

    //   <div className="mx-6 leading-6 text-[10px] text-center mt-4 mb-10 md:mb-14 md:text-2xl md:leading-10">
    //     <span className="">
    //       © Copyright 2025 Wheeler Solutions, LLC All Rights Reserved
    //     </span>
    //     <br />
    //     <span>Wheeler Solutions, LLC 1262 Route 206 Shamong, NJ 08088</span>
    //     <br />
    //     <span>Copyright © 2018 MentalGameTime.com</span>
    //   </div>
    // </Router>
  );
}

export default App;
