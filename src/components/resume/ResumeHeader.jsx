import ResumeHeaderInfoText from "./ResumeHeaderInfoText.jsx";

const ResumeHeader = ({ personalDetails }) => {
  return (
    <div className="w-full flex items-center justify-center bg-red-900 text-gray-50 p-5 rounded-t-lg">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-center">
          {personalDetails.fullName}
        </h1>

        <div className="flex gap-4">
          <ResumeHeaderInfoText text={personalDetails.email} icon="envelope" />
          <ResumeHeaderInfoText
            text={personalDetails.phoneNumber}
            icon="phone"
          />
          <ResumeHeaderInfoText
            text={personalDetails.address}
            icon="map-marker-alt"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeHeader;
