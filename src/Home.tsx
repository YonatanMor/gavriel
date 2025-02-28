import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-screen">
      {/* header mobile */}
      <div className="h-[57px] flex items-end bg-[#00AEEF] md:hidden">
        <img
          src="crosswords-logo 1.svg"
          alt="crosswords-logo"
          className="h-[48px]"
        />
        <div className="flex ml-8">
          <img src="join-header-btn.svg" alt="" className="mb-4 w-[60px]" />
          <img src="sign-in-pic.svg" alt="" className="mb-4 ml-2 " />
          <img src="Sign In-writing.svg" alt="" className="mb-4 ml-2" />
        </div>
      </div>

      {/* header desktop */}
      <div className="h-[111px] hidden items-end bg-[#00AEEF] md:flex justify-end">
        <img
          src="desktop/crosswords-logo 1.svg"
          alt="crosswords-logo"
          className="absolute top-[27px] left-[58px] z-100"
        />
        <div className="flex items-center mb-[8px]">
          <ul className="flex justify-center mx-10 gap-10 text-[19px]">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/members">Members Area</Link>
            </li>
            <li>
              <Link to="/terms">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy</Link>
            </li>
            <li>
              <Link to="/billing-support">Billing Support</Link>
            </li>
          </ul>
          {/* <div className="flex h-40 items-center ml-8 bg-red-600"> */}
          <img src="desktop/join-header-btn.svg" alt="" className="mt-2 mx-2" />
          <img src="desktop/sign-in-pic.svg" alt="" className=" ml-2" />
          <img
            src="desktop/Sign In-writing.svg"
            alt=""
            className=" ml-1 mr-10"
          />
        </div>
        {/* </div> */}
      </div>

      <div>
        <div className="relative">
          <img src="hero.svg" alt="hero mobile" className="block md:hidden" />
          <img
            src="desktop/hero.svg"
            alt="hero desktop"
            className="hidden md:block w-screen"
          />
          <div className="absolute left-10 top-2 md:top-20">
            <div>
              <span className="text-[42px] md:text-[70px] text-white">
                Fun Games{" "}
              </span>
              <br />
              <span className="text-[24px] md:text-[70px] leading-8 text-white">
                for a Healthy Brain
              </span>
            </div>

            <div className="block md:hidden">
              <span className="text-[18px] text-white leading-tight">
                Join the community
              </span>
              <br />
              <span className="text-[18px] text-white leading-tight">
                that keeps your mind
              </span>
              <br />
              <span className="text-[18px] text-white leading-tight">
                sharp and engaged.
              </span>
            </div>

            <div className="hidden md:block">
              <span className="text-[36px] text-white leading-20">
                Join the community that keeps
              </span>
              <br />
              <span className="text-[36px] text-white leading-10">
                your mind sharp and engaged.
              </span>
            </div>
          </div>
          <img
            src="get-started-white.svg"
            alt="get-started-white"
            className="absolute left-[100px] top-48 w-39 block md:hidden"
          />
          <img
            src="desktop/get-started-white.svg"
            alt="get-started-white"
            className="absolute left-170 top-44 w-[525px] hidden md:block"
          />
        </div>
      </div>

      <div className="my-4 mx-4">
        <img src="chalkboard.svg" alt="chalkboard" />
        <div className="mx-2 mt-4">
          <span className="text-[21px] leading-tight">
            This is why MentalGameTime
          </span>
          <br />
          <span className="text-[21px] leading-tight">is right for you.</span>
          <p className="mt-2">
            There are numerous articles online, documentaries created, TV series
            on the topic, and scientific research published that show the
            positive benefits of brain training and mind exercises. However, if
            you still aren't sure, MentalGameTime.com offers a 30 day risk free
            trial period. If you are not happy with our site, just let us know
            and we will cancel and refund your first month's membership fee, no
            questions asked!
          </p>
        </div>
      </div>

      <div className="relative my-6 flex items-center h-[41px]">
        <a href="">
          <img
            src="get-started-btn.svg"
            alt="get-started-btn"
            className="absolute top-0 left-0 right-0 mx-auto z-100"
          />
        </a>
        <div className="h-[6px] bg-gray-400 w-full absolute top-[50%] transform -translate-y-1/2"></div>
      </div>

      <div className="mt-4 mx-4">
        <div className="mx-2 mt-4">
          <span className="text-[21px] leading-tight">Where's The Proof? </span>
          <p className="mt-2">
            There are numerous articles online, documentaries created, TV series
            on the topic, and scientific research published that show the
            positive benefits of brain training and mind exercises. However, if
            you still aren't sure, MentalGameTime.com offers a 30 day risk free
            trial period. If you are not happy with our site, just let us know
            and we will cancel and refund your first month's membership fee, no
            questions asked!
          </p>
        </div>
      </div>

      <img src="maze.svg" alt="maze" className="my-10" />

      <div className="mt-4 mx-4">
        <div className="mx-2 mt-4">
          <span className="text-[21px] leading-tight">
            Keep Your Mind in Shape
          </span>
          <p className="mt-2">
            The MentalGameTime.com exercises are designed to stimulate your
            brain. Solving simple math and logic problems quickly, and reading
            aloud have been proven to be effective methods of achieving this
            goal. Baby Boomers and test-prepping school kids alike want to
            challenge themselves and find ways to stay sharp. MentalGameTime.com
            acts like a treadmill for the mind. MentalGameTime.com presents
            quick mental activities that help keep your mind in shape.
            Activities include solving simple math problems, simultaneous
            counting, finding differences between images, reading classic
            literature out loud, memorization and recall activities and more.
            You can also play fun games like Sudoku, the number puzzle game
            which has become an extremely popular feature in U.S. Newspapers, as
            well as crossword and word search. We all know as we grow older our
            bodies change and it becomes important to regularly exercise to
            maintain health and fitness. Our minds are no different. "Use it or
            lose it," as the saying goes. New research indicates mental acuity
            may be strengthened, like muscles, with brain exercises. And these
            exercises must be done regularly to retain the benefits long term.
          </p>
        </div>
      </div>

      <div className="relative my-6 flex items-center h-[41px]">
        <a href="">
          <img
            src="get-started-btn.svg"
            alt="get-started-btn"
            className="absolute top-0 left-0 right-0 mx-auto z-100"
          />
        </a>
        <div className="h-[6px] bg-gray-400 w-full absolute top-[50%] transform -translate-y-1/2"></div>
      </div>

      {/* <div className="flex justify-center items-center bg-[#00AEEF] px-4 h-[41px]">
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
        </div> */}

      <div className="mx-6 leading-6 text-[10px] text-center mt-4 mb-10">
        <span className="">
          © Copyright 2025 Wheeler Solutions, LLC All Rights Reserved
        </span>
        <br />
        <span>Wheeler Solutions, LLC 1262 Route 206 Shamong, NJ 08088</span>
        <br />
        <span>Copyright © 2018 MentalGameTime.com</span>
      </div>

      {/* Define Routes */}
    </div>
  );
}
