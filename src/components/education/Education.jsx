import CardHeader from "../utils/card/CardHeader";
import Card from "../utils/card/Card";
import EducationInputForm from "./EducationInputForm";
import OverviewList from "../OverviewList";

/**
 * Represents the Education component.
 *
 * @param {Function} collapseCard - The function to collapse the card.
 * @param {Array} education - The education data.
 * @param {Function} setEducation - The function to update education data.
 * @param {Object} newEducationData - The new education data.
 * @param {Function} handleNewEducationChange - The function to handle new education change.
 * @param {Function} setNewEducationData - The function to update the new education data.
 * @param {Boolean} educationOverviewActive - The state of the education overview.
 * @param {Function} setEducationOverviewActive - The function to update the education overview state.
 * @returns {JSX.Element} The rendered Education component.
 */
const Education = ({
  collapseCard,
  education,
  setEducation,
  newEducationData,
  handleNewEducationChange,
  setNewEducationData,
  educationOverviewActive,
  setEducationOverviewActive,
}) => {
  const deleteEducation = (id) => {
    const newEducation = education.filter((degree) => degree.id !== id);
    setEducation(newEducation);
  };

  const toggleOverview = () => {
    setEducationOverviewActive(!educationOverviewActive);
  };

  const handleEditButton = (educationId) => {
    // Find the education object that matches the id of the education to edit.
    const educationToEdit = education.find(
      (singleEducation) => singleEducation.id === educationId
    );

    setNewEducationData(educationToEdit); // Set the education data to edit.
    toggleOverview();
  };

  /** Formats the data for the OverviewList component. */
  const formatEducationData = () => {
    return education.map((singleEducation) => {
      return {
        id: singleEducation.id,
        title: singleEducation.degree,
        subtitle: singleEducation.school,
      };
    });
  };

  return (
    <Card>
      <CardHeader
        title="Education"
        onIconClick={collapseCard}
        iconName="chevron-up"
      />

      {educationOverviewActive ? (
        <OverviewList
          data={formatEducationData()}
          onDelete={deleteEducation}
          onEdit={handleEditButton}
          onNewButtonClick={toggleOverview}
          buttonText="Add Education"
        />
      ) : (
        <EducationInputForm
          education={education}
          newEducationData={newEducationData}
          setNewEducationData={setNewEducationData}
          handleNewEducationChange={handleNewEducationChange}
          setEducationOverviewActive={setEducationOverviewActive}
          setEducation={setEducation}
        />
      )}
    </Card>
  );
};

export default Education;
