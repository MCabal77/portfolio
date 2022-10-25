import React from "react";

function Footer() {
  return (
    <div className="py-5 text-STROKE_COLOR bg-H_COLOR text-center rounded-t-lg">
      <a href="#hero" className="block text-xl md:text-2xl font-semibold">Marc Cabal</a>
      <a href="mailto:marccabal77@gmail" className=" text-sm md:md hover:text-STROKE_COLOR_LIGHTER">marccabal77@gmail.com</a>
      <p className="text-xs  mt-2 text-STROKE_COLOR_LIGHTER">© Marc Cabal {new Date().getFullYear()} All rights reserved</p>
    </div>
  );
}

export default Footer;
