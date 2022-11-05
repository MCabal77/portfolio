import React from "react";
import SectionTitle from "./SectionTitle";

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20">
      {/* Left Side */}
      <div className="w-full">
        <SectionTitle>&lt;about_me&gt;</SectionTitle>
        <p className="text-xl text-P_COLOR">
          Hello world! My name is <span className=" text-TERTIARY_COLOR">Marc</span>, and I enjoy creating things that have {" "}
          <span className=" text-TERTIARY_COLOR">functionality</span> and <span className=" text-TERTIARY_COLOR">aesthetics</span>. I started out with scripting in video
          games as a kid and from then; it spiraled into a growing interest.
          Fast forward to today and my interests now have been in <span className=" text-TERTIARY_COLOR">developing</span> web
          services and <span className=" text-TERTIARY_COLOR">automating</span> my life.
          <br />
        </p>
        <p className="inline-block text-P_COLOR mt-3 text-md md:text-lg">
          Email me! &nbsp;
        </p>
        <a
          href="mailto:marccabal77@gmail"
          className="inline-block mt-3 text-md md:text-lg  underline text-P_COLOR hover:text-MAIN_COLOR_DARKER"
        >
          marccabal77@gmail.com
        </a>
      </div>

      {/* Right Side */}
      {/* TODO: Add image of yourself */}
      {/* <img
        src={headshot}
        alt="Marc Cabal"
        className="w-full md:w-6/12 rounded-lg object-cover"
      /> */}
    </div>
  );
}

export default About;
