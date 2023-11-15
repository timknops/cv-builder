import PersonalDetails from "./personal_details/PersonalDetails.jsx";
import Education from "./education/Education.jsx";
import { useState } from "react";
import CollapsedInputCard from "./utils/card/CollapsedInputCard.jsx";

/**
 * Renders the sidebar component. Contains the user's personal details, education, and experience.
 *
 * @param {Object} personalDetails The user's personal details.
 * @param {Function} setPersonalDetails The function to set the user's personal details.
 * @returns {JSX.Element} The component JSX.
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
        />
      )}
    </div>
  );
};

export default Sidebar;
