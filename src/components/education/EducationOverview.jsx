const EducationOverview = ({ education }) => {
  console.log(education);

  // TODO: Make into a component and loop over the array.

  return (
    <div className="bg-gray-100 border p-4 shadow-sm rounded-md gap-2 flex flex-col mt-5">
      <div className="flex justify-between items-stretch">
        <div className="flex flex-col items-start justify-between">
          <h4 className="text-lg font-semibold text-gray-900">
            {education[0].degree}
          </h4>
          <h6 className="text-sm text-gray-700">{education[0].school}</h6>
        </div>

        <div className="flex flex-col justify-between">
          <div className="flex gap-2 items-end h-full">
            <button
              type="button"
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
    </div>
  );
};

export default EducationOverview;
