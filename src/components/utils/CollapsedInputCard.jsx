import Card from "./Card.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const CollapsedInputCard = ({ title, iconId, expandCard }) => {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-extrabold text-red-900">{title}</h2>
        <FontAwesomeIcon
          icon={faChevronDown}
          className="cursor-pointer"
          onClick={expandCard}
          id={iconId}
        />
      </div>
    </Card>
  );
};

export default CollapsedInputCard;
