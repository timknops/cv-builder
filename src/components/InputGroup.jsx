export function InputGroup({ labelId, labelText, type, placeholder, value }) {
  return (
    <div className="flex flex-col">
      <label className="font-semibold mb-2 text-sm" htmlFor={labelId}>
        {labelText}
      </label>
      <input
        className="bg-gray-50 focus:bg-gray-100 transition-colors rounded-md p-3 text-sm outline-none"
        type={type}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
}
