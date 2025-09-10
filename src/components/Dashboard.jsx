import { useSelector, useDispatch } from "react-redux";
import { FiPlus, FiRefreshCw, FiMoreVertical, FiSearch } from "react-icons/fi";
import { openAddWidgetModal } from "../features/widgetSlice";
import CategorySection from "./CategorySection";
import AddWidgetModal from "./AddWidgetModel";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { categories, isAddWidgetModalOpen } = useSelector(
    (state) => state.widgets,
  );

  const handleAddWidget = () => {
    dispatch(openAddWidgetModal(null));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">Home</span>
              <span className="text-gray-400">›</span>
              <span className="font-medium text-blue-600">Dashboard V2</span>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <FiSearch className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                <input
                  type="text"
                  placeholder="Search anything..."
                  className="w-64 rounded-md border border-gray-300 py-2 pr-4 pl-10 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <select className="rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500">
                <option>All</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-900">
            CNAPP Dashboard
          </h1>
          <div className="flex items-center space-x-3">
            <button
              onClick={handleAddWidget}
              className="flex items-center space-x-2 rounded-md border border-gray-300 bg-white px-4 py-2 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500"
            >
              <FiPlus className="h-4 w-4" />
              <span>Add Widget</span>
            </button>
            <button className="rounded-md border border-gray-300 bg-white p-2 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500">
              <FiRefreshCw className="h-4 w-4" />
            </button>
            <button className="rounded-md border border-gray-300 bg-white p-2 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500">
              <FiMoreVertical className="h-4 w-4" />
            </button>
            <select className="rounded-md border border-blue-900 px-3 py-2 font-semibold text-blue-900">
              <option>Last 2 days</option>
            </select>
          </div>
        </div>

        <div className="space-y-6">
          {Object.entries(categories).map(([categoryName, widgets]) => (
            <CategorySection
              key={categoryName}
              categoryName={categoryName}
              widgets={widgets}
            />
          ))}
        </div>
      </div>
      {isAddWidgetModalOpen && <AddWidgetModal />}
    </div>
  );
};

export default Dashboard;
