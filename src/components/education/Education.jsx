import CardHeader from "../utils/card/CardHeader";
import Card from "../utils/card/Card";
import EducationOverview from "./EducationOverview";
import EducationInputForm from "./EducationInputForm";

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

  const handleOverviewChange = () => {
    setEducationOverviewActive(!educationOverviewActive);
  };

  const handleEditButton = (educationId) => {
    // Find the education object that matches the id of the education to edit.
    const educationToEdit = education.find(
      (singleEducation) => singleEducation.id === educationId
    );

    setNewEducationData(educationToEdit); // Set the education data to edit.
    handleOverviewChange();
  };

  return (
    <Card>
      <CardHeader
        title="Education"
        onIconClick={collapseCard}
        iconName="chevron-up"
      />

      {educationOverviewActive ? (
        <EducationOverview
          education={education}
          deleteEducation={deleteEducation}
          handleOverviewChange={handleOverviewChange}
          handleEditButton={handleEditButton}
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
