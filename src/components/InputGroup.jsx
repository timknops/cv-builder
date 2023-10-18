export function InputGroup({
  labelId,
  labelText,
  type,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="flex flex-col">
      <label
        className="font-semibold mb-2 text-xs text-gray-600"
        htmlFor={labelId}
      >
        {labelText.toUpperCase()}
      </label>
      <input
        className="bg-gray-100 focus:bg-white focus:ring-2 ring-inset focus:ring-red-900 rounded-md p-3 text-sm outline-none"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        data-key={labelId}
      />
    </div>
  );
}
