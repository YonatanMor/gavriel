function App() {
  return (
    <div className="w-screen">
      <div className="h-[57px] flex items-end bg-[#00AEEF]">
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
      <div>
        <div className="relative">
          <img src="hero.svg" alt="" />
          <div className="absolute left-10 top-2">
            <div>
              <span className="text-[42px] text-white">Fun Games </span>
              <br />
              <span className="text-[24px] text-white">
                for a Healthy Brain
              </span>
            </div>
            <div>
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
          </div>
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

      <div className="relative flex items-center h-[41px]">
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
            Unlike other brain training sites, we believe in a well rounded
            approach. Not only do we offer the best variety of brain training
            games, we also offer advice and insights that go beyond just
            exercises such as book club suggestions, lifestyle articles, dietary
            tips and recommendations for foods that also help your brain
            function at its best. Don't just join a game site, join our
            community and enjoy newly added games, app suggestions, and
            challenge yourself to become better both online and in real life.
            Soon these new reasoning skills and quick recall will benefit you
            and how you function everyday. Regardless of why you are here, the
            success of brain exercises relies on 3 things: 1. It's New 2. It's
            Challenging 3. It's Fun!
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
