import { useSelector, useDispatch } from "react-redux";
import { FaClock } from "react-icons/fa";
import { openAddWidgetModal } from "../features/widgetSlice";
import CategorySection from "./CategorySection";
import AddWidgetModal from "./AddWidgetModel";
import Header from "./Header";
import { FiPlus, FiRefreshCw, FiMoreVertical } from "react-icons/fi";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { categories, searchTerm, isAddWidgetModalOpen } = useSelector(
    (state) => state.widgets,
  );

  const handleAddWidget = () => {
    dispatch(openAddWidgetModal(null));
  };

  const filteredCategories = Object.entries(categories).reduce(
    (acc, [categoryName, widgets]) => {
      const categoryMatch = categoryName
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const widgetMatches = widgets.filter((w) =>
        w.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );

      if (categoryMatch || widgetMatches.length > 0) {
        acc[categoryName] = categoryMatch ? widgets : widgetMatches;
      }
      return acc;
    },
    {},
  );

  const hasResults = Object.keys(filteredCategories).length > 0;

  return (
    <div className="min-h-screen bg-blue-50">
      <Header />
      <div className="max-w-8xl mx-auto px-1 py-6 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col items-center justify-between sm:flex-row">
          <h1 className="text-xl font-semibold text-gray-900">
            CNAPP Dashboard
          </h1>
          <div className="mt-4 flex items-center gap-4 sm:mt-0 sm:gap-3">
            <button
              onClick={handleAddWidget}
              className="flex items-center space-x-2 rounded-md border border-gray-300 bg-white px-2 py-2 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 sm:px-4"
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
            <div className="flex h-10 items-center gap-2 rounded-md border border-blue-900 px-1 font-semibold text-blue-900">
              <FaClock size={20} />
              <span className="h-8 w-0.5 bg-indigo-900"></span>
              <select id="duration" className="border-none outline-none">
                <option>Last 2 days</option>
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-6 px-2">
          {!hasResults && (
            <div className="text-center text-gray-500 italic">
              No results found for "{searchTerm}"
            </div>
          )}

          {hasResults &&
            Object.entries(filteredCategories).map(
              ([categoryName, widgets]) => (
                <CategorySection
                  key={categoryName}
                  categoryName={categoryName}
                  widgets={widgets}
                />
              ),
            )}
        </div>
      </div>
      {isAddWidgetModalOpen && <AddWidgetModal />}
    </div>
  );
};

export default Dashboard;
