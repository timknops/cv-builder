import EducationOverviewCard from "./EducationOverviewCard";
import NewButtonCard from "../utils/card/NewButtonCard";

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
      <NewButtonCard onNewButtonClick={handleOverviewChange} />
    </>
  );
};

export default EducationOverview;
