import PersonalDetails from "./personal_details/PersonalDetails.jsx";
import { useState } from "react";
import CollapsedInputCard from "./utils/card/CollapsedInputCard.jsx";

const Sidebar = ({ personalDetails, setPersonalDetails }) => {
  const [collapsed, setCollapsed] = useState({
    personalDetails: false,
    education: false,
    experience: false,
  });

  const handlePersonalDetailsChange = (e) => {
    const { id, value } = e.target;

    setPersonalDetails((prevPersonalDetails) => ({
      ...prevPersonalDetails,
      [id]: value,
    }));
  };

  const handleCardExpansion = (e, id) => {
    setCollapsed((prevCollapsed) => ({
      ...prevCollapsed,
      [id]: !prevCollapsed[id],
    }));
  };

  return (
    <div className="flex justify-self-end justify-end w-450 py-6">
      {collapsed.personalDetails ? (
        <CollapsedInputCard
          title="Personal Details"
          expandCard={(e) => handleCardExpansion(e, "personalDetails")}
        />
      ) : (
        <PersonalDetails
          personalDetails={personalDetails}
          onUserInput={handlePersonalDetailsChange}
          collapseCard={(e) => handleCardExpansion(e, "personalDetails")}
        />
      )}
    </div>
  );
};

export default Sidebar;
