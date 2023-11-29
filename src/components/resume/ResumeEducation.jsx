import ResumeEducationItem from "./ResumeEducationItem";

/**
 * Renders the education section of the resume.
 *
 * @param {Array} education - The array of education data.
 * @returns {JSX.Element} The rendered education section.
 */
const ResumeEducation = ({ education }) => {
  return (
    <div className="w-full p-5">
      <h3 className="text-red-900 text-xl font-extrabold">Education</h3>
      <hr className="h-1 my-1 bg-gray-200 border" />

      <div className="flex flex-col gap-2">
        {education.map((singleEducation) => (
          <ResumeEducationItem
            singleEducation={singleEducation}
            key={singleEducation.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ResumeEducation;
