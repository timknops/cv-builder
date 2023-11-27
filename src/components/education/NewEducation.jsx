import Button from "../utils/Button";
import InputGroup from "../utils/user_input/InputGroup";

/**
 * Renders a form for adding new education details.
 *
 * @component
 * @param {Object} newEducationData - The data for the new education.
 * @param {Function} handleNewEducationChange - The function to handle changes in the new education data.
 * @returns {JSX.Element} The JSX element representing the form for adding new education details.
 */
const NewEducation = ({
  newEducationData,
  handleNewEducationChange,
  setNewEducationData,
  setOverviewActive,
  setEducation,
}) => {
  const resetNewEducation = () => {
    setNewEducationData({
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    });
  };

  const handleButtonClick = (e) => {
    e.preventDefault();

    // If the button clicked is the cancel button, reset the form and change the overview to active.
    if (e.target.textContent === "Cancel") {
      resetNewEducation();

      setOverviewActive(true);
    } else {
      // If the button clicked is the add button, add the new education to the list of education.
      setEducation((prevEducation) => [...prevEducation, newEducationData]);
      resetNewEducation();
      setOverviewActive(true);
    }
  };

  return (
    <form className="gap-4 flex-col flex mt-5 w-full">
      <InputGroup
        labelId="school"
        labelText="School"
        type="text"
        placeholder="Enter your school"
        value={newEducationData.school}
        onChange={handleNewEducationChange}
      />
      <InputGroup
        labelId="degree"
        labelText="Degree"
        type="text"
        placeholder="Enter your degree"
        value={newEducationData.degree}
        onChange={handleNewEducationChange}
      />

      <div className="grid grid-cols-2 gap-4">
        <InputGroup
          labelId="startDate"
          labelText="Start Date"
          type="number"
          placeholder="Stating year"
          value={newEducationData.startDate}
          onChange={handleNewEducationChange}
        />
        <InputGroup
          labelId="endDate"
          labelText="End Date"
          type="number"
          placeholder="Ending year"
          value={newEducationData.endDate}
          onChange={handleNewEducationChange}
        />
      </div>

      <InputGroup
        labelId="location"
        labelText="Location"
        type="text"
        placeholder="Enter your location"
        value={newEducationData.location}
        onChange={handleNewEducationChange}
      />

      <div className="flex justify-end items-center gap-2">
        <Button
          type="reset"
          text="Cancel"
          handleButtonClick={handleButtonClick}
        />
        <Button
          type="submit"
          text="Add"
          handleButtonClick={handleButtonClick}
        />
      </div>
    </form>
  );
};

export default NewEducation;
