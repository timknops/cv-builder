import ResumeHeader from "./ResumeHeader.jsx";
import ResumeSection from "./ResumeSection.jsx";

/**
 * Represents a resume component.
 * @param {Object} personalDetails - The personal details of the resume owner.
 * @param {Array} education - The education details of the resume owner.
 * @param {Array} experience - The experience details of the resume owner.
 * @returns {JSX.Element} The rendered resume component.
 */
const Resume = ({ personalDetails, education, experience }) => {
  // Format the education data to match the format of data expected by the ResumeSection component.
  const formatEducation = () => {
    return education.map((item) => {
      return {
        title: item.school,
        subTitle: item.degree,
        startYear: item.startYear,
        endYear: item.endYear,
        location: item.location,
      };
    });
  };

  // Format the experience data to match the format of data expected by the ResumeSection component.
  const formatExperience = () => {
    return experience.map((item) => {
      return {
        title: item.title,
        subTitle: item.company,
        startYear: item.startDate,
        endYear: item.endDate,
        location: item.location,
        description: item.description,
      };
    });
  };

  return (
    <div className="bg-white shadow rounded-lg h-full aspect-[1/1.3] flex flex-col items-center">
      <ResumeHeader personalDetails={personalDetails} />
      <ResumeSection data={formatEducation()} sectionTitle="Education" />
      <ResumeSection data={formatExperience()} sectionTitle="Experience" />
    </div>
  );
};

export default Resume;
