import EducationOverviewCard from "./EducationOverviewCard";
import NewEducationButton from "./NewEducationButton";

const EducationOverview = ({
  education,
  deleteEducation,
  handleOverviewChange,
}) => (
  <>
    {education.map((singleDegree) => (
      <EducationOverviewCard
        singleDegree={singleDegree}
        key={singleDegree.id}
        deleteEducation={deleteEducation}
      />
    ))}
    <NewEducationButton onNewEducation={handleOverviewChange} />
  </>
);

export default EducationOverview;
