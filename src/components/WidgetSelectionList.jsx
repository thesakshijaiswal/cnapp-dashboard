const WidgetSelectionList = ({ widgets, selectedWidgets, onToggle }) => {
  if (!widgets || widgets.length === 0) {
    return (
      <p className="py-8 text-center text-sm text-gray-500">
        No widgets available for this category
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {widgets.map((widgetName) => (
        <label
          key={widgetName}
          className="flex cursor-pointer items-start space-x-3 rounded-lg border border-gray-100 p-3 hover:bg-gray-50"
        >
          <input
            type="checkbox"
            checked={selectedWidgets.has(widgetName)}
            onChange={() => onToggle(widgetName)}
            className="mt-0.5 h-4 w-4 flex-shrink-0 rounded border-gray-300 accent-black focus:ring-blue-500"
          />
          <span className="flex-1 text-sm break-words text-gray-700">
            {widgetName}
          </span>
        </label>
      ))}
    </div>
  );
};

export default WidgetSelectionList;
