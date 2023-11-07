import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ResumeHeaderInfoText = ({ icon, text }) => {
  return (
    <div className="flex gap-2 items-center text-sm">
      <FontAwesomeIcon icon={icon} />
      <p>{text}</p>
    </div>
  );
};

export default ResumeHeaderInfoText;
