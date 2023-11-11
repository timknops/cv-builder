/**
 * InputGroup component.
 *
 * @param {string} labelId The label id.
 * @param {string} abelText The label text.
 * @param {string} type The input type.
 * @param {string} placeholder The input placeholder.
 * @param {string} value The input value.
 * @param {Function} onChange The function to handle input change.
 * @returns {JSX.Element} The component JSX.
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
