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

      {/** If the type is text, email or tel, render an input element,
       * else render a textarea element */}
      {type === "text" || type === "email" || type === "tel" ? (
        <input
          className="border border-gray-300 focus:border-red-900 rounded-md px-4 py-2 text-sm outline-none transition-all duration-200 ease-in-out focus:ring-1 focus:ring-red-900"
          type={type}
          placeholder={placeholder}
          value={value}
          id={labelId}
          onChange={onChange}
        />
      ) : (
        <textarea
          className="border border-gray-300 focus:border-red-900 rounded-md px-4 py-2 text-sm outline-none transition-all duration-200 ease-in-out focus:ring-1 focus:ring-red-900"
          placeholder={placeholder}
          value={value}
          id={labelId}
          onChange={onChange}
          rows={4}
          cols={50}
        />
      )}
    </div>
  );
};

export default InputGroup;
