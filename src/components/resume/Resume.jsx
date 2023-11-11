import ResumeHeader from "./ResumeHeader.jsx";

const Resume = ({ personalDetails }) => {
  return (
    <div className="bg-white shadow rounded-lg h-full aspect-[1/1.3] flex flex-col items-center">
      <ResumeHeader personalDetails={personalDetails} />
    </div>
  );
};

export default Resume;
