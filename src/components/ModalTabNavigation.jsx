const ModalTabNavigation = ({ tabConfig, activeTab, setActiveTab }) => {
  return (
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
  );
};

export default ModalTabNavigation;
