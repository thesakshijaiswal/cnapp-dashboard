import { useDispatch } from "react-redux";
import { FiPlus } from "react-icons/fi";
import { openAddWidgetModal } from "../features/widgetSlice";
import WidgetCard from "./WidgetCard";

const CategorySection = ({ categoryName, widgets }) => {
  const dispatch = useDispatch();

  const handleAddWidget = () => {
    dispatch(openAddWidgetModal(categoryName));
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">{categoryName}</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {widgets.map((widget) => (
          <WidgetCard
            key={widget.id}
            widget={widget}
            categoryName={categoryName}
          />
        ))}

        <div className="flex min-h-[300px] items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-white p-6 transition-colors hover:border-gray-400 hover:bg-gray-50">
          <button
            className="flex cursor-pointer items-center rounded-md border border-gray-300 px-4 py-2"
            onClick={handleAddWidget}
          >
            <FiPlus className="mr-3 h-6 w-6 text-gray-400" />
            <span className="font-medium text-gray-500">Add Widget</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
