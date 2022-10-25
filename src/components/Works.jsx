import React from "react";
import SectionTitle from "./SectionTitle";
import WorksItem from "./WorksItem";
import works from "../data/works";

function Works() {
  return (
    <div id='works' className="py-12">
      <SectionTitle id="works">&lt;recent_works&gt;</SectionTitle>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
        {works.map((work) => (
          <WorksItem
            key={work.title}
            imageUrl={work.imageUrl}
            title={work.title}
            tech={work.tech}
            workUrl={work.workUrl}
          ></WorksItem>
        ))}
      </div>
    </div>
  );
}

export default Works;
