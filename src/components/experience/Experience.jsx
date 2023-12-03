import Card from "../utils/card/Card";
import CardHeader from "../utils/card/CardHeader";
import ExperienceInputForm from "./ExperienceInputForm";
import OverviewList from "../OverviewList";

/**
 * Represents the Experience component.
 *
 * @param {Function} collapseCard - The function to collapse the card.
 * @param {Array} experience - The experience data.
 * @param {Function} setExperience - The function to update experience data.
 * @param {Boolean} experienceOverviewActive - The state of the experience overview.
 * @param {Function} setExperienceOverviewActive - The function to update the experience overview state.
 * @returns {JSX.Element} The rendered Experience component.
 */
const Experience = ({
  collapseCard,
  experience,
  setExperience,
  experienceOverviewActive,
  setExperienceOverviewActive,
}) => {
  /** Formats the data for the OverviewList component. */
  const formatExperienceData = () => {
    return experience.map((singleExperience) => {
      return {
        id: singleExperience.id,
        title: singleExperience.title,
        subtitle: singleExperience.company,
      };
    });
  };

  return (
    <Card>
      <CardHeader
        title="Experience"
        onIconClick={collapseCard}
        iconName="chevron-up"
      />

      {experienceOverviewActive ? (
        <OverviewList
          data={formatExperienceData()}
          onDelete={setExperience}
          onEdit={setExperience}
          onNewButtonClick={setExperienceOverviewActive}
          buttonText="Add Experience"
        />
      ) : (
        <ExperienceInputForm />
      )}
    </Card>
  );
};

export default Experience;
