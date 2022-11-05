import React from "react";
import { github } from "../assets";

function WorksItem({ imageUrl, title, description, tech, workUrl, githubUrl }) {
  return (
    <div className=" bg-TERTIARY_COLOR rounded-lg overflow-hidden group hover:bg-BTN_COLOR_DARKER transform transition duration-500 hover:scale-105 flex flex-col justify-between">
      {/* Image of project */}
      <a href={workUrl} target="_blank">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-36 md:h-48 object-cover"
        />
      </a>

      {/* Container for text */}
      <div className="text-STROKE_COLOR p-5 w-full flex flex-col grow justify-between">
        {/* Wrapper to put title and github logo on the same line */}
        <div className="flex gap-3">
          <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
            {title}
          </h3>
          {/* Github logo */}
          <a href={githubUrl} target="_blank">
            <img src={github} className="w-6 h-6" />
          </a>
        </div>
        {/* Title */}

        {/* Description */}
        <p className="mb-2 md:mb-3 wrap">{description}</p>
        {/* Mapping the technologies used in the project */}
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          {tech.map((item) => (
            <span
              key={item}
              className="inline-block px-2 py-1 bg-H_COLOR rounded-md"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default WorksItem;
