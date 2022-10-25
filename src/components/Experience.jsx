import React from "react";
import SectionTitle from "./SectionTitle";
import experiences from "../data/experiences";
import ExperienceItem from "./ExperienceItem";

function Experience() {
  return (
    <div className="py-12">
      <SectionTitle>&lt;my_experience&gt;</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {experiences.map((experience) => (
          <ExperienceItem
            key={experience.title}
            title={experience.title}
            icon={experience.icon}
            description={experience.description}
          ></ExperienceItem>
        ))}
      </div>
    </div>
  );
}

export default Experience;
