import CardHeader from "../utils/card/CardHeader";
import Card from "../utils/card/Card";

const Education = ({ collapseCard }) => {
  return (
    <Card>
      <CardHeader
        title="Education"
        onIconClick={collapseCard}
        iconName="chevron-up"
      />

      {/* TODO: Add education input fields. */}
    </Card>
  );
};

export default Education;
