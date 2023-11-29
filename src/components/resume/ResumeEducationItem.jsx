/**
 * Renders a single education item in the resume.
 *
 * @param {Object} singleEducation - The education object containing school, degree, startYear, endYear, and location.
 * @returns {JSX.Element} The rendered education item.
 */
const ResumeEducationItem = ({ singleEducation }) => {
  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col justify-center">
        <h4 className="font-semibold">{singleEducation.school}</h4>
        <p className="italic">{singleEducation.degree}</p>
      </div>

      <div className="flex flex-col items-end justify-center">
        <p>
          {singleEducation.startYear}

          {/** Only display dash if both startYear and endYear are provided */}
          {singleEducation.startYear !== "" &&
            singleEducation.endYear !== "" &&
            " - "}

          {singleEducation.endYear}
        </p>
        <p>{singleEducation.location}</p>
      </div>
    </div>
  );
};

export default ResumeEducationItem;
