import ResumeHeader from "./ResumeHeader.jsx";
import ResumeEducation from "./ResumeEducation.jsx";

const Resume = ({ personalDetails, education }) => {
  return (
    <div className="bg-white shadow rounded-lg h-full aspect-[1/1.3] flex flex-col items-center">
      <ResumeHeader personalDetails={personalDetails} />
      <ResumeEducation education={education} />
    </div>
  );
};

export default Resume;
