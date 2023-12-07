import PersonalDetails from "./personal_details/PersonalDetails.jsx";
import Education from "./education/Education.jsx";
import { useState } from "react";
import CollapsedInputCard from "./utils/card/CollapsedInputCard.jsx";
import Experience from "./experience/Experience.jsx";

/**
 * Sidebar component for displaying personal details and education information.
 *
 * @component
 * @param {Object} personalDetails - The personal details data.
 * @param {Function} setPersonalDetails - The function to update personal details.
 * @param {Array} education - The education data.
 * @param {Function} setEducation - The function to update education data.
 * @returns {JSX.Element} The rendered Sidebar component.
 */
const Sidebar = ({
  personalDetails,
  setPersonalDetails,
  education,
  setEducation,
  experience,
  setExperience,
}) => {
  const [collapsed, setCollapsed] = useState({
    personalDetails: false,
    education: true,
    experience: true,
  });
  const [newEducationData, setNewEducationData] = useState({
    school: "",
    degree: "",
    startYear: "",
    endYear: "",
    location: "",
  });
  const [newExperienceData, setNewExperienceData] = useState({
    company: "",
    title: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });
  const [educationOverviewActive, setEducationOverviewActive] = useState(true);
  const [experienceOverviewActive, setExperienceOverviewActive] =
    useState(true);

  const handlePersonalDetailsChange = (e) => {
    const { id, value } = e.target;

    setPersonalDetails((prevPersonalDetails) => ({
      ...prevPersonalDetails,
      [id]: value,
    }));
  };

  const handleCardExpansion = (id) => {
    setCollapsed((prevCollapsed) => ({
      ...prevCollapsed,
      [id]: !prevCollapsed[id],
    }));
  };

  return (
    <div className="flex flex-col justify-self-end w-450 py-6 gap-6">
      {collapsed.personalDetails ? (
        <CollapsedInputCard
          title="Personal Details"
          expandCard={() => handleCardExpansion("personalDetails")}
        />
      ) : (
        <PersonalDetails
          personalDetails={personalDetails}
          onUserInput={handlePersonalDetailsChange}
          collapseCard={() => handleCardExpansion("personalDetails")}
        />
      )}

      {collapsed.education ? (
        <CollapsedInputCard
          title="Education"
          expandCard={() => handleCardExpansion("education")}
        />
      ) : (
        <Education
          collapseCard={() => handleCardExpansion("education")}
          education={education}
          setEducation={setEducation}
          newEducationData={newEducationData}
          setNewEducationData={setNewEducationData}
          educationOverviewActive={educationOverviewActive}
          setEducationOverviewActive={setEducationOverviewActive}
        />
      )}

      {collapsed.experience ? (
        <CollapsedInputCard
          title="Experience"
          expandCard={() => handleCardExpansion("experience")}
        />
      ) : (
        <Experience
          collapseCard={() => handleCardExpansion("experience")}
          experience={experience}
          setExperience={setExperience}
          experienceOverviewActive={experienceOverviewActive}
          setExperienceOverviewActive={setExperienceOverviewActive}
          newExperienceData={newExperienceData}
          setNewExperienceData={setNewExperienceData}
        />
      )}
    </div>
  );
};

export default Sidebar;
