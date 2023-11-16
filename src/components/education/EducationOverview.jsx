import EducationOverviewCard from "./EducationOverviewCard";

const EducationOverview = ({ education }) => {
  return (
    <>
      {education.map((singleDegree) => (
        <EducationOverviewCard
          singleDegree={singleDegree}
          key={singleDegree.id}
        />
      ))}
    </>
  );
};

export default EducationOverview;
