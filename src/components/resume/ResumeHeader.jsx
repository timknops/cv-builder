import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Renders the header section of a resume.
 *
 * @param {Object} personalDetails - The personal details displayed in the header.
 * @param {string} personalDetails.fullName - The full name of the user.
 * @param {string} personalDetails.email - The email address of the user.
 * @param {string} personalDetails.phoneNumber - The phone number of the user.
 * @param {string} personalDetails.address - The address of the user.
 * @returns {JSX.Element} The rendered header component.
 */
const ResumeHeader = ({ personalDetails }) => {
  return (
    <div className="w-full flex items-center justify-center bg-red-900 text-gray-50 p-5 rounded-t-lg md:min-h-[104px]">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-center">
          {personalDetails.fullName}
        </h1>

        <div className="flex gap-4">
          {personalDetails.email !== "" && (
            <div className="flex gap-2 items-center text-sm">
              <FontAwesomeIcon icon="envelope" />
              <p>{personalDetails.email}</p>
            </div>
          )}
          {personalDetails.phoneNumber !== "" && (
            <div className="flex gap-2 items-center text-sm">
              <FontAwesomeIcon icon="phone" />
              <p>{personalDetails.phoneNumber}</p>
            </div>
          )}
          {personalDetails.address !== "" && (
            <div className="flex gap-2 items-center text-sm">
              <FontAwesomeIcon icon="map-marker-alt" />
              <p>{personalDetails.address}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeHeader;
