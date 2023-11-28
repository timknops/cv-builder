import { v4 as uuidv4 } from "uuid";
import Button from "../utils/Button";
import InputGroup from "../utils/user_input/InputGroup";

/**
 * EducationInputForm component.
 *
 * @component
 * @param {Array} education - Array of education objects.
 * @param {Object} newEducationData - Data for new education.
 * @param {Function} handleNewEducationChange - Function to handle new education data change.
 * @param {Function} setNewEducationData - Function to set new education data.
 * @param {Function} setOverviewActive - Function to set overview active state.
 * @param {Function} setEducation - Function to set education data.
 * @returns {JSX.Element} EducationInputForm component.
 */
const EducationInputForm = ({
  education,
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
      startYear: "",
      endYear: "",
      location: "",
    });
  };

  const handleButtonClick = (e) => {
    e.preventDefault();

    switch (e.target.textContent.toLowerCase()) {
      case "save": {
        // Find the matching education object in the education array.
        const educationIndex = education.findIndex(
          (singleEducation) => singleEducation.id === newEducationData.id
        );

        // Create a new education array with the updated education object.
        const updatedEducation = [
          ...education.slice(0, educationIndex),
          newEducationData,
          ...education.slice(educationIndex + 1),
        ];

        setEducation(updatedEducation);

        resetNewEducation();
        setOverviewActive(true);
        break;
      }
      case "add": {
        const newEducationDataWithId = {
          ...newEducationData,
          id: uuidv4(),
        };
        setEducation((prevEducation) => [
          ...prevEducation,
          newEducationDataWithId,
        ]);
        resetNewEducation();
        setOverviewActive(true);
        break;
      }

      default:
        resetNewEducation();
        setOverviewActive(true);
        break;
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
          labelId="startYear"
          labelText="Start Year"
          type="number"
          placeholder="Stating year"
          value={newEducationData.startYear}
          onChange={handleNewEducationChange}
        />
        <InputGroup
          labelId="endYear"
          labelText="End Year"
          type="number"
          placeholder="Ending year"
          value={newEducationData.endYear}
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
        {newEducationData.id ? (
          <Button
            type="submit"
            text="Save"
            handleButtonClick={handleButtonClick}
          />
        ) : (
          <Button
            type="submit"
            text="Add"
            handleButtonClick={handleButtonClick}
          />
        )}
      </div>
    </form>
  );
};

export default EducationInputForm;
