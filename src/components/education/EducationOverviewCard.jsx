import { useState } from "react";
import Popover from "../utils/popover/Popover";

const EducationOverviewCard = ({ singleDegree }) => {
  const [open, setOpen] = useState(false);

  const handlePopoverClick = () => {
    setOpen(!open);
  };

  return (
    <div className="bg-gray-50 border p-4 shadow-sm rounded-md gap-2 flex flex-col mt-5">
      <div className="flex justify-between items-stretch gap-3">
        <div className="flex flex-col items-start justify-between">
          <h4 className="text-md font-semibold text-gray-900">
            {singleDegree.degree}
          </h4>
          <h6 className="text-sm text-gray-700">{singleDegree.school}</h6>
        </div>

        <div className="flex flex-col justify-between">
          <div className="flex gap-2 items-end h-full">
            <button
              data-popover-target="popover-click"
              data-popover-trigger="click"
              type="button"
              onClick={handlePopoverClick}
              className="px-3 py-2 text-xs font-medium bg-red-900 text-white border border-red-900 rounded-md hover:border-red-800 hover:bg-red-800 focus:outline-none transition duration-50"
            >
              Delete
            </button>
            {open && <Popover />}
            <button
              type="button"
              className="px-3 py-2 text-xs font-medium text-gray-800 border border-gray-800 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none transition duration-50"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationOverviewCard;
