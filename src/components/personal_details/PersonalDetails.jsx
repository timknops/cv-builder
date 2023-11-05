import InputGroup from "../utils/InputGroup.jsx";
import Card from "../utils/Card.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

/**
 * Renders a form for the user to input their personal details.
 * @param {Object} personalDetails - The user's personal details.
 * @param {Function} onUserInput - The function to handle user input.
 * @param {Function} expandCard - The function to expand the card.
 * @returns {JSX.Element} - The component JSX.
 */
const PersonalDetails = ({ personalDetails, onUserInput, expandCard }) => {
  // An object containing the personal details input fields that are required in the InputGroup component.
  const personalDetailsObj = {
    fullName: {
      labelId: "fullName",
      labelText: "Full Name",
      type: "text",
      placeholder: "Enter your full name",
      value: personalDetails.fullName,
    },
    email: {
      labelId: "email",
      labelText: "Email",
      type: "email",
      placeholder: "Enter your email",
      value: personalDetails.email,
    },
    phoneNumber: {
      labelId: "phoneNumber",
      labelText: "Phone Number",
      type: "tel",
      placeholder: "Enter your phone number",
      value: personalDetails.phoneNumber,
    },
    address: {
      labelId: "address",
      labelText: "Address",
      type: "text",
      placeholder: "Enter your address",
      value: personalDetails.address,
    },
  };

  return (
    <Card>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-extrabold text-red-900">
          Personal Details
        </h2>
        <FontAwesomeIcon
          icon={faChevronUp}
          className="cursor-pointer"
          onClick={expandCard}
          id="personalDetails"
        />
      </div>

      <div className="gap-4 flex-col flex">
        {Object.keys(personalDetailsObj).map((key) => (
          <InputGroup
            key={key}
            {...personalDetailsObj[key]}
            onChange={onUserInput}
          />
        ))}
      </div>
    </Card>
  );
};

export default PersonalDetails;
