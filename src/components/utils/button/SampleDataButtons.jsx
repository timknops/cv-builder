import Button from "./Button.jsx";

/**
 * SampleDataButtons component. Used to load & clear sample data.
 *
 * @component
 * @param {Function} resetAllData - The function to reset all data.
 * @param {Function} loadSampleData - The function to load sample data.
 * @returns {JSX.Element} The rendered SampleDataButtons component.
 */
const SampleDataButtons = ({ resetAllData, loadSampleData }) => {
  return (
    <div className="p-4 flex sm:grid sm:grid-cols-2 gap-6 md:pe-0">
      <Button
        text="Clear Data"
        type="reset"
        handleClick={resetAllData}
        icon="fa-solid fa-broom"
      />
      <Button
        text="Load Sample Data"
        handleClick={loadSampleData}
        icon="fa-solid fa-upload"
      />
    </div>
  );
};

export default SampleDataButtons;
