import { useState } from "react";
import CardHeader from "../utils/card/CardHeader";
import Card from "../utils/card/Card";
import EducationOverview from "./EducationOverview";
import NewEducation from "./NewEducation";

const Education = ({
  collapseCard,
  education,
  setEducation,
  newEducationData,
  handleNewEducationChange,
}) => {
  const [overviewActive, setOverviewActive] = useState(true);

  const deleteEducation = (id) => {
    const newEducation = education.filter((degree) => degree.id !== id);
    setEducation(newEducation);
  };

  const handleOverviewChange = () => {
    setOverviewActive(!overviewActive);
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
        />
      ) : (
        <NewEducation
          newEducationData={newEducationData}
          handleNewEducationChange={handleNewEducationChange}
        />
      )}
    </Card>
  );
};

export default Education;
