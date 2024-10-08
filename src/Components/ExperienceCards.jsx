import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { Link } from "react-router-dom";

const ExperienceCards = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#eaeaec",
      color: "#292929",
      boxShadow:
        "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    }}
    contentArrowStyle={{
      borderRight: "7px solid  #232631",
    }}
    date={
      <div>
        <h3 className="text-dim text-[18px] font-bold font-beckman">
          {experience.date}
        </h3>
      </div>
    }
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          onClick={(e) => {
            e.preventDefault();
            window.open(experience.url, "_blank");
          }}
          className="w-[60%] h-[60%] object-contain"
          style={{ cursor: "pointer" }}
        />
      </div>
    }
  >
    <div>
      <h3 className="text-jetLight text-[24px] font-bold font-beckman tracking-[2px]">
        {experience.title}
      </h3>
      <Link
        to={experience.url}
        className="text-taupe text-[16px] font-semibold font-overcameBold tracking-[1px] text-[#139eca]"
        style={{ margin: 0 }}
        onClick={(e) => {
          e.preventDefault();
          window.open(experience.url, "_blank");
        }}
      >
        {experience.company_name}
      </Link>
    </div>
  </VerticalTimelineElement>
);

export default ExperienceCards;
