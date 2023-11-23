import EducationOverviewCard from "./EducationOverviewCard";

const EducationOverview = ({ education, deleteEducation }) => {
  return (
    <>
      {education.map((singleDegree) => (
        <EducationOverviewCard
          singleDegree={singleDegree}
          key={singleDegree.id}
          deleteEducation={deleteEducation}
        />
      ))}
    </>
  );
};

export default EducationOverview;
