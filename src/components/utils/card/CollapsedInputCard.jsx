import Card from "./Card.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CollapsedInputCard = ({ title, expandCard }) => {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-extrabold text-red-900">{title}</h2>

        <FontAwesomeIcon
          icon="chevron-down"
          className="cursor-pointer p-1"
          onClick={expandCard}
        />
      </div>
    </Card>
  );
};

export default CollapsedInputCard;
