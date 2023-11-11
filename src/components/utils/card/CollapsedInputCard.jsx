import Card from "./Card.jsx";
import CardHeader from "./CardHeader.jsx";

/**
 * A card component that displays a collapsed input field.
 * @param {string} title The title of the card.
 * @param {Function} expandCard The function to expand the card.
 * @returns {JSX.Element} The JSX element representing the collapsed input card.
 */
const CollapsedInputCard = ({ title, expandCard }) => {
  return (
    <Card>
      <CardHeader
        title={title}
        onIconClick={expandCard}
        iconName="chevron-down"
      />
    </Card>
  );
};

export default CollapsedInputCard;
