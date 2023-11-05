import PersonalDetails from "./personal_details/PersonalDetails.jsx";
import { useState } from "react";
import CollapsedInputCard from "./utils/CollapsedInputCard.jsx";

const Sidebar = ({ personalDetails, setPersonalDetails }) => {
  const [collapsed, setCollapsed] = useState({
    personalDetails: true,
    education: false,
    experience: false,
  });

  const handlePersonalDetailsChange = (e) => {
    const { id, value } = e.target;

    setPersonalDetails((prevPersonalDetails) => ({
      ...prevPersonalDetails,
      [id]: value,
    }));

    console.log(personalDetails);
  };

  const handleCardExpansion = (e) => {
    const { id } = e.target;

    setCollapsed((prevCollapsed) => ({
      ...prevCollapsed,
      [id]: !prevCollapsed[id],
    }));
  };

  return (
    <div className="flex justify-self-end justify-end w-1/2 p-4">
      {collapsed.personalDetails ? (
        <CollapsedInputCard
          title="Personal Details"
          expandCard={handleCardExpansion}
          iconId="personalDetails"
        />
      ) : (
        <PersonalDetails
          personalDetails={personalDetails}
          onUserInput={handlePersonalDetailsChange}
          expandCard={handleCardExpansion}
        />
      )}
    </div>
  );
};

export default Sidebar;
