import Home from "./Home";

function App() {
  return (
    <>
      <Home />
      <div className="flex justify-center items-center bg-[#00AEEF] px-4 h-[41px] md:h-[93px]">
        <ul className="flex justify-center gap-1 text-[9px] md:text-xl md:gap-6">
          {/* Replace # with the actual link to Home*/}
          <a href="#">
            <li>Home</li>
          </a>
          <li>|</li>
          {/* Replace # with the actual link to Members Area*/}
          <a href="#">
            <li>Members Area</li>
          </a>
          <li>|</li>
          {/* Replace # with the actual link to Terms & Conditions*/}
          <a href="#">
            <li>Terms & Conditions</li>
          </a>
          <li>|</li>
          {/* Replace # with the actual link to Privacy*/}
          <a href="#">
            <li>Privacy</li>
          </a>
          <li>|</li>
          {/* Replace # with the actual link to Billing Support*/}
          <a href="#">
            <li>Billing Support</li>
          </a>
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
  );
}

export default App;
