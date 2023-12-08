import { v4 as uuidv4 } from "uuid";
import InputGroup from "../utils/user_input/InputGroup";
import Button from "../utils/Button";

/**
 * Represents a form for inputting experience data.
 *
 * @component
 * @param {Array} experience - The array of experience objects.
 * @param {Function} setExperience - The function to set the experience array.
 * @param {Object} newExperienceData - The object containing the new experience data.
 * @param {Function} setNewExperienceData - The function to set the new experience data.
 * @param {Function} toggleOverview - The function to toggle the overview.
 * @returns {JSX.Element} The JSX element representing the experience input form.
 */
const ExperienceInputForm = ({
  experience,
  setExperience,
  newExperienceData,
  setNewExperienceData,
  toggleOverview,
}) => {
  const resetNewExperience = () => {
    setNewExperienceData({
      company: "",
      title: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    });
  };

  const handleNewExperienceChange = (e) => {
    const { id, value } = e.target;

    setNewExperienceData((prevNewExperienceData) => ({
      ...prevNewExperienceData,
      [id]: value,
    }));
  };

  /**
   * Handles the click event of the button.
   * If the button text is "Save", the experience object is updated.
   * If the button text is "Add", the experience object is added.
   * If the button text is "Cancel", the experience object is reset.
   */
  const handleClick = (e) => {
    e.preventDefault();

    switch (e.target.textContent.toLowerCase()) {
      case "save": {
        // Find the matching experience object in the experience array.
        const experienceIndex = experience.findIndex(
          (singleExperience) => singleExperience.id === newExperienceData.id
        );

        // Create a new experience array with the updated experience object.
        const updatedExperience = [
          ...experience.slice(0, experienceIndex),
          newExperienceData,
          ...experience.slice(experienceIndex + 1),
        ];

        setExperience(updatedExperience);
        resetNewExperience();
        toggleOverview();

        break;
      }

      case "add": {
        const newExperienceDataWithId = {
          ...newExperienceData,
          id: uuidv4(),
        };
        setExperience((prevExperience) => [
          ...prevExperience,
          newExperienceDataWithId,
        ]);

        resetNewExperience();
        toggleOverview();
        break;
      }

      default:
        resetNewExperience();
        toggleOverview();
        break;
    }
  };

  return (
    <form className="gap-4 flex-col flex mt-5 w-full">
      <InputGroup
        labelId="title"
        labelText="Title"
        type="text"
        placeholder="Enter your job title"
        value={newExperienceData.title}
        onChange={handleNewExperienceChange}
      />
      <InputGroup
        labelId="company"
        labelText="Company"
        type="text"
        placeholder="Enter your company"
        value={newExperienceData.company}
        onChange={handleNewExperienceChange}
      />
      <InputGroup
        labelId="location"
        labelText="Location"
        type="text"
        placeholder="Enter the location of the job"
        value={newExperienceData.location}
        onChange={handleNewExperienceChange}
      />
      <div className="grid grid-cols-2 gap-4">
        <InputGroup
          labelId="startDate"
          labelText="Start Date"
          type="text"
          placeholder="Stating date"
          value={newExperienceData.startDate}
          onChange={handleNewExperienceChange}
        />
        <InputGroup
          labelId="endDate"
          labelText="End Date"
          type="text"
          placeholder="Ending date"
          value={newExperienceData.endDate}
          onChange={handleNewExperienceChange}
        />
      </div>

      <InputGroup
        labelId="description"
        labelText="Description"
        type="textarea"
        placeholder="Enter your bullet points separated by a period.&#10;Example: Bullet point 1. Bullet point 2."
        value={newExperienceData.description}
        onChange={handleNewExperienceChange}
      />

      <div className="flex justify-end items-center gap-2">
        <Button type="reset" text="Cancel" handleClick={handleClick} />
        {newExperienceData.id ? (
          <Button type="submit" text="Save" handleClick={handleClick} />
        ) : (
          <Button type="submit" text="Add" handleClick={handleClick} />
        )}
      </div>
    </form>
  );
};

export default ExperienceInputForm;
