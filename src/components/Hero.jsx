import React from "react";
import TypeWriter from "typewriter-effect";

function Hero() {
  return (
    <div id="hero" className="flex items-center justify-center flex-col py-20">
      <div className="text-center w-full flex flex-col items-center">
        <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-H_COLOR font-semibold">
          &lt;marc_cabal&gt;
        </h1>
        {/* Typewriter */}
        <p className="text-md md:text-xl max-w-md mb-3 text-P_COLOR">
          I'm a
          {/* Div is needed here to change the color of the typewriter */}
          <div className=" text-TERTIARY_COLOR">
            <TypeWriter
              options={{
                strings: [
                  "web developer",
                  "software developer",
                  "fullstack developer",
                  "programmer",
                ],
                autoStart: true,
                loop: true,
                pauseFor: 2500,
              }}
            />
          </div>
        </p>

        {/* Container for buttons */}
        <div className="flex gap-5">
          <a
            href="#works"
            className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-BTN_TXT bg-BTN_COLOR hover:bg-BTN_COLOR_DARKER md:text-md"
          >
            See Works
          </a>

          <a
            href="../../resume.pdf" target='target_'
            className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-BTN_TXT bg-BTN_COLOR hover:bg-BTN_COLOR_DARKER md:text-md"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
