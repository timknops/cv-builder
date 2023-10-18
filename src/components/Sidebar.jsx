import PersonalDetails from "./personal-details/PersonalDetails.jsx";

function Sidebar({ personalDetails, setPersonalDetails }) {
  function handlePersonalDetailsChange(e) {
    setPersonalDetails();
  }

  return (
    <div className="flex justify-self-end justify-end w-1/2 p-4">
      <PersonalDetails
        fullName={personalDetails.fullName}
        email={personalDetails.email}
        phoneNumber={personalDetails.phoneNumber}
        address={personalDetails.address}
        onNameChange={handlePersonalDetailsChange}
      />
    </div>
  );
}

export default Sidebar;
