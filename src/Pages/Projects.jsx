import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { projects } from "../Constants/constants";
import SectionTitle from "../Components/SectionTitle";
import ProjectCards from "../Components/ProjectCards";
import { staggerContainer } from "../utils/motion";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const [active, setActive] = useState(3);

  // Settings for the slick carousel
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    centerMode: false,
    focusOnSelect: false,
    centerPadding: "16px",
    beforeChange: (current, next) => setActive(next),
  };

  return (
    <div className="w-full">
      <SectionTitle
        title="PROJECTS"
        subtitle="What I have done so far"
        message="These projects demonstrate my expertise with practical examples of some of my work, including brief descriptions and links to code repositories and live demos. They showcase my ability to tackle intricate challenges, adapt to various technologies, and efficiently oversee projects."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <Slider {...sliderSettings}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="mt-[50px] flex lg:flex-row flex-col  gap-5 pl-[26px]"
            >
              <ProjectCards
                key={project.id}
                index={index}
                {...project}
                active={active}
                handleClick={setActive}
              />
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
