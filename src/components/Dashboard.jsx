import { useSelector, useDispatch } from "react-redux";
import { FaClock } from "react-icons/fa";
import { openAddWidgetModal } from "../features/widgetSlice";
import CategorySection from "./CategorySection";
import AddWidgetModal from "./AddWidgetModel";
import Header from "./Header";
import { FiPlus, FiRefreshCw, FiMoreVertical } from "react-icons/fi";

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
      <Header />
      <div className="max-w-8xl mx-auto bg-blue-50 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-900">
            CNAPP Dashboard
          </h1>
          <div className="flex flex-col md:flex-row md:items-center md:space-x-3">
            <button
              onClick={handleAddWidget}
              className="flex items-center space-x-2 rounded-md border border-gray-300 bg-white px-4 py-2 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500"
            >
              <FiPlus className="h-4 w-4" />
              <span>Add Widget</span>
            </button>
            <button className="hidden rounded-md border border-gray-300 bg-white p-2 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 md:block">
              <FiRefreshCw className="h-4 w-4" />
            </button>
            <button className="hidden rounded-md border border-gray-300 bg-white p-2 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 md:block">
              <FiMoreVertical className="h-4 w-4" />
            </button>
            <div className="mt-3 flex h-10 items-center gap-2 rounded-md border border-blue-900 px-2 font-semibold text-blue-900 md:mt-0">
              <FaClock size={20} />
              <span className="h-8 w-0.5 bg-indigo-900"></span>
              <select className="border-none outline-none">
                <option>Last 2 days</option>
              </select>
            </div>
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
