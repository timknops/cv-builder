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
  overviewActive,
  setOverviewActive,
}) => {
  const deleteEducation = (id) => {
    const newEducation = education.filter((degree) => degree.id !== id);
    setEducation(newEducation);
  };

  const handleOverviewChange = () => {
    setOverviewActive(!overviewActive);
  };

  const handleEditButton = (educationId) => {
    const educationToEdit = education.find(
      (singleEducation) => singleEducation.id === educationId
    );

    setNewEducationData(educationToEdit);
    handleOverviewChange();
  };

  return (
    <Card>
      <CardHeader
        title="Education"
        onIconClick={collapseCard}
        iconName="chevron-up"
      />

      {overviewActive ? (
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
          setOverviewActive={setOverviewActive}
          setEducation={setEducation}
        />
      )}
    </Card>
  );
};

export default Education;
