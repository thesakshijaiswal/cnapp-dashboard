import { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FiX, FiPlus } from "react-icons/fi";
import {
  closeAddWidgetModal,
  addWidget,
  removeWidget,
} from "../features/widgetSlice";
import WidgetCreationForm from "./WidgetCreationForm";
import widgetData from "../data/widgetData";

const AddWidgetModal = () => {
  const dispatch = useDispatch();
  const { categories, selectedCategory } = useSelector(
    (state) => state.widgets,
  );

  const [activeTab, setActiveTab] = useState("CSPM Executive Dashboard");
  const [selectedWidgets, setSelectedWidgets] = useState(new Set());
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newWidgetForm, setNewWidgetForm] = useState({
    name: "",
    text: "",
    category: selectedCategory || "CSPM Executive Dashboard",
  });

  const handleClose = () => {
    dispatch(closeAddWidgetModal());
    setSelectedWidgets(new Set());
    setShowCreateForm(false);
    setNewWidgetForm({
      name: "",
      text: "",
      category: selectedCategory || "CSPM Executive Dashboard",
    });
  };

  const handleConfirm = () => {
    const existingWidgets = categories[activeTab] || [];
    const existingWidgetNames = new Set(existingWidgets.map((w) => w.name));

    selectedWidgets.forEach((widgetName) => {
      if (!existingWidgetNames.has(widgetName)) {
        const widgetFromData = widgetData[activeTab]?.find(
          (w) => w.name === widgetName,
        );
        if (widgetFromData) {
          dispatch(
            addWidget({
              category: activeTab,
              widget: widgetFromData,
            }),
          );
        }
      }
    });

    existingWidgets.forEach((widget) => {
      if (!selectedWidgets.has(widget.name)) {
        dispatch(removeWidget({ category: activeTab, widgetId: widget.id }));
      }
    });

    handleClose();
  };

  const handleCreateWidget = (e) => {
    e.preventDefault();
    if (newWidgetForm.name.trim() && newWidgetForm.text.trim()) {
      dispatch(
        addWidget({
          category: newWidgetForm.category,
          widget: {
            id: Date.now(),
            name: newWidgetForm.name,
            type: "text",
            data: { text: newWidgetForm.text },
          },
        }),
      );
      handleClose();
    }
  };

  const handleWidgetToggle = (widgetName) => {
    const newSelected = new Set(selectedWidgets);
    if (newSelected.has(widgetName)) {
      newSelected.delete(widgetName);
    } else {
      newSelected.add(widgetName);
    }
    setSelectedWidgets(newSelected);
  };

  const availableWidgets = useMemo(() => {
    const widgets = {};
    Object.entries(widgetData).forEach(([categoryName, categoryWidgets]) => {
      widgets[categoryName] = categoryWidgets.map((widget) => widget.name);
    });

    Object.entries(categories).forEach(([categoryName, categoryWidgets]) => {
      const existing = widgets[categoryName] || [];
      const custom = categoryWidgets
        .filter((w) => !existing.includes(w.name))
        .map((w) => w.name);

      widgets[categoryName] = [...existing, ...custom];
    });

    widgets["Ticket"] = widgets["Ticket"] || [];
    return widgets;
  }, [categories]);

  const tabConfig = [
    { display: "CSPM", category: "CSPM Executive Dashboard" },
    { display: "CWPP", category: "CWPP Dashboard" },
    { display: "Image", category: "Registry Scan" },
    { display: "Ticket", category: "Ticket" },
  ];

  useEffect(() => {
    if (activeTab && categories[activeTab]) {
      const activeWidgetNames = categories[activeTab].map((w) => w.name);
      setSelectedWidgets(new Set(activeWidgetNames));
    } else {
      setSelectedWidgets(new Set());
    }
  }, [activeTab, categories]);

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="flex-1 bg-black/50" onClick={handleClose}></div>

      <div className="flex h-full w-full flex-col bg-white shadow-2xl sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5">
        <div className="flex flex-shrink-0 items-center justify-between bg-indigo-900 px-4 py-4 sm:px-6">
          <h2 className="text-lg font-medium text-white">Add Widget</h2>
          <button onClick={handleClose}>
            <FiX className="h-5 w-5 text-white" />
          </button>
        </div>

        <div className="flex-shrink-0 border-b border-gray-100 px-4 py-3 sm:px-6">
          <p className="text-sm text-gray-600">
            Personalise your dashboard by adding the following widget
          </p>
        </div>

        {!showCreateForm && (
          <div className="flex flex-shrink-0 overflow-x-auto border-b border-gray-200">
            {tabConfig.map((tab) => (
              <button
                key={tab.display}
                onClick={() => setActiveTab(tab.category)}
                className={`min-w-0 flex-1 px-3 py-3 text-center text-xs font-medium whitespace-nowrap sm:px-4 sm:text-sm ${
                  activeTab === tab.category
                    ? "border-b-2 border-indigo-900 bg-indigo-50 text-indigo-900"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
                }`}
              >
                {tab.display}
              </button>
            ))}
          </div>
        )}

        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {!showCreateForm ? (
            <>
              <div className="space-y-3">
                {availableWidgets[activeTab]?.length > 0 ? (
                  availableWidgets[activeTab].map((widgetName) => (
                    <label
                      key={widgetName}
                      className="flex cursor-pointer items-start space-x-3 rounded-lg border border-gray-100 p-3 hover:bg-gray-50"
                    >
                      <input
                        type="checkbox"
                        checked={selectedWidgets.has(widgetName)}
                        onChange={() => handleWidgetToggle(widgetName)}
                        className="mt-0.5 h-4 w-4 flex-shrink-0 rounded border-gray-300 accent-black focus:ring-blue-500"
                      />
                      <span className="flex-1 text-sm break-words text-gray-700">
                        {widgetName}
                      </span>
                    </label>
                  ))
                ) : (
                  <p className="py-8 text-center text-sm text-gray-500">
                    {activeTab === "Ticket"
                      ? "No widgets available to add or remove for Ticket category"
                      : "No widgets available for this category"}
                  </p>
                )}
              </div>

              <div className="my-6 border-t border-gray-200"></div>

              <div className="space-y-3">
                <button
                  onClick={() => setShowCreateForm(true)}
                  className="flex w-full items-center space-x-2 rounded-lg bg-indigo-50 p-3 text-left text-sm font-medium text-indigo-900 transition-colors hover:bg-indigo-100"
                >
                  <FiPlus className="h-4 w-4 flex-shrink-0" />
                  <span>Create Custom Widget</span>
                </button>
              </div>
            </>
          ) : (
            <WidgetCreationForm
              categories={categories}
              newWidgetForm={newWidgetForm}
              setNewWidgetForm={setNewWidgetForm}
              handleCreateWidget={handleCreateWidget}
              onBack={() => setShowCreateForm(false)}
            />
          )}
        </div>

        <div className="flex-shrink-0 border-t border-gray-200 bg-gray-50 px-4 py-4 sm:px-6">
          <div className="flex flex-col justify-end space-y-2 sm:flex-row sm:space-y-0 sm:space-x-3">
            <button
              onClick={handleClose}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 sm:w-auto"
            >
              Cancel
            </button>
            {!showCreateForm && activeTab !== "Ticket" && (
              <button
                onClick={handleConfirm}
                className="w-full rounded-lg border border-transparent bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 sm:w-auto"
              >
                Confirm
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddWidgetModal;
