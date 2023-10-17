import { InputGroup } from "../InputGroup.jsx";

function PersonalDetails({ fullName, email, phoneNumber, address }) {
  return (
    <div className="bg-white rounded-lg p-6 h-fit shadow-sm w-full">
      <h2 className="text-2xl font-extrabold text-red-900 mb-6">
        Personal Details
      </h2>
      <div className="flex flex-col gap-3">
        <InputGroup
          labelId="full-name"
          labelText="Full Name"
          type="text"
          placeholder="Enter your full name"
          value={fullName}
        />
        <InputGroup
          labelId="email"
          labelText="Email"
          type="email"
          placeholder="example@gmail.com"
          value={email}
        />
        <InputGroup
          labelId="phone-number"
          labelText="Phone Number"
          type="tel"
          placeholder="Enter your phone number"
          value={phoneNumber}
        />
        <InputGroup
          labelId="address"
          labelText="Address"
          type="text"
          placeholder="Enter your address"
          value={address}
        />
      </div>
    </div>
  );
}

export default PersonalDetails;
