import EducationOverviewCard from "./EducationOverviewCard";
import NewEducationButton from "./NewEducationButton";

const EducationOverview = ({
  education,
  deleteEducation,
  handleOverviewChange,
  handleEditButton,
}) => {
  return (
    <>
      {education.map((singleDegree) => (
        <EducationOverviewCard
          singleDegree={singleDegree}
          key={singleDegree.id}
          deleteEducation={deleteEducation}
          handleEditButton={handleEditButton}
        />
      ))}
      <NewEducationButton onNewEducation={handleOverviewChange} />
    </>
  );
};

export default EducationOverview;
