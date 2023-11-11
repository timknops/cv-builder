import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ResumeHeader = ({ personalDetails }) => {
  return (
    <div className="w-full flex items-center justify-center bg-red-900 text-gray-50 p-5 rounded-t-lg">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-center">
          {personalDetails.fullName}
        </h1>

        <div className="flex gap-4">
          <div className="flex gap-2 items-center text-sm">
            <FontAwesomeIcon icon="envelope" />
            <p>{personalDetails.email}</p>
          </div>
          <div className="flex gap-2 items-center text-sm">
            <FontAwesomeIcon icon="phone" />
            <p>{personalDetails.phoneNumber}</p>
          </div>
          <div className="flex gap-2 items-center text-sm">
            <FontAwesomeIcon icon="map-marker-alt" />
            <p>{personalDetails.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeHeader;
