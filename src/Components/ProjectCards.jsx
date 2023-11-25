import { m } from "framer-motion";

import { web, appstore, playstore, wall, cancelled } from "../assets";

const ProjectCards = ({
  id,
  name,
  description,
  image,
  repo,
  demo,
  index,
  active,
  webUrl,
  handleClick,
  playstoreUrl,
  appstoreUrl,
  isActive,
}) => {
  return (
    <m.div
      initial={{ scale: 0.8 }}
      style={{ zIndex: `${index + 1}` }}
      key={index}
      //   onClick={() => handleClick(id)}
      onClick={(e) => {
        // e.preventDefault();
        // window.open(webUrl, "_blank");
      }}
      className="relative card w-[300px] h-[380px] flex flex-col items-center  bg-primary-400 rounded-xl border-4 border-primary-600"
    >
      <div className="w-full h-[60px] flex items-center gap-2 p-1 flex-col mt-[8px]">
        <img
          className="h-[50px] flex justify-center items-center w-[50px]  bg-primary-600  p-1 object-contain"
          src={image}
          alt={name}
        />
        <span
          className="text-xl text-center"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: "bold",
          }}
        >
          {name}
        </span>
        <span
          className="text-center bg-primary-400 text-grayscale-950 rounded-xl text-sm p-4 "
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: "400",
          }}
        >
          {description}
        </span>

        {!isActive && (
          <text
            className="text-center p-4 mt-[-20px]"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "500",
              color: "red",
            }}
          >
            {"Project Stalled"}
          </text>
        )}

        <div
          className={`mx-[16px] mb-[16px] mt-[16px] flex flex-row cursor-pointer mt-[10px] absolute bottom-0 w-full justify-center items-center`}
        >
          {playstoreUrl && (
            <img
              src={playstore}
              alt="playstore"
              className="download-btn w-8 h-8 object-contain mx-[8px] mt-auto"
              onClick={(e) => {
                e.preventDefault();
                window.open(playstoreUrl, "_blank");
              }}
            />
          )}

          {appstoreUrl && (
            <img
              src={appstore}
              alt="appstore"
              className="download-btn w-8 h-8 object-contain  mx-[8px] mt-auto"
              onClick={(e) => {
                e.preventDefault();
                window.open(appstoreUrl, "_blank");
              }}
            />
          )}

          {webUrl && (
            <img
              src={web}
              alt="web"
              className="download-btn w-8 h-8 object-contain  mx-[8px] mt-auto"
              onClick={(e) => {
                e.preventDefault();
                window.open(webUrl, "_blank");
              }}
            />
          )}
        </div>
      </div>
    </m.div>
  );
};

export default ProjectCards;
