const NewEducationButton = ({ onNewEducation }) => {
  return (
    <div
      onClick={onNewEducation}
      className="bg-gray-50 text-gray-400 border-2 border-dashed p-4 shadow-sm rounded-md mt-5 flex items-center justify-center cursor-pointer hover:bg-gray-100 hover:text-red-900"
    >
      <h6 className="text-sm font-medium">+ Add New Education</h6>
    </div>
  );
};

export default NewEducationButton;
