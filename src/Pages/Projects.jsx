import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { projects } from "../Constants/constants";
import SectionTitle from "../Components/SectionTitle";
import ProjectCards from "../Components/ProjectCards";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const [active, setActive] = useState(0);

  const [currentIndex, setCurrentIndex] = useState(0);

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
    customPaging: (i) => (
      <div
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: i === currentIndex ? "white" : "black",
        }}
      ></div>
    ),
    beforeChange: (oldIndex, newIndex) => {
      setCurrentIndex((prevIndex) =>
        newIndex > oldIndex ? prevIndex + 1 : prevIndex - 1
      );
      setActive(newIndex);
    },
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  };

  return (
    <div className="w-full">
      <SectionTitle
        title="PROJECTS"
        subtitle="What I have done so far"
        message="These projects demonstrate my expertise with practical examples of some of my work, including brief descriptions and links to the products. They showcase my ability to tackle intricate challenges, adapt to various technologies, and efficiently oversee projects."
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <Slider {...sliderSettings}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="mt-[50px] flex lg:flex-row flex-col  gap-5 "
            >
              <ProjectCards
                key={project.id}
                index={index}
                {...project}
                active={active}
                webUrl={project.webUrl}
                appstoreUrl={project.appStoreUrl}
                playstoreUrl={project.playStoreUrl}
                isActive={project.isActive}
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
