import InputGroup from "../InputGroup.jsx";

/**
 * Renders a form for the user to input their personal details.
 * @param {Object} personalDetails - The user's personal details.
 * @param {Function} onUserInput - The function to handle user input.
 * @returns {JSX.Element} - The component JSX.
 */
const PersonalDetails = ({ personalDetails, onUserInput }) => {
  // An object containing the personal details input fields that are required in the InputGroup component.
  const personalDetailsObj = {
    fullname: {
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
    <div className="bg-white rounded-lg p-6 h-fit shadow-sm w-full">
      <h2 className="text-3xl font-extrabold text-red-900 mb-6">
        Personal Details
      </h2>
      {Object.keys(personalDetailsObj).map((key) => (
        <InputGroup
          key={key}
          {...personalDetailsObj[key]}
          onChange={onUserInput}
        />
      ))}
    </div>
  );
};

export default PersonalDetails;
