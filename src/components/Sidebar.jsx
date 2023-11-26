import PersonalDetails from "./personal_details/PersonalDetails.jsx";
import Education from "./education/Education.jsx";
import { useState } from "react";
import CollapsedInputCard from "./utils/card/CollapsedInputCard.jsx";

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
}) => {
  const [collapsed, setCollapsed] = useState({
    personalDetails: false,
    education: true,
    experience: false,
  });
  const [newEducationData, setNewEducationData] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  const handlePersonalDetailsChange = (e) => {
    const { id, value } = e.target;

    setPersonalDetails((prevPersonalDetails) => ({
      ...prevPersonalDetails,
      [id]: value,
    }));
  };

  const handleNewEducationChange = (e) => {
    const { id, value } = e.target;

    setNewEducationData((prevNewEducationData) => ({
      ...prevNewEducationData,
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
          handleNewEducationChange={handleNewEducationChange}
        />
      )}
    </div>
  );
};

export default Sidebar;
