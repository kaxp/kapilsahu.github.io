import MarqueeCards from "../Components/MarqueeCards";
import SectionTitle from "../Components/SectionTitle";
import SkillsCards from "../Components/SkillsCards";
import { skills, tools } from "../Constants/constants";
import { useState, useEffect } from "react";

const Skills = () => {
  const [cardHeight, setCardHeight] = useState(380);
  const [isMobileView, setMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Adjust the height based on the screen width

      const newHeight =
        window.innerWidth < 1024 ? 380 : window.innerWidth < 768 ? 320 : 300;

      const isMobileView = window.innerWidth < 768 ? true : false;

      setCardHeight(newHeight);
      setMobileView(isMobileView);
    };

    // Initial call to set the height
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Calculate the index to split the array into the first half
  const splitIndex = Math.ceil(skills.length / 2);

  // Use the slice method to get the first half of the array
  const firstHalf = skills.slice(0, splitIndex);

  // Use the slice method to get the second half of the array
  const secondHalf = skills.slice(splitIndex);

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
          {isMobileView ? (
            <div className="relative">
              <div className="absolute top-[45px] w-full h-[1px] bg-primary-400"></div>
              <SkillsCards data={firstHalf} cardHeight={cardHeight} />
              <SkillsCards data={secondHalf} cardHeight={cardHeight} />
            </div>
          ) : (
            <div className="relative">
              <div className="absolute top-[45px] w-full h-[1px] bg-primary-400"></div>
              <SkillsCards data={skills} cardHeight={cardHeight} />
            </div>
          )}
          <div className="relative">
            <div className="absolute top-[45px] w-full h-[1px] bg-primary-400"></div>
            <MarqueeCards direction="right">
              <SkillsCards data={tools} cardHeight={300} />
            </MarqueeCards>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
