import { useState } from "react";
import CardHeader from "../utils/card/CardHeader";
import Card from "../utils/card/Card";
import EducationOverview from "./EducationOverview";
import NewEducation from "./NewEducation";

const Education = ({ collapseCard, education, setEducation }) => {
  const [overviewActive, setOverviewActive] = useState(true);

  const handleEducationChange = (e) => {
    const { id, value } = e.target;

    setEducation((prevEducation) => ({
      ...prevEducation,
      [id]: value,
    }));
  };

  return (
    <Card>
      <CardHeader
        title="Education"
        onIconClick={collapseCard}
        iconName="chevron-up"
      />

      {overviewActive ? (
        <EducationOverview education={education} />
      ) : (
        <NewEducation />
      )}

      {/* <div className="gap-4 flex flex-col mt-5">
        <InputGroup />
      </div> */}
    </Card>
  );
};

export default Education;
