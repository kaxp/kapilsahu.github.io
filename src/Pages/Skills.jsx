import MarqueeCards from "../Components/MarqueeCards";
import SectionTitle from "../Components/SectionTitle";
import SkillsCards from "../Components/SkillsCards";
import { skills, tools } from "../Constants/constants";

const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full overflow-hidden-web flex justify-center mt-[48px]"
    >
      <div className="w-full min-h-[800px] flex flex-col xl:w-[70%]">
        <div className="w-full">
          <SectionTitle title="SKILLS AND TOOLS" subtitle="WHAT I foster" />
        </div>
        <div className="xl:border-l-2 xl:border-r-2 xl:border-primary-400 h-full">
          <div className="relative">
            <div className="absolute top-[45px] w-full h-[1px] bg-primary-400"></div>
            <SkillsCards data={skills} />
          </div>
          <div className="relative">
            <div className="absolute top-[45px] w-full h-[1px] bg-primary-400"></div>
            <MarqueeCards direction="right">
              <SkillsCards data={tools} />
            </MarqueeCards>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
