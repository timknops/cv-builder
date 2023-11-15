import InputGroup from "../utils/user_input/InputGroup.jsx";
import Card from "../utils/card/Card.jsx";
import CardHeader from "../utils/card/CardHeader.jsx";

/**
 * Renders a form for the user to input their personal details.
 * @param {Object} personalDetails The user's personal details.
 * @param {Function} onUserInput The function to handle user input.
 * @param {Function} expandCard The function to expand the card.
 * @returns {JSX.Element} The component JSX.
 */
const PersonalDetails = ({ personalDetails, onUserInput, collapseCard }) => {
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
      <CardHeader
        title="Personal Details"
        onIconClick={collapseCard}
        iconName="chevron-up"
      />

      <div className="gap-4 flex-col flex mt-5">
        {Object.keys(personalDetailsObj).map((key) => (
          <InputGroup
            key={key}
            {...personalDetailsObj[key]} // Spread operator to pass the object's properties as props.
            onChange={onUserInput}
          />
        ))}
      </div>
    </Card>
  );
};

export default PersonalDetails;
