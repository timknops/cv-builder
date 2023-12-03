import { useState } from "react";
import DeleteModal from "./utils/modal/DeleteModal";

/**
 * Renders a card component for the overview.
 *
 * @param {Object} data - The data object representing the item.
 * @param {Function} onDelete - The function to delete the item.
 * @param {Function} onEdit - The function to handle edit button click.
 * @returns {JSX.Element} The rendered OverviewCard component.
 */
const OverviewCard = ({ data, onDelete, onEdit }) => {
  const [modalActive, setModalActive] = useState(false);

  const handleModal = () => {
    setModalActive(!modalActive);
  };

  return (
    <div className="bg-gray-50 border p-4 shadow-sm rounded-md gap-2 flex flex-col mt-5">
      <div className="flex justify-between items-stretch gap-3">
        <div className="flex flex-col items-start justify-between">
          <h4 className="text-md font-semibold text-gray-900">{data.title}</h4>
          <h6 className="text-sm text-gray-700">{data.subtitle}</h6>
        </div>

        <div className="flex flex-col justify-between">
          <div className="flex gap-2 items-end h-full">
            <button
              onClick={handleModal}
              type="button"
              className="text-white bg-red-900 hover:bg-red-800 font-medium rounded-lg text-xs inline-flex items-center px-3 py-2 text-center"
            >
              Delete
            </button>

            <button
              onClick={() => onEdit(data.id)}
              type="button"
              className="text-gray-500 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 text-xs font-medium px-3 py-2 hover:text-gray-900"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
      {modalActive && (
        <DeleteModal
          text="Are you sure you want to delete "
          textHighlight={data.title}
          handleModal={handleModal}
          continueAction={() => onDelete(data.id)}
        />
      )}
    </div>
  );
};

export default OverviewCard;
