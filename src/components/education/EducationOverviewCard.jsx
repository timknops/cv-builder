import { useState } from "react";
import DeleteModal from "../utils/modal/DeleteModal";

const EducationOverviewCard = ({ singleDegree, deleteEducation }) => {
  const [modalActive, setModalActive] = useState(false);

  const handleModal = () => {
    setModalActive(!modalActive);
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
              type="button"
              data-modal-target="popup-modal"
              data-modal-toggle="popup-modal"
              onClick={handleModal}
              className="px-3 py-2 text-xs font-medium bg-red-900 text-white border border-red-900 rounded-md hover:border-red-800 hover:bg-red-800 focus:outline-none transition duration-50"
            >
              Delete
            </button>

            <button
              type="button"
              className="px-3 py-2 text-xs font-medium text-gray-800 border border-gray-800 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none transition duration-50"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
      {modalActive && (
        <DeleteModal
          text="Are you sure you want to delete "
          textHighlight={singleDegree.degree}
          handleModal={handleModal}
          continueAction={() => deleteEducation(singleDegree.id)}
        />
      )}
    </div>
  );
};

export default EducationOverviewCard;
