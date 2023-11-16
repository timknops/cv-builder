const Popover = () => {
  return (
    <div
      data-popover
      id="popover-click"
      role="tooltip"
      className=" absolute mb-10 z-10 inline-block w-64 text-sm text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm"
    >
      <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg">
        <h3 className="font-semibold text-gray-900 ">Popover click</h3>
      </div>
      <div className="px-3 py-2">
        <p>Test</p>
      </div>
      <div data-popper-arrow></div>
    </div>
  );
};

export default Popover;
