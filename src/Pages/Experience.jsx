import SectionTitle from "../Components/SectionTitle";

const Experiences = () => {
  return (
    <div id="projects" className="w-full flex justify-center ">
      <div className="w-full xl:w-[70%] flex flex-col pb-16">
        <div className="w-full ">
          <SectionTitle
            title="Work Experience."
            subtitle="WHAT I'VE DONE SO FAR"
          />
        </div>
        <Text> Some work experince here</Text>
      </div>
    </div>
  );
};

export default Experiences;
