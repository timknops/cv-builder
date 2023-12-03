import OverviewCard from "./OverviewCard";
import NewButtonCard from "./utils/card/NewButtonCard";

/**
 * Renders a list of OverviewCard components.
 *
 * @param {Array} data - Array of data objects.
 * @param {Function} onDelete - Function to delete the item.
 * @param {Function} onEdit - Function to handle edit button click.
 * @param {Function} onNewButtonClick - Function to handle new button click.
 * @param {String} buttonText - Text for the new button.
 * @returns {JSX.Element} The rendered OverviewList component.
 */
const OverviewList = ({
  data,
  onDelete,
  onEdit,
  onNewButtonClick,
  buttonText,
}) => {
  return (
    <>
      {data.map((item) => (
        <OverviewCard
          key={item.id}
          data={item}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
      <NewButtonCard
        onNewButtonClick={onNewButtonClick}
        buttonText={buttonText}
      />
    </>
  );
};

export default OverviewList;
