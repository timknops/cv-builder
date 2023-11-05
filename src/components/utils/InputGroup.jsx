/**
 * InputGroup component.
 * @param {Object} props - The props object.
 * @param {string} labelId - The id of the label element.
 * @param {string} labelText - The text of the label element.
 * @param {string} type - The type of the input element.
 * @param {string} placeholder - The placeholder of the input element.
 * @param {string} value - The value of the input element.
 * @param {Function} onChange - The function to handle the input change.
 * @returns {JSX.Element} - The component JSX.
 */
const InputGroup = ({
  labelId,
  labelText,
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col">
      <label
        className="font-semibold mb-2 text-xs text-gray-600"
        htmlFor={labelId}
      >
        {labelText.toUpperCase()}
      </label>
      <input
        className="border border-gray-300 focus:border-red-900 rounded-md p-3 text-sm outline-none shadow-sm"
        type={type}
        placeholder={placeholder}
        value={value}
        id={labelId}
        onChange={onChange}
      />
    </div>
  );
};

export default InputGroup;
