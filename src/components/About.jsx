import React from "react";
import SectionTitle from "./SectionTitle";

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20">
      {/* Left Side */}
      <div className="w-full md:w-6/12">
        <SectionTitle>&lt;about_me&gt;</SectionTitle>
        <p className="text-xl text-P_COLOR">
          Hello World! My name is{" "}
          <span className=" text-TERTIARY_COLOR">Marc</span> and I'm a developer
          who is primarily{" "}
          <span className=" text-TERTIARY_COLOR">self taught</span>. I wrote my
          first <span className=" italic text-TERTIARY_COLOR">Hello World</span>{" "}
          when I was <span className=" text-TERTIARY_COLOR">12 years old</span>{" "}
          and I've been hooked since. With an industry that's constantly
          evolving, I've always enjoyed the thrill of the chase.
          <br />
        </p>
        <a
          href="mailto:marccabal77@gmail"
          className="block mt-3 text-md md:text-lg  underline text-P_COLOR hover:text-MAIN_COLOR_DARKER"
        >
          marccabal77@gmail.com
        </a>
      </div>

      {/* Right Side */}
      {/* TODO: Add image of yourself */}
      <img
        src=""
        alt="Marc Cabal"
        className="w-full md:w-6/12 rounded-lg object-cover"
      />
    </div>
  );
}

export default About;
