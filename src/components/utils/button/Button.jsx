/**
 * Button component.
 *
 * @component
 * @param {String} type - The type of button.
 * @param {String} text - The text to be displayed on the button.
 * @param {Function} handleClick - The function to handle the button click.
 * @param {String} icon - The icon to be displayed on the button, if any.
 * @returns {JSX.Element} The rendered Button component.
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ type, text, handleClick, icon }) => {
  return (
    <>
      {type === "reset" ? (
        <button
          onClick={handleClick}
          type="reset"
          className="text-sm text-gray-500 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 font-medium px-5 py-2.5 hover:text-gray-900"
        >
          {icon && <FontAwesomeIcon icon={icon} className="mr-2" />}
          {text}
        </button>
      ) : (
        <button
          onClick={handleClick}
          type="submit"
          className="text-sm text-white bg-red-900 hover:bg-red-800 font-medium rounded-lg items-center px-5 py-2.5"
        >
          {icon && <FontAwesomeIcon icon={icon} className="mr-2" />}
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
