import PersonalDetails from "./personal_details/PersonalDetails.jsx";

const Sidebar = ({ personalDetails, setPersonalDetails }) => {
  function handlePersonalDetailsChange(e) {
    const { id, value } = e.target;

    setPersonalDetails((prevPersonalDetails) => ({
      ...prevPersonalDetails,
      [id]: value,
    }));

    console.log(personalDetails);
  }

  return (
    <div className="flex justify-self-end justify-end w-1/2 p-4">
      <PersonalDetails
        personalDetails={personalDetails}
        onUserInput={handlePersonalDetailsChange}
      />
    </div>
  );
};

export default Sidebar;
