import React from "react";

function WorksItem({ imageUrl, title, tech, workUrl}) {
  return (
    <a href={workUrl} target='_blank' className=" bg-TERTIARY_COLOR rounded-lg overflow-hidden group hover:bg-BTN_COLOR_DARKER transform transition duration-500 hover:scale-105">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-36 md:h-48 object-cover"
      />
      <div className="text-STROKE_COLOR p-5 w-full">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          {tech.map(item => (
            <span key={item} className='inline-block px-2 py-1 bg-H_COLOR rounded-md'>{item}</span>
          ))}
        </p>
      </div>
    </a>
  );
}

export default WorksItem;
