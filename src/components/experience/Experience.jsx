import Card from "../utils/card/Card";
import CardHeader from "../utils/card/CardHeader";
import ExperienceOverview from "./ExperienceOverview";
import ExperienceInputForm from "./ExperienceInputForm";

const Experience = ({
  collapseCard,
  experience,
  setExperience,
  experienceOverviewActive,
  setExperienceOverviewActive,
}) => {
  return (
    <Card>
      <CardHeader
        title="Experience"
        onIconClick={collapseCard}
        iconName="chevron-up"
      />

      {experienceOverviewActive ? (
        <ExperienceOverview experience={experience} />
      ) : (
        <ExperienceInputForm />
      )}
    </Card>
  );
};

export default Experience;
