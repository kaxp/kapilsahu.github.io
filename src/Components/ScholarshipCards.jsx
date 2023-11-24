import { m } from "framer-motion";

const ScholarshipCards = ({ skill, index }) => {
  return (
    <m.div
      initial={{ scale: 0.8 }}
      style={{ zIndex: `${index + 1}` }}
      key={index}
      onClick={(e) => {
        e.preventDefault();
        window.open(skill.url, "_blank");
      }}
      className="card w-[300px] h-[300px] flex flex-col items-center  bg-primary-400 rounded-xl border-4 border-primary-600 cursor-pointer"
    >
      <div className="w-full h-[60px] flex items-center gap-2 p-1 flex-col">
        <img
          className="h-[50px] flex justify-center items-center w-[50px]  bg-primary-600 rounded-[50%] p-1 object-contain"
          src={skill.icon}
          alt={skill.title}
        />
        <span
          className="text-xl text-center"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: "bold",
          }}
        >
          {skill.title}
        </span>
        <span
          className="text-center bg-primary-400 text-grayscale-950 rounded-xl text-sm p-4"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: "400",
          }}
        >
          Issued Data: {skill.issueDate}
        </span>
      </div>
    </m.div>
  );
};

export default ScholarshipCards;
