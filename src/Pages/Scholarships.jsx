import SectionTitle from "../Components/SectionTitle";
import { scholarships } from "../Constants/constants";

import ScholarshipCards from "../Components/ScholarshipCards";

const Scholarships = () => {
  return (
    <div id="projects" className="w-full flex justify-center ">
      <div className="w-full xl:w-[70%] flex flex-col pb-16 mt-[92px]">
        <div className="w-full ">
          <SectionTitle
            title="Scholarships"
            subtitle="What I have done so far"
          />
        </div>
        <div className="flex flex-row">
          {scholarships.map((skill, index) => (
            <ScholarshipCards key={skill.id} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scholarships;
