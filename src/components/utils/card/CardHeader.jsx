import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Renders the card header.
 *
 * @param {string} title The card title.
 * @param {Function} onIconClick The function to handle the icon click.
 * @param {string} iconName The icon name.
 * @returns {JSX.Element} The component JSX.
 */
const CardHeader = ({ title, onIconClick, iconName }) => {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-3xl font-extrabold text-red-900">{title}</h2>

      <FontAwesomeIcon
        icon={iconName}
        className="cursor-pointer p-1"
        onClick={onIconClick}
      />
    </div>
  );
};

export default CardHeader;
