import { FiPlus } from "react-icons/fi";
import { IoMdArrowRoundBack } from "react-icons/io";
const WidgetCreationForm = ({
  categories,
  newWidgetForm,
  setNewWidgetForm,
  handleCreateWidget,
  onBack,
}) => {
  return (
    <div>
      <div className="mb-6 flex flex-col justify-between space-y-2 sm:flex-row sm:items-center sm:space-y-0">
        <h3 className="text-lg font-medium text-gray-900">
          Create Custom Widget
        </h3>
        <button
          onClick={onBack}
          className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-sm font-medium text-white"
        >
          <IoMdArrowRoundBack />
          <span>Back</span>
        </button>
      </div>

      <form onSubmit={handleCreateWidget} className="space-y-6">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            value={newWidgetForm.category}
            onChange={(e) =>
              setNewWidgetForm((prev) => ({
                ...prev,
                category: e.target.value,
              }))
            }
            className="w-full rounded-lg border border-gray-300 px-3 py-3 text-sm focus:border-transparent focus:ring-2 focus:ring-blue-500"
          >
            {Object.keys(categories).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Widget Name
          </label>
          <input
            type="text"
            value={newWidgetForm.name}
            onChange={(e) =>
              setNewWidgetForm((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
            placeholder="Enter widget name..."
            className="w-full rounded-lg border border-gray-300 px-3 py-3 text-sm focus:border-transparent focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Widget Text
          </label>
          <textarea
            value={newWidgetForm.text}
            onChange={(e) =>
              setNewWidgetForm((prev) => ({
                ...prev,
                text: e.target.value,
              }))
            }
            placeholder="Enter widget content..."
            rows={4}
            className="w-full resize-none rounded-lg border border-gray-300 px-3 py-3 text-sm focus:border-transparent focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center space-x-2 rounded-lg bg-indigo-900 px-4 py-3 text-sm font-medium text-white"
        >
          <FiPlus className="h-5 w-5" />
          <span>Create Widget</span>
        </button>
      </form>
    </div>
  );
};

export default WidgetCreationForm;
