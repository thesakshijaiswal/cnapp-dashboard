import { FiX } from "react-icons/fi";

const WidgetModalHeader = ({ onClose }) => (
  <div className="flex flex-shrink-0 items-center justify-between bg-indigo-900 px-4 py-4 sm:px-6">
    <h2 className="text-lg font-medium text-white">Add Widget</h2>
    <button onClick={onClose}>
      <FiX className="h-5 w-5 text-white" />
    </button>
  </div>
);

export default WidgetModalHeader;
