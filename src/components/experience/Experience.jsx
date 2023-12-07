import Card from "../utils/card/Card";
import CardHeader from "../utils/card/CardHeader";
import ExperienceInputForm from "./ExperienceInputForm";
import OverviewList from "../OverviewList";

/**
 * Represents the Experience component.
 *
 * @param {Function} collapseCard - The function to collapse the card.
 * @param {Array} experience - The experience data.
 * @param {Function} setExperience - The function to update experience data.
 * @param {Boolean} experienceOverviewActive - The state of the experience overview.
 * @param {Function} setExperienceOverviewActive - The function to update the experience overview state.
 * @param {Object} newExperienceData - The new experience data.
 * @param {Function} setNewExperienceData - The function to update the new experience data.
 * @returns {JSX.Element} The rendered Experience component.
 */
const Experience = ({
  collapseCard,
  experience,
  setExperience,
  experienceOverviewActive,
  setExperienceOverviewActive,
  newExperienceData,
  setNewExperienceData,
}) => {
  /** Formats the data for the OverviewList component. */
  const formatExperienceData = () => {
    return experience.map((singleExperience) => {
      return {
        id: singleExperience.id,
        title: singleExperience.title,
        subtitle: singleExperience.company,
      };
    });
  };

  const handleDeleteButton = (id) => {
    const newExperience = experience.filter(
      (singleExperience) => singleExperience.id !== id
    );

    setExperience(newExperience);
  };

  const handleEditButton = (experienceId) => {
    // Find the experience object that matches the id of the experience to edit.
    const experienceToEdit = experience.find(
      (singleExperience) => singleExperience.id === experienceId
    );

    setNewExperienceData(experienceToEdit); // Set the experience data to edit.
    toggleOverview();
  };

  const toggleOverview = () => {
    setExperienceOverviewActive(!experienceOverviewActive);
  };

  return (
    <Card>
      <CardHeader
        title="Experience"
        onIconClick={collapseCard}
        iconName="chevron-up"
      />

      {experienceOverviewActive ? (
        <OverviewList
          data={formatExperienceData()}
          onDelete={handleDeleteButton}
          onEdit={handleEditButton}
          onNewButtonClick={toggleOverview}
          buttonText="Add Experience"
        />
      ) : (
        <ExperienceInputForm
          experience={experience}
          setExperience={setExperience}
          newExperienceData={newExperienceData}
          setNewExperienceData={setNewExperienceData}
          toggleOverview={toggleOverview}
        />
      )}
    </Card>
  );
};

export default Experience;
