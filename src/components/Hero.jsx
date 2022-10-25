import React from "react";

function Hero() {
  return (
    <div id='hero' className="flex items-center justify-center flex-col py-20">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-H_COLOR font-semibold">
          &lt;marc_cabal&gt;
        </h1>
        <p className="text-md md:text-xl max-w-md mb-3 text-P_COLOR">
          A full-stack web developer.
        </p>
        <a href='#works' className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-BTN_TXT bg-BTN_COLOR hover:bg-BTN_COLOR_DARKER md:text-md">See Works</a>
      </div>
    </div>
  );
}

export default Hero;
