/**
 * Component that renders a button to add a new item.
 * @param {Function} onNewEducation - The callback function to be called when the button is clicked.
 * @param {String} buttonText - The text to be displayed on the button.
 * @returns {JSX.Element} The rendered button component.
 */
const NewButtonCard = ({ onNewButtonClick, buttonText }) => {
  return (
    <div
      onClick={onNewButtonClick}
      className="bg-gray-50 text-gray-400 border-2 border-dashed p-4 shadow-sm rounded-md mt-5 flex items-center justify-center cursor-pointer hover:bg-gray-100 hover:text-red-900"
    >
      <h6 className="text-sm font-medium">+ {buttonText}</h6>
    </div>
  );
};

export default NewButtonCard;
